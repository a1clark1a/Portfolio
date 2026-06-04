import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  { ignores: ["dist", "build", "coverage", "node_modules"] },

  // App + source files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      // React 19 + automatic JSX runtime: no need for React in scope.
      "react/react-in-jsx-scope": "off",
      // Apostrophes/quotes in display copy are fine and more readable unescaped.
      "react/no-unescaped-entities": "off",
      // Intentional empty catch blocks (e.g. localStorage in private mode) are fine.
      "no-unused-vars": ["warn", { caughtErrors: "none" }],
    },
  },

  // Test files + setup: Vitest provides describe/it/expect/etc. as globals.
  {
    files: ["**/*.test.{js,jsx}", "src/setupTests.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        vi: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
  },
];
