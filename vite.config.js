import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        vue(),
        legacy(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globDirectory: 'dist',
                globPatterns: ['**/*.{js,css,html}'],
                globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js']
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    }
})
