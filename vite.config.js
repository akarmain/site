import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import {VitePWA} from 'vite-plugin-pwa'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
    plugins: [
        vue(),
        legacy(),
        VitePWA({registerType: 'autoUpdate'}),
        vitePluginImp({
            libList: [
                {
                    libName: 'file-loader',
                    libDirectory: 'lib',
                    style: () => false,
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'pdf-chunk': ['file-loader'],
                },
            },
            plugins: [
                {
                    name: 'configure-pdf-loader',
                    async generateBundle(options, bundle) {
                        this.emitFile({
                            type: 'asset',
                            fileName: 'diploma_Karmaev_compressed.pdf',
                            source: await fs.promises.readFile(path.resolve(__dirname, 'src/media/download/diploma_Karmaev_compressed.pdf')),
                        });
                    },
                },
            ],
        },
    },
})
