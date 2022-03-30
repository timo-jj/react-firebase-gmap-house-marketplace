module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    camelcase: 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-constructed-context-values': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/prefer-default-export': 0,
  },
}
