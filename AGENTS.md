
- Site content editable via /adm: defaults live in src/content/schema.ts, overrides in site_content table (Cloud), merged by src/content/store.tsx — keeps the public site identical when no overrides exist.
- Admin images go to private bucket site-images with 10-year signed URLs — workspace blocks public buckets.
