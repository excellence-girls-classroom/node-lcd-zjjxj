var useGrid = require('./useGrid');
var allLcds = useGrid.theGrid();
var numArray = require('../main/numArray');
var lcdArray = require('../main/lcdArray');
var printString = require('../main/printString');

describe('unit testing', function () {
    var allLcds;

    beforeEach(function () {
        allLcds = useGrid.theGrid();
    })

    describe('Text numberarray', function () {
        inputs = 910;
        it('return right numberarray', function () {
            var numberArray = numArray.buildNumberArray(inputs);

            expect(numberArray).toEqual([9, 1, 0]);
        });
    });

    describe('Text lcdarray', function () {
        inputs = 910;
        it('return right lcdarray', function () {
            var numberArray = numArray.buildNumberArray(inputs);
            var lcdArrays = lcdArray.buildLcdString(allLcds, numberArray);

            expect(lcdArrays).toEqual(
                [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']]
            );
        });
    });

    describe('Text printlcd', function () {
        inputs = 910;
        it('return right lcd', function () {
            var numberArray = numArray.buildNumberArray(inputs);
            var lcdArrays = lcdArray.buildLcdString(allLcds, numberArray);
            var lcd = printString.printString(lcdArrays);

            expect(lcd).toEqual('._. ... ._.\n' + '|_| ..| |.|\n' + '..| ..| |_|');
        });
    });
});
