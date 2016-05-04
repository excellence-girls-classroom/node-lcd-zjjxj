function buildLcdString(allLcds, numberArray) {
    var lcdArray = [];

    for (var i = 0; i < numberArray.length; i++) {
        lcdArray.push(allLcds[numberArray[i]]);
    }

    return lcdArray;
}
exports.buildLcdString = buildLcdString;
