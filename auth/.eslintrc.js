module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 2],
        "semi": ["error", "never"],
        "jsx-quotes": ["error", "prefer-double"],
        "quotes": ["error", "single"],
        "no-console": ["error", { allow: ["error"] }]
    }
}