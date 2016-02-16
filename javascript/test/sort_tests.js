var sort = require('../sort');

exports.setUp = function (callback) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    this.testArray   = [];
    this.sortedArray = [];

    for (var i = 0; i < 1000; i++) {
        var randInt = getRandomInt(1, 500);
        this.testArray.push(randInt);
        this.sortedArray.push(randInt);
    }

    this.sortedArray.sort((a, b) => a - b);
    callback();
}

exports.selectionSort = function (test) {
    test.deepEqual(sort.selectionSort(this.testArray), this.sortedArray);
    test.done();
}

exports.insertionSort = function (test) {
    test.deepEqual(sort.insertionSort(this.testArray), this.sortedArray);
    test.done();
}

exports.mergeSort = function (test) {
    test.deepEqual(sort.mergeSort(this.testArray), this.sortedArray);
    test.done();
}