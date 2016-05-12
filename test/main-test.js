var useGrid = require('./useGrid');
var main = require('../main/main');

describe('Integration Testing', function () {
    var inputs;

    beforeEach(function () {
        inputs = 910;
    })

    it('should print correct text', function () {
        spyOn(console, 'log');
        main.finalString(inputs);
        var expectText = '._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| ';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('unit testing', function () {
    var allLcds;
    var inputs;

    beforeEach(function () {
        allLcds = useGrid.theGrid();
        inputs = 910;
    })

    describe('Text numberarray', function () {
        it('return right numberarray', function () {
            var numberArray = main.buildNumberArray(inputs);

            expect(numberArray).toEqual(['9', '1', '0']);
        });
    });

    describe('Text lcdarray', function () {
        it('return right lcdarray', function () {
            var numberArray = [9, 1, 0];
            var lcdArrays = main.buildLcdString(allLcds, numberArray);

            expect(lcdArrays).toEqual(
                [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']]
            );
        });
    });

    describe('Text printlcd', function () {
        it('return right lcd', function () {
            var lcdArrays = [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];
            var lcd = main.printStrings(lcdArrays);

            expect(lcd).toEqual('._. ... ._. \n' + '|_| ..| |.| \n' + '..| ..| |_| ');
        });
    });
});