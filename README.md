#SPRITE-SASS

> A modular image sprite generator.
> Mainly used for mobile develop.
> Generates sprites and proper sass files
> Change sprite position freely

##Install

Install with [npm](https://www.npmjs.com/package/sprite-sass)
```sh
npm install sprite-sass --save-dev
```

##Usage
###Programatic usage
```js
var spriteSass = require('sprite-sass')
spriteSass(options, cb)
```

###With [Gulp](http://gulpjs.com)
In future release
###With [Grunt](http://gruntjs.com)
In future release

##Options

* **direction**: The direction of sprite image(vertical|horizontal) [*Default: vertical*]
* **src**: The glob string array of image sources that generates sprite image.
* **out**: The path of directory to write sprite file to.
* **gap**: Object that configure margin length in pixel about image, include vertical and horizontal.


##Example
```
example
  | - icons
       | - index
       | - list
```
`index` and `list` are image folds, and the options:

```javascript
var options = {
  direction: 'horizontal',
  src: ["./**/*.png", "!./*.png", "!./public/**"],
  out: path.join(__dirname, 'public'),
  gap: {
    vertical: 100,
    horizontal: 100
  }
}
```

Then `sprite-sass` will generate following sprites and sass in ./public
```
example 
  | - public
      | - img 
          | - sprite-index.png
          | - sprite-list.png
      | - scss
          | - sprite-index.scss
          | - sprite-list.png
```
