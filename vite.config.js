import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => ({
  plugins: [
    react({
      jsxRuntime: "classic",
      babel: {
        plugins: [
          ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
        ],
      },
    }),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ["@tailwindcss/oxide"],
  },
  build: {
    minify: "terser",
    sourcemap: true,
    commonjsOptions: {
      include: [/\.js$/],
      noExternal: ["@tailwindcss/oxide"]
    },
    rollupOptions: {
      external: ["@tailwindcss/oxide"],
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          redux: ["redux", "react-redux"],
          vendor: ["@tailwindcss/vite"],
        },
      },
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
}));
