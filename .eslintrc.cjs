/**
 * @type {import('eslint').Linter.Config}
 */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "testing-library"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:cypress/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["build/", "dist/", "node_modules/", "*.js", "*.jsx"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-named-as-default-member": "off",
  },
};
