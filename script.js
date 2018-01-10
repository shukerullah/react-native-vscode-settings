const fs = require('fs')
const path = require('path')

const files = ['.eslintrc', '.vscode']

try {
  const extend = target => {
    var sources = [].slice.call(arguments, 1)
    sources.forEach(function(source) {
      for (var prop in source) {
        target[prop] = source[prop]
      }
    })
    return target
  }

  const copyFile = (src, dest) => {
    if (fs.existsSync(dest)) {
      // Merge
      const srcData = fs.readFileSync(src, 'utf8')
      const destData = fs.readFileSync(dest, 'utf8')

      if (destData === undefined) destData = {}

      const writeData = extend(srcData, destData)
      console.log('write data : ' + writeData)

      fs.writeFileSync(dest, writeData, 'utf8')
    } else {
      // Copy
      fs.openSync(dest, 'w')

      const srcData = fs.readFileSync(src, 'utf8')
      console.log('src data : ' + srcData)

      fs.writeFileSync(dest, srcData, 'utf8')
    }
  }

  files.forEach(file => {
    const srcPath = `${__dirname}/${file}`
    const destPath = path.normalize(`${__dirname}/../../${file}`)
    const stat = fs.statSync(srcPath)

    if (stat.isDirectory()) {
        const items = fs.readdirSync(srcPath).filter(item => item !== '.DS_Store')
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath)

      items.forEach(item => {
        const itemStat = fs.statSync(`${srcPath}/${item}`)

        if (itemStat.isFile()) {
          copyFile(`${srcPath}/${item}`, `${destPath}/${item}`)
        }
      })
    }

    if (stat.isFile()) {
      copyFile(srcPath, destPath)
    }
  })
} catch (e) {
  console.log('Prettier Pack Error : ', e)
}