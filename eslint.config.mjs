import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: [
        "**/*.config.js", 
        "**/*.config.mjs", 
        "public/sw.js", 
        "node_modules/", 
        ".next/"
    ]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...pluginReactConfig,
     settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...pluginReactConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  },
  {
    plugins: {
      "@next": nextPlugin
    },
    rules: {
       ...nextPlugin.configs.recommended.rules,
       ...nextPlugin.configs['core-web-vitals'].rules,
    }
  },
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
];
