<center><img src="https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg" /></center>

# React Native VSCode Settings

[Visual Studio Code](https://code.visualstudio.com/) is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, Mac OSX, and Windows.

This module will install `visual studio code` essential extensions and settings for `react-native`.

## Install

```shell
npm install --save-dev react-native-vscode-settings
```

or

```shell
yarn add react-native-vscode-settings --dev
```

On `install` it will automatically install all plugins configured in library.

> **Note:**
>
> * Copy your vscode settings defined in your `.vscode/settings.json` file before installing this package.
> * If you are using MAC then please make your that you have install `code` command in PATH. Please refer [Microsoft Blog](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) for more details.
> * All plugins are defined in package.json `postinstall` section.
> * These prepacked plugins will definitely help developers of [React](https://github.com/facebook/react) & [ReactNative](https://github.com/facebook/react-native) community

## Essential Extensions

* [React Native Tools _by Visual Studio Mobile Tools_](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)
* [Auto Close Tag _by Jun Han_](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
* [Auto Complete Tag _by Jun Han_](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)
* [Auto Rename Tag _by Jun Han_](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
* [Babel ES6/ES7 _by dzannotti_](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
* [Code Spellcheker _by Street Side Software_](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
* [Color Highlight _by Sergii Naumov_](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
* [Document This _by Jeol Day_](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)
* [ESLint _by Drik Baeumer_](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Flow Language Support _by flowtype_](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
* [Git Blame _by Wade Anderson_](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)
* [Git Lens — git blame annotations, code lens, and more _by Eric Amodio_](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [Indenticator _by SirTori_](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator)
* [Lorem ipsum _by Daniel Imms_](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum)
* [markdownlist _by David Anson_](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* [Output Colorizer _by IBM_](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)
* [Path Intellisense _by Christian Kohler_](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [Peep _by nwallace_](https://marketplace.visualstudio.com/items?itemName=nwallace.peep)
* [Prettier - JavaScript formatter _by Esben Petersen_](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Rainbow Brackets _by 2gua_](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
* [React-Native/React/Redux snippets for es6/es7 _by EQuimper_](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux)
* [SVG Viewer _by cssho_](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer)
* [TODO Highlight _by Wayou Liu_](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
* [vscode-icons _by Roberto Huertas_](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)

## Settings

To get to the user and workspace settings:

* On a Windows computer, click File > Preferences > Settings or Press **CTRL** + **,**
* On a Mac, click Code > Preferences > Settings or Press **⌘** + **,**

Paste following code with your design settings.

```js
{
  // The number of spaces in a tab.
  "editor.tabSize": 2,
  // Specifies workbench icon theme.
  "workbench.iconTheme": "vscode-icons",
  // Format a file on save.
  "editor.formatOnSave": true,
  // Support using flow through your node_modules folder. (For Flow)
  "flow.useNPMPackagedFlow": true,
  // Enable/disable JavaScript validation. (For Flow)
  "javascript.validate.enable": false,
  // Enable/disable default JavaScript formatter. (For Prettier)
  "javascript.format.enable": false,
  // vscode-icons extension will restart automatically on project detection. (For vscode-icons)
  "vsicons.projectDetection.autoReload": true,
  // Controls how the editor should render whitespace characters.
  "editor.renderWhitespace": "boundary",
  // Quickly toggle between hiding and showing folders and files. (For Peep)
  // To quickly hide/show files execute the Peep Toggle in Command Palette.
  "files.exclude": {
    ".*": false,
    "ios/": false,
    "*.lo*": false,
    "*.json": false,
    "LICENSE": false,
    "android/": false,
    "__tests__": false,
    "node_modules/": false
  }
}
```

## Launching from the Command Line

You can also run VS Code from the terminal by typing `code` after adding it to the path:

* Launch VS Code.
* Open the Command Palette (**⇧** + **⌘** + **P**)/(**CRTL** + **SHIFT** + **P**) and type `shell command` to find the Shell Command: Install `code` command in PATH command.
  ![shell-command](https://user-images.githubusercontent.com/963765/34649812-016b6834-f3d8-11e7-9ba9-c262bebf2837.png)
* Restart the terminal for the new `$PATH` value to take effect.

Use the command `code /path/to/file/or/directory/you/want/to/open` to open your file or `code .` to open the current directory in `VS Code`.

## Contributions

Any type of contribution will be very much appreciated.

### Follow me on Twitter: [@shukerullah](https://twitter.com/shukerullah)
