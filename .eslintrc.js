module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      files: ['*.ts'],
      ecmaVersion: 2021,
      sourceType: "module",
      project: ["./tsconfig.json"],
    },
    plugins: ['@typescript-eslint'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    
    rules: {
      "@typescript-eslint/no-unused-vars":"error",
      "@typescript-eslint/no-explicit-any":"off",
      "@typescript-eslint/explicit-module-boundary-types":"off",
      "@typescript-eslint/ban-ts-comment":"off"
    },
  };
  