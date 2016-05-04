function buildNumberArray(inputs) {
    inputs += '';
    var stringArray = inputs.split("");
    var numberArray = [];

    for (var i = 0; i < stringArray.length; i++) {
        numberArray.push(parseInt(stringArray[i]));
    }

    return numberArray;
}
exports.buildNumberArray = buildNumberArray;

