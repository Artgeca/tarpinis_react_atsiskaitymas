module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": [0],
        "newline-before-return": [1],
        "import/prefer-default-export": [0],
        "react/function-component-definition": [1, {
            "namedComponents": "arrow-function"
        }],
        "react/react-in-jsx-scope": "off",
        "jsx-quotes": [1, "prefer-single"],
        "no-unused-vars": [1],
        "@typescript-eslint/no-unused-vars": [1],
        "react/jsx-max-props-per-line": [1, { "maximum": { "single": 3, "multi": 1 } }],
    }
};
