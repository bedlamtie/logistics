// eslint.config.mjs

import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/singleline-html-element-content-newline': 0,
    },
  },
})
