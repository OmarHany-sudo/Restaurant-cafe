import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // يسمح بالوصول من أي عنوان IP
    port: 8080, // منفذ مخصص
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/client", // مجلد الإخراج ليطابق Netlify
    minify: true, // تقليص الكود لتحسين الأداء
    sourcemap: mode === "development", // إنشاء خريطة المصادر في التطوير فقط
  },
  css: {
    // دعم تحسين CSS مع الترانزيشنز
    devSourcemap: mode === "development", // خريطة مصادر CSS في التطوير
  },
}));