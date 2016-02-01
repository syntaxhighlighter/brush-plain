var BrushBase = require('@alexgorbatchev/brush-base');
var regexLib = require('@alexgorbatchev/regex-lib');

function Brush() {
  this.regexList = [];
};

Brush.prototype = new BrushBase();
Brush.aliases = ['text', 'plain'];
module.exports = Brush;