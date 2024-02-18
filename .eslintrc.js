module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/naming-convention": "off",
        "n/handle-callback-err": "off"
    },
    "globals": {
        '__IS_DEV__': true
    }
}
