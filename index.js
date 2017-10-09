module.exports = {
    "extends": [ "airbnb", "fortech" ],
    "parser": "babel-eslint",
    "rules": {
        "jsx-quotes": 2,
        "react/jsx-curly-spacing": [ 2, "always" ],
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent-props": [ 2, 4 ],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ ],
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }]
    }
};
