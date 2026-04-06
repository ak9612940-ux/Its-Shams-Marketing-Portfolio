import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      // This tells ESLint you're working in a browser environment
      globals: globals.browser 
    }
  },
  // Use the recommended rules from ESLint
  pluginJs.configs.recommended,
  {
    rules: {
      // You can customize your rules here
      "no-unused-vars": "warn",    // Warns you about variables you didn't use
      "no-console": "off",         // Allows console.log (set to "error" for production)
      "prefer-const": "error",     // Suggests 'const' for variables that don't change
      "semi": ["error", "always"], // Forces semicolons at the end of lines
      "quotes": ["error", "double"] // Forces double quotes
    }
  }
];
