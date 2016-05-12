var useGrid = require('../test/useGrid');

function finalString(inputs) {
    var allLcds = useGrid.theGrid();
    var numberArray = buildNumberArray(inputs);
    var lcdString = buildLcdString(allLcds, numberArray);
    var allString = printStrings(lcdString);

    console.log(allString);
}

function buildLcdString(allLcds, numberArray) {
    var lcdArray = [];

    numberArray.forEach(function (item) {
        lcdArray.push(allLcds[item]);
    });

    return lcdArray;
}

function buildNumberArray(inputs) {
    var numberArray = inputs.toString().split("");

    return numberArray;
}

function printStrings(lcdArray) {
    var printString = '';

    for (var i = 0; i < 3; i++) {
        lcdArray.forEach(function (item, index) {
            printString += lcdArray[index][i] + " ";
        });
        if (i < 2) {
            printString += "\n";
        }
    }

    return printString;
}

module.exports = {
    finalString: finalString,
    buildLcdString: buildLcdString,
    buildNumberArray: buildNumberArray,
    printStrings: printStrings
}