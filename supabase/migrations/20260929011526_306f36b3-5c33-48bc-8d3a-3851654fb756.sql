create type public.app_role as enum ('admin', 'user');
create table public.user_roles (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null, role app_role not null, unique (user_id, role));
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role) returns boolean language sql stable security definer set search_path = public as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;
create policy "Users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create table public.site_content (key text primary key, value text not null, updated_at timestamptz not null default now());
grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;
grant all on public.site_content to service_role;
alter table public.site_content enable row level security;
create policy "Public read content" on public.site_content for select using (true);
create policy "Admins insert content" on public.site_content for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins update content" on public.site_content for update to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete content" on public.site_content for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create policy "Admins upload site images" on storage.objects for insert to authenticated with check (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));
create policy "Admins update site images" on storage.objects for update to authenticated using (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));
create policy "Admins delete site images" on storage.objects for delete to authenticated using (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));