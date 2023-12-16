module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "@react-native-community",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true,
                'jest/globals': true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier"
    ],
    "rules": {
    }
}
