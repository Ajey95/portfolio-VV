import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(),ghPages()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
 
    base: "/portfolio-VV/",
   
  
});
