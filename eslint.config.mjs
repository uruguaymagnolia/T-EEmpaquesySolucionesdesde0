// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginReactCompiler from "eslint-plugin-react-compiler";

export default [
  {
    ignores: [
        "**/*.config.js", 
        "**/*.config.mjs", 
        "public/sw.js", 
        "node_modules/", 
        ".next/",
        "postcss.config.mjs",
        "tailwind.config.ts"
    ]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReactConfig,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      "react-compiler": eslintPluginReactCompiler,
    },
    rules: {
      "react-compiler/react-compiler": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
