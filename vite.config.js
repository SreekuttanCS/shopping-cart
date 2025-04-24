import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";
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
    flowbiteReact(),
  ],
  optimizeDeps: {
    exclude: ["@tailwindcss/oxide-linux-x64-musl"],
  },
  build: {
    minify: "terser",
    sourcemap: true,
    commonjsOptions: {
      include: [/\.js$/],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          redux: ["redux", "react-redux"],
          vendor: ["flowbite-react", "@tailwindcss/vite"],
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
