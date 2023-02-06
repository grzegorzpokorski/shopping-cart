/**
 * @type {import('eslint').Linter.Config}
 */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parserOptions: {
    project: ["tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["build/", "dist/", "node_modules/", "*.js", "*.jsx"],
  rules: {},
};
