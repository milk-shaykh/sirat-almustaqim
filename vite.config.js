import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify('production')
    },
    build: {
        emptyOutDir: false,
        lib: {
            entry: fileURLToPath(new URL('./src/electric_logo/entry.jsx', import.meta.url)),
            formats: ['es'],
            fileName: () => 'electric_logo.js',
            cssFileName: 'electric_logo'
        },
        outDir: fileURLToPath(new URL('./global/static', import.meta.url)),
        rollupOptions: {
            output: { inlineDynamicImports: true }
        }
    }
});