module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "camelcase": "off",
    "@typescript-eslint/camelcase": ["error", { "properties": "never" }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types":"off",
    '@typescript-eslint/no-var-requires':"off"
  }
}
