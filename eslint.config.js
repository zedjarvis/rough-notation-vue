import antfu from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier'
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default antfu(
  {
    formatters: true,
    vue: true,
  },
  // eslintPluginPrettierRecommended,
  eslintConfigPrettier,
)
