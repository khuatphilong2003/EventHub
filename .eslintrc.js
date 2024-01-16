module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    "@typescript-eslint/no-inferrable-types": "error"

  },
};