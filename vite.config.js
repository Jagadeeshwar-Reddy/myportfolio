import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@styles': path.resolve(__dirname, './src/styles')
        }
    },
    publicDir: 'public'
});
