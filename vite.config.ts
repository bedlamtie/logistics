import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 获取当前文件的目录路径
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      dts: './types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
      dts: './types/components.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '/@': join(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or 'modern'
        additionalData: `@use "/@/assets/style/variable.scss" as *;@use "/@/assets/style/element-plus.scss" as *;`,
      },
    },
  },
  server: {
    proxy: {
      '/apis': {
        target: 'http://clpost.cluan.cn',
        changeOrigin: true,
      },
    },
  },
})
