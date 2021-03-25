# neutralinojs-vue

Vue starter project for Neutralinojs

## Get started

Install [neu-cli](https://neutralino.js.org/docs/#/tools/cli)

```txt
$ npm i -g @neutralinojs/neu
```

Create Neutralino app with Vue template

```txt
$ neu create myapp --template vue
$ cd my app
```

Bundle source files

```txt
$ neu build
```

Learn more about neu-cli from [docs](https://neutralino.js.org/docs/#/tools/cli)

## Notes for using this template

If you are using Neutralino v1, do not remove the `--no-clean` option from the
build command, this will delete the `neutralino.js` file that is needed for
Neutralino to function correctly on every build. For v2, this option should not
be needed if using a new style config file.
