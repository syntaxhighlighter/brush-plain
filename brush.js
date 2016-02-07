var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  this.regexList = [];
};

Brush.prototype = new BrushBase();
Brush.aliases = ['text', 'plain'];
module.exports = Brush;