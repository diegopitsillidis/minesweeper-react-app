import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import storybook from 'eslint-plugin-storybook'
import reactPlugin from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...reactPlugin.configs.flat.recommended,
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...storybook.configs['flat/recommended'],
];