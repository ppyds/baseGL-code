import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    // CDN配置（生产环境）
    build: {

        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    // 用后缀名称进行区别处理
                    // 处理其他资源文件名 e.g. css png 等
                    if (
                        chunkInfo.name?.endsWith('.webm') ||
                        chunkInfo.name?.endsWith('.png') ||
                        chunkInfo.name?.endsWith('.jpg') ||
                        chunkInfo.name?.endsWith('.gif')
                    ) {
                        return `assets/images/[name].[ext]`;
                    }

                    return `assets/[name].[hash].[ext]`;
                },
            },
        },
    },
    experimental: {
        renderBuiltUrl(filename) {
            if (
                filename.endsWith('.webm') ||
                filename.endsWith('.png') ||
                filename.endsWith('.jpg') ||
                filename.endsWith('.gif')
            ) {
                const name = filename.replace('assets/images/', '');
                return `https://cdnURL/images/${name}`;
            }

            return filename;
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    'vue-vendor': ['vue', 'vue-router'],
                    'animation': ['gsap', '@vueuse/motion']
                }
            }
        },
        // 性能优化
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    // 开发服务器配置
    server: {
        port: 3000,
        open: true
    },
    // CSS预处理器
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variables.scss" as *;`,
                api: 'modern-compiler'
            }
        }
    }
})
