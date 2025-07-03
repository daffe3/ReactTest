    import globals from "globals";
    import pluginJs from "@eslint/js";
    import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
    import { fixupConfigAsPlugin } from "@eslint/compat";

    export default [
      {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
          parserOptions: {
            ecmaFeatures: { jsx: true },
            ecmaVersion: "latest",
            sourceType: "module",
          },
          globals: {
            ...globals.browser,
            ...globals.node,
          },
        },
      },
      pluginJs.configs.recommended,
      fixupConfigAsPlugin(pluginReactConfig),
      {
        settings: {
          react: {
            version: "detect", 
          },
        },
        rules: {
          "react/react-in-jsx-scope": "off", 
          "react/prop-types": "off", 
        },
      },
    ];
    