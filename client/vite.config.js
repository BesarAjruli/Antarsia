import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const backendUrl = process.env.VITE_BACKEND_URL;

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": backendUrl,
    },
  },
});
