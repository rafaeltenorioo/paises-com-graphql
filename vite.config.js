import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Minificação agressiva
    minify: "esbuild",
    // Otimização de CSS
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Isso força o Vite a criar arquivos separados para bibliotecas (Vendor)
        manualChunks: {
          vendor: ["react", "react-dom"],
          apollo: ["@apollo/client", "graphql"],
        },
      },
    },
  },
});
