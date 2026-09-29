import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { groups, defaults, type Field } from "@/content/schema";
import { loadContent } from "@/content/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const TEN_YEARS = 60 * 60 * 24 * 365 * 10;
const MAX_MB = 5;

function useNoIndex() {
  useEffect(() => {
    const m = document.createElement("meta");
    m.name = "robots";
    m.content = "noindex, nofollow";
    document.head.appendChild(m);
    const prev = document.title;
    document.title = "Painel administrativo — Ballock One";
    return () => { m.remove(); document.title = prev; };
  }, []);
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError("E-mail ou senha inválidos.");
    setBusy(false);
  };

  const forgot = async () => {
    if (!email) { setError("Informe seu e-mail para redefinir a senha."); return; }
    await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.href });
    toast.success("Enviamos um link de redefinição para o seu e-mail.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <form onSubmit={submit} className="w-full max-w-sm space-y-5 bg-card p-8 rounded-2xl shadow-elevated border border-border">
        <div>
          <h1 className="font-display text-2xl text-primary">Painel Ballock One</h1>
          <p className="text-sm text-muted-foreground mt-1">Acesso restrito</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full" disabled={busy}>{busy ? "Entrando..." : "Entrar"}</Button>
        <button type="button" onClick={forgot} className="text-xs text-muted-foreground underline w-full">Esqueci minha senha</button>
      </form>
    </div>
  );
}

function SetPassword({ onDone }: { onDone: () => void }) {
  const [password, setPassword] = useState("");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) { toast.error("Não foi possível definir a senha: " + error.message); return; }
    toast.success("Senha definida com sucesso.");
    onDone();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <form onSubmit={submit} className="w-full max-w-sm space-y-5 bg-card p-8 rounded-2xl shadow-elevated border border-border">
        <h1 className="font-display text-2xl text-primary">Definir nova senha</h1>
        <Input type="password" minLength={8} required placeholder="Mínimo 8 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" className="w-full">Salvar senha</Button>
      </form>
    </div>
  );
}

function ImageField({ field, value, onChange }: { field: Field; value: string; onChange: (v: string) => void }) {
  const [busy, setBusy] = useState(false);
  const accept = field.type === "video" ? "video/mp4" : "image/jpeg,image/png,image/webp";
  const max = field.type === "video" ? 20 : MAX_MB;

  const upload = async (file: File) => {
    if (file.size > max * 1024 * 1024) { toast.error(`Arquivo acima de ${max} MB.`); return; }
    setBusy(true);
    const ext = file.name.split(".").pop()?.toLowerCase() || "bin";
    const path = `${field.key}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("site-images").upload(path, file, { contentType: file.type });
    if (error) { toast.error("Falha no envio: " + error.message); setBusy(false); return; }
    const { data, error: e2 } = await supabase.storage.from("site-images").createSignedUrl(path, TEN_YEARS);
    setBusy(false);
    if (e2 || !data) { toast.error("Falha ao gerar o endereço do arquivo."); return; }
    onChange(data.signedUrl);
    toast.message("Arquivo carregado. Clique em “Salvar alterações” para publicar.");
  };

  return (
    <div className="space-y-2">
      <Label>{field.label}</Label>
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {field.type === "video" ? (
          <video src={value} muted className="w-full sm:w-56 aspect-video object-cover rounded-lg bg-muted" />
        ) : (
          <img src={value} alt={field.label} className="w-full sm:w-56 aspect-video object-cover rounded-lg bg-muted" />
        )}
        <div className="flex flex-col gap-2 w-full">
          <label className="inline-flex">
            <input type="file" accept={accept} className="hidden" disabled={busy}
              onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); e.target.value = ""; }} />
            <span className="cursor-pointer inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent/10">
              {busy ? "Enviando..." : field.type === "video" ? "Substituir vídeo" : "Substituir imagem"}
            </span>
          </label>
          {field.type === "video" && (
            <Input placeholder="ou cole o endereço de um MP4" value={value === field.default ? "" : value}
              onChange={(e) => onChange(e.target.value || field.default)} />
          )}
          {value !== field.default && (
            <button type="button" onClick={() => onChange(field.default)} className="text-xs text-muted-foreground underline text-left">
              Restaurar original
            </button>
          )}
          {field.hint && <p className="text-xs text-muted-foreground">{field.hint}</p>}
        </div>
      </div>
    </div>
  );
}

function Editor({ user }: { user: User }) {
  const [values, setValues] = useState<Record<string, string>>({ ...defaults });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadContent().then((o) => setValues({ ...defaults, ...o }));
  }, []);

  const set = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const save = async () => {
    setSaving(true);
    const custom = Object.entries(values).filter(([k, v]) => v.trim() !== "" && v !== defaults[k]);
    const reset = Object.keys(defaults).filter((k) => !custom.some(([ck]) => ck === k));
    const now = new Date().toISOString();
    const r1 = custom.length
      ? await supabase.from("site_content").upsert(custom.map(([key, value]) => ({ key, value, updated_at: now })))
      : { error: null };
    const r2 = await supabase.from("site_content").delete().in("key", reset);
    setSaving(false);
    if (r1.error || r2.error) { toast.error("Não foi possível salvar. Tente novamente."); return; }
    await loadContent();
    toast.success("Alterações salvas com sucesso! O site já está atualizado.");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border">
        <div className="container max-w-4xl flex items-center justify-between py-4 gap-4">
          <div>
            <h1 className="font-display text-xl text-primary">Painel Ballock One</h1>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={save} disabled={saving}>{saving ? "Salvando..." : "Salvar alterações"}</Button>
            <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sair</Button>
          </div>
        </div>
      </header>
      <main className="container max-w-4xl py-8 space-y-8">
        {groups.map((g) => (
          <section key={g.title} className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <h2 className="font-display text-lg text-primary">{g.title}</h2>
            {g.fields.map((f) =>
              f.type === "image" || f.type === "video" ? (
                <ImageField key={f.key} field={f} value={values[f.key]} onChange={(v) => set(f.key, v)} />
              ) : (
                <div key={f.key} className="space-y-2">
                  <Label htmlFor={f.key}>{f.label}</Label>
                  {f.type === "textarea" ? (
                    <Textarea id={f.key} rows={2} value={values[f.key]} onChange={(e) => set(f.key, e.target.value)} />
                  ) : (
                    <Input id={f.key} value={values[f.key]} onChange={(e) => set(f.key, e.target.value)} />
                  )}
                  {f.hint && <p className="text-xs text-muted-foreground">{f.hint}</p>}
                </div>
              )
            )}
          </section>
        ))}
        <div className="flex justify-end pb-10">
          <Button onClick={save} disabled={saving}>{saving ? "Salvando..." : "Salvar alterações"}</Button>
        </div>
      </main>
    </div>
  );
}

export default function Admin() {
  useNoIndex();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [recovery, setRecovery] = useState(window.location.hash.includes("type=recovery"));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      if (data.user) {
        const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).eq("role", "admin");
        setIsAdmin(!!roles?.length);
      } else setIsAdmin(null);
      setReady(true);
    };
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      setTimeout(check, 0);
    });
    check();
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return null;
  if (recovery && user) return <SetPassword onDone={() => { setRecovery(false); history.replaceState(null, "", window.location.pathname); }} />;
  if (!user) return <Login />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
        <p className="text-muted-foreground">Este usuário não tem permissão de administrador.</p>
        <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sair</Button>
      </div>
    );
  }
  return <Editor user={user} />;
}
