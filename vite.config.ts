import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist", // 빌드 폴더 이름 (기본값: 'dist')
  },
  base: "/", // S3에서 호스팅할 경우 root path 사용
});
