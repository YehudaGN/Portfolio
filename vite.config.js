import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Portfolio/" : "/", // Apply base only in production
  plugins: [react()],
}));
