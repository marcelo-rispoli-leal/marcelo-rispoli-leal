import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({ open: true })],
  define: {
    "import.meta.env.VITE_VERCEL": JSON.stringify(process.env.VERCEL === "1"),
  },
});
