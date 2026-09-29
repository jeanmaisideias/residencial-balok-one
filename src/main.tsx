import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initAnalytics } from "./lib/analytics";
import { loadContentWithTimeout } from "./content/store";

initAnalytics();

loadContentWithTimeout(800).finally(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
