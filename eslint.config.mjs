import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    settings: {
      'prettier/config': {
        ignore: ['**/*.min.js', '**/*.min.css'],
      },
    },
  },
  {
    ignores: ['node_modules', 'dist', 'package-lock.json', '/.vscode'],
  },
  pluginJs.configs.recommended,
  {
    files: ['**.*{js,jsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
];
