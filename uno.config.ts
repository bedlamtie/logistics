// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        // @ts-expect-error pnpm 没有提升 presetIcons 类型， 类型错误
        'material-symbols': import('@iconify-json/material-symbols/icons.json').then(i => i.default),
        // @ts-expect-error pnpm 没有提升 presetIcons 类型， 类型错误
        'bi': import('@iconify-json/bi/icons.json').then(i => i.default),
      },
    }),
    presetAttributify({
      prefixedOnly: true,
      prefix: 'un-',
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
