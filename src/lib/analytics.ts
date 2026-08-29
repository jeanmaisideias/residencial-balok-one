const GA_MEASUREMENT_ID = "G-F9CC7EDNP8";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Semântica oficial do gtag.js: `dataLayer.push(arguments)`.
export function gtag(...args: unknown[]) {
  const dataLayer = window.dataLayer || (window.dataLayer = []);
  // eslint-disable-next-line prefer-rest-params, @typescript-eslint/prefer-rest-params
  dataLayer.push(arguments);
}

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
initialized = true;

  // Inicializa o dataLayer antes de carregar o gtag.js (snippet oficial do Google).
  window.dataLayer = window.dataLayer || [];

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
    page_path: window.location.pathname + window.location.search,
  });

  initWhatsAppTracking();
}

export function trackPageView(path: string) {
  gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com", "web.whatsapp.com", "whatsapp.com"];

function isWhatsAppUrl(href: string) {
  try {
    const url = new URL(href, window.location.href);
    return WHATSAPP_HOSTS.some(
      (h) => url.hostname === h || url.hostname.endsWith(`.${h}`)
    );
  } catch {
    return false;
  }
}

let trackingBound = false;
let lastEvent: { url: string; time: number } | null = null;

function initWhatsAppTracking() {
  if (trackingBound || typeof document === "undefined") return;
  trackingBound = true;

  // Delegated listener: covers current and future WhatsApp links/buttons.
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      if (!target || typeof target.closest !== "function") return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      const href = anchor?.getAttribute("href") ?? "";
      if (!anchor || !isWhatsAppUrl(href)) return;

      const now = Date.now();
      if (lastEvent && lastEvent.url === href && now - lastEvent.time < 1000) return;
      lastEvent = { url: href, time: now };

      const linkText =
        (anchor.innerText || anchor.textContent || "").trim().replace(/\s+/g, " ") ||
        anchor.getAttribute("aria-label") ||
        "";

      gtag("event", "whatsapp_click", {
        link_url: new URL(href, window.location.href).href,
        link_text: linkText.slice(0, 100),
        page_path: window.location.pathname + window.location.search,
      });
    },
    true
  );
}
