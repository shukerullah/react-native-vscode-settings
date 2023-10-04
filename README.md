# React Native VSCode Settings

[Visual Studio Code](https://code.visualstudio.com/) is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, Mac OSX, and Windows.

This module will install `visual studio code` essential extensions and settings for `react-native`.

## Install

```shell
npm install react-native-vscode-settings
```

or

```shell
yarn add react-native-vscode-settings
```

On `install` it will automatically install all plugins configured in library.

> **Note:**
>
> - Copy your vscode settings defined in your `.vscode/settings.json` file before installing this package.
> - If you are using MAC then please make your that you have install `code` command in PATH. Please refer [Microsoft Blog](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) for more details.
> - All plugins are defined in package.json `postinstall` section.
> - These prepacked plugins will definitely help developers of [React](https://github.com/facebook/react) & [ReactNative](https://github.com/facebook/react-native) community

## Essential Extensions

- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [Code Spellcheker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Document This _by oouo-diogo-perdigao_](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Indenticator](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator)
- [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum)
- [markdownlist](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Peep](https://marketplace.visualstudio.com/items?itemName=nwallace.peep)
- [Prettier - JavaScript formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [React-Native/React/Redux snippets for es6/es7](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux)
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)

## Settings

To get to the user and workspace settings:

- On a Windows computer, click File > Preferences > Settings or Press **CTRL** + **,**
- On a Mac, click Code > Preferences > Settings or Press **⌘** + **,**

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

- Launch VS Code.
- Open the Command Palette (**⇧** + **⌘** + **P**)/(**CRTL** + **SHIFT** + **P**) and type `shell command` to find the Shell Command: Install `code` command in PATH command.
  ![shell-command](https://user-images.githubusercontent.com/963765/34649812-016b6834-f3d8-11e7-9ba9-c262bebf2837.png)
- Restart the terminal for the new `$PATH` value to take effect.

Use the command `code /path/to/file/or/directory/you/want/to/open` to open your file or `code .` to open the current directory in `VS Code`.

## Contributions

Contribute to this project by opening a pull request, providing suggestions, giving feedback, reporting issues, making a donation or any type of contribution will be very much appreciated.

### Follow me on Twitter: [@shukerullah](https://twitter.com/shukerullah)

### Support this Project

Your support helps keep this project going!

- **PayPal**: If you'd like to make a donation via PayPal: <a href="https://www.paypal.com/donate/?hosted_button_id=EB34RUGMCEGVA" target="_blank">
  <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="Donate on PayPal" style="height: 15px !important">
  </a>

- **Buy Me a Coffee**: Alternatively, you can also support this project by buying me a coffee!

  <a href="https://www.buymeacoffee.com/shukerullah" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;">
  </a>
