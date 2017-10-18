# eslint-config-fortech-react
ESLint config for modern JavaScript syntax and React.

This is intended to be used in a React codebase. For a base config that can be used for node or non-React projects, try [eslint-config-fortech](https://github.com/FortechRomania/eslint-config-fortech).

## Usage
Install eslint and the babel-eslint parser: 
```bash
npm i eslint babel-eslint -D
```

Install the package: 
```bash
npm i eslint-config-fortech-react -D
```

Install peer dependencies: 
```bash
npm i eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y -D
```

Create an `.eslintrc` file in your project root folder with the following content.
```javascript
{
    "env": {
        "browser": true, // set this if you're running a browser app
        "mocha": true // set this if you have mocha-style tests in your app folder
    },
    "extends": "fortech-react"
}
```

For more details about the `env` object, check out the [list of possible values](https://eslint.org/docs/user-guide/configuring#specifying-environments).

Additionally you can define your custom overwrites in `rules`:
```javascript
{
    "env": {
        "browser": true,
        "mocha": true
    },
    "extends": "fortech-react"
    "rules": {
        "quotes": [ 2, "single" ],
    }
}
```

## Reasoning
The `airbnb` styleguide is really great, but, we at Fortech, felt like it needed a few changes so we published this package which takes the core rules from the `airbnb` config and overwrites some of them based on our needs.

You can read more about some of the decisions [HERE](https://medium.freecodecamp.com/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a#.jz912uw00).
