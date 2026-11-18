const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    react.configs.flat.recommended,
    ...typescriptEslint.configs["flat/recommended"],
    {
        files: ["**/*.{js,jsx,ts,tsx}"],

        plugins: {
            react,
            "react-hooks": reactHooks,
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },

            parser: tsParser,
            ecmaVersion: 12,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                // "detect" relies on context.getFilename(), which ESLint 10 removed,
                // so read the installed React version directly instead.
                version: require("react/package.json").version,
            },
        },

        rules: {
            // Same rules as the previous "plugin:react-hooks/recommended" preset.
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            // typescript-eslint v8's "recommended" raised these to errors (or added
            // them); keep them as warnings, matching the previous v5 setup.
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
];
