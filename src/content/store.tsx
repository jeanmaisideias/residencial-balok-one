import { Fragment, useSyncExternalStore } from "react";
import { supabase } from "@/integrations/supabase/client";
import { defaults } from "./schema";

let overrides: Record<string, string> = {};
let snapshot: Record<string, string> = { ...defaults };
const listeners = new Set<() => void>();

function setOverrides(o: Record<string, string>) {
  overrides = o;
  snapshot = { ...defaults, ...Object.fromEntries(Object.entries(o).filter(([, v]) => v !== "")) };
  listeners.forEach((l) => l());
}

export async function loadContent(): Promise<Record<string, string>> {
  try {
    const { data, error } = await supabase.from("site_content").select("key,value");
    if (error || !data) return overrides;
    setOverrides(Object.fromEntries(data.map((r) => [r.key, r.value])));
  } catch {
    /* mantém os padrões */
  }
  return overrides;
}

/** Aguarda o conteúdo por no máximo `ms` antes de liberar a renderização. */
export function loadContentWithTimeout(ms = 800) {
  return Promise.race([loadContent(), new Promise((r) => setTimeout(r, ms))]);
}

export function useContent() {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    () => snapshot
  );
}

export function getContent(key: string) {
  return snapshot[key] ?? defaults[key] ?? "";
}

/** Converte quebras de linha em <br />. */
export function lines(text: string) {
  const parts = text.split("\n");
  return parts.map((p, i) => (
    <Fragment key={i}>{p}{i < parts.length - 1 && <br />}</Fragment>
  ));
}

export function whatsappUrl(message: string, number = getContent("contact.whatsapp")) {
  const phone = number.replace(/\D/g, "");
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
