module.exports = {
  ignorePatterns: ['src/lib/ai/**', 'src/pages/**'],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
