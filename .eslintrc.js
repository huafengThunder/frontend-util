module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "ecmaFeatures": {
        "jsx": true
    },
    "quotes" : [2, "single"], //必须单引号
    "no-multi-spaces": 2, //多余空格
    "no-empty" : 2, //不允许空的块语句
    "no-extra-semi" : 2,//不允许多余的分号
}