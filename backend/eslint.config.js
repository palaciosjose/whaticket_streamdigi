import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ["/*.js", "node_modules", "dist"],
  },
  ...compat.extends(
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ),
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "_" }
      ],
      "import/prefer-default-export": "off",
      "no-console": "off",
      "no-param-reassign": "off",
      "prettier/prettier": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never"
        }
      ],
      quotes: [
        1,
        "double",
        {
          avoidEscape: true
        }
      ]
    },
    settings: {
      "import/resolver": {
        typescript: {}
      }
    }
  }
];
