var spriteSass = require('../index')
var path = require('path')

/*
function generateFiles(list) {
  return list.map(name => path.join(__dirname, 'img', name))
}
*/

spriteSass({
  direction: 'horizontal',
  src: ["./**/*.png", "!./*.png"],
  out: path.join(__dirname, 'public'),
  // backgroundPrefix: '/',
  // dest: path.join(__dirname, 'sprite.png'),
  // destSass: path.join(__dirname, 'sprite.sass'),
  gap: {
    vertical: 100,
    horizontal: 100
  }
})
