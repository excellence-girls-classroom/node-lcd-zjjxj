var useGrid = require('../test/useGrid');

function finalString(inputs) {
    var allLcds = useGrid.theGrid();
    var numberarray = buildNumberArray(inputs);
    var lcdstring = buildLcdString(allLcds, numberarray);
    var allString = printStrings(lcdstring);
    console.log(allString);
}

function buildLcdString(allLcds, numberArray) {
    var lcdArray = [];

    for (var i = 0; i < numberArray.length; i++) {
        lcdArray.push(allLcds[numberArray[i]]);
    }

    return lcdArray;
}

function buildNumberArray(inputs) {
    inputs += '';
    var numberArray = inputs.split("");

    return numberArray;
}

function printStrings(lcdArray) {
    var printString = '';

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < lcdArray.length; j++) {
            printString += lcdArray[j][i] + " ";

        }
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