var inputs = 910;
var numArray = require('./numArray');
var lcdArray = require('./lcdArray');
var printString = require('./printString');
var useGrid = require('../test/useGrid');

var allLcds = useGrid.theGrid();
var numberarray = numArray.buildNumberArray(inputs);
var lcdstring = lcdArray.buildLcdString(allLcds, numberarray);
var allString = printString.printString(lcdstring);

console.log(allString);

