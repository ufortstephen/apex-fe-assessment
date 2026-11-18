const react = require("eslint-plugin-react");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = [
    ...compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
    ),
    {
        files: ["**/*.{js,jsx,ts,tsx}"],

        plugins: {
            react,
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
                version: "detect",
            },
        },

        rules: {
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
];
