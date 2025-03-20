import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  eslint.configs.recommended,

  prettier,

  {
    languageOptions: {
      globals: {
        require: 'readonly', // `require` is a global function in Node.js
        module: 'readonly', // `module` is a global object in Node.js
        __dirname: 'readonly', // `__dirname` is a global in Node.js
        node: 'readonly', // This allows all Node.js global variables
        browser: 'readonly', // Keep browser globals if necessary
        document: 'readonly',
        HTMLElement: 'readonly',
        window: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          tsx: true,
          commonjs: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^__webpack_|^__unused_',
        },
      ],
    },
  },

  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
];
