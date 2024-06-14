import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ["node_modules"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
