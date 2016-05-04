function printString(lcdArray) {
    var printString;
    printString = lcdArray[0][0] + ' ' + lcdArray[1][0] + ' ' + lcdArray[2][0] + '\n' + lcdArray[0][1] + ' ' + lcdArray[1][1] + ' ' + lcdArray[2][1] + '\n' +
        lcdArray[0][2] + ' ' + lcdArray[1][2] + ' ' + lcdArray[2][2];

    return printString;
}
exports.printString = printString;


