var inputs=810;

var array=require('./array');
var string=require('./string');
var useGridNum=require('../test/useGridNum');
var useGrid=require('../test/useGrid');

var  gridNum=useGridNum.theGridNum();
var  grid=useGrid.theGrid();
var  stringArray=array.toStringArray(inputs);
var allString=string.numberString(stringArray, grid, gridNum);



console.log(allString);

