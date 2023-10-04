#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const extensions = [
  "msjsdiag.vscode-react-native",
  "formulahendry.auto-close-tag",
  "formulahendry.auto-complete-tag",
  "formulahendry.auto-rename-tag",
  "mgmcdermott.vscode-language-babel",
  "streetsidesoftware.code-spell-checker",
  "naumovs.color-highlight",
  "oouo-diogo-perdigao.docthis",
  "dbaeumer.vscode-eslint",
  "waderyan.gitblame",
  "eamodio.gitlens",
  "wix.vscode-import-cost",
  "SirTori.indenticator",
  "Tyriar.lorem-ipsum",
  "DavidAnson.vscode-markdownlint",
  "IBM.output-colorizer",
  "christian-kohler.path-intellisense",
  "nwallace.peep",
  "esbenp.prettier-vscode",
  "EQuimper.react-native-react-redux",
  "wayou.vscode-todo-highlight",
  "vscode-icons-team.vscode-icons",
];

console.log("Installing VS Code extensions...");

extensions.forEach((extension) => {
  execSync(`code --install-extension ${extension}`, { stdio: "inherit" });
});

console.log("VS Code extensions installed successfully.");

console.log("Running the script...");

const files = [".vscode"];

try {
  const extend = (target) => {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
      for (var prop in source) {
        target[prop] = source[prop];
      }
    });
    return target;
  };

  const copyFile = (src, dest) => {
    if (fs.existsSync(dest)) {
      // Merge
      const srcData = fs.readFileSync(src, "utf8");
      const destData = fs.readFileSync(dest, "utf8");

      if (destData === undefined) destData = {};

      const writeData = extend(srcData, destData);
      console.log("write data : " + writeData);

      fs.writeFileSync(dest, writeData, "utf8");
    } else {
      // Copy
      fs.openSync(dest, "w");

      const srcData = fs.readFileSync(src, "utf8");
      console.log("src data : " + srcData);

      fs.writeFileSync(dest, srcData, "utf8");
    }
  };

  files.forEach((file) => {
    const srcPath = `${__dirname}/${file}`;
    const destPath = path.normalize(`${process.cwd()}/${file}`);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      const items = fs
        .readdirSync(srcPath)
        .filter((item) => item !== ".DS_Store");
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);

      items.forEach((item) => {
        const itemStat = fs.statSync(`${srcPath}/${item}`);

        if (itemStat.isFile()) {
          copyFile(`${srcPath}/${item}`, `${destPath}/${item}`);
        }
      });
    }

    if (stat.isFile()) {
      copyFile(srcPath, destPath);
    }
  });

  console.log("Script executed successfully.");
} catch (e) {
  console.log("Error: ", e);
}
