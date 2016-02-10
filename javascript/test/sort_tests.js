var sort = require('../sort');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var testArray   = [],
    sortedArray = [];

for (var i = 0; i < 10; i++) {
    var randInt = getRandomInt(1, 500);
    testArray.push(randInt);
    sortedArray.push(randInt);
}

sortedArray.sort((a, b) => a - b);

exports.selectionSort = function (test) {
    test.deepEqual(sort.selectionSort(testArray), sortedArray);
    test.done();
}