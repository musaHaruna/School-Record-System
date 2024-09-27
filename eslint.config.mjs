import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Disable 'React must be in scope' for JSX
      "react/jsx-uses-react": "off", // Disable the 'react' usage check (React 17+)
      "no-unused-vars": "off", // Disable 'variable never used' errors
      "react/prop-types": "off", // Disable prop-types validation
    },
  },
];
