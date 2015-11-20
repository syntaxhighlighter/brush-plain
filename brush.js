var BrushBase = require('brush-base');
var regexLib = require('regex-lib');

function Brush() {
  this.regexList = [];
};

Brush.prototype = new BrushBase();
Brush.aliases = ['text', 'plain'];
module.exports = Brush;