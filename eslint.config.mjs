import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  eslint.configs.recommended,

  prettier,

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: "readonly", 
        HTMLElement: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", 
          varsIgnorePattern: "^__webpack_|^__unused_",
        },
      ],
    },
  },

  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/prop-types": "off",
    },
  },
];
