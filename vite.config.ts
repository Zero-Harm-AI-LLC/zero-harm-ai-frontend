import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // lets you import from "@/components/Header"
    },
  },
  server: {
    port: 5000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
