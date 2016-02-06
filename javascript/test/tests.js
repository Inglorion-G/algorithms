var nodeunit        = require('nodeunit'),
    linearSearch    = require('../linear_search'),
    testArray       = [3, 5, 7, 1, 8, 9, 1, 2, 8, 9, 3, 4, 1, 5],
    length          = testArray.length;

/*
    Linear search tests
*/

exports.naiveLinearSearch = function (test) {
    test.equal(linearSearch.naiveLinearSearch(testArray, length, 9), 9);
    test.equal(linearSearch.naiveLinearSearch(testArray, length, 7), 2);
    test.equal(linearSearch.naiveLinearSearch(testArray, length, 6), null);

    test.done();
};

exports.betterLinearSearch = function (test) {
    test.equal(linearSearch.betterLinearSearch(testArray, length, 9), 5);
    test.equal(linearSearch.betterLinearSearch(testArray, length, 7), 2);
    test.equal(linearSearch.betterLinearSearch(testArray, length, 1), 3);
    test.equal(linearSearch.betterLinearSearch(testArray, length, 3), 0);
    test.equal(linearSearch.betterLinearSearch(testArray, length, 6), null);

    test.done();
};

exports.sentinelLinearSearch = function (test) {
    test.equal(linearSearch.sentinelLinearSearch(testArray, length, 9), 5);
    test.equal(linearSearch.sentinelLinearSearch(testArray, length, 7), 2);
    test.equal(linearSearch.sentinelLinearSearch(testArray, length, 4), 11);
    test.equal(linearSearch.sentinelLinearSearch(testArray, length, 3), 0);
    test.equal(linearSearch.sentinelLinearSearch(testArray, length, 6), null);

    test.done();
};

exports.recursiveLinearSearch = function (test) {
    test.equal(linearSearch.recursiveLinearSearch(testArray, length, 0, 9), 5);
    test.equal(linearSearch.recursiveLinearSearch(testArray, length, 0, 7), 2);
    test.equal(linearSearch.recursiveLinearSearch(testArray, length, 0, 4), 11);
    test.equal(linearSearch.recursiveLinearSearch(testArray, length, 0, 3), 0);
    test.equal(linearSearch.recursiveLinearSearch(testArray, length, 0, 6), null);

    test.done();
};

/*
    Binary search tests
*/

var sortedTestArray    = [1, 7, 35, 35, 47, 56, 67, 68, 69, 70, 70, 70, 121, 531, 633, 842],
    bigSortedTestArray = [];

for (var i = 1; i < 100000; i++) {
    bigSortedTestArray.push(i);
}

var sortedLength    = sortedTestArray.length,
    bigSortedLength = bigSortedTestArray.length;

exports.iterativeBinarySearch = function (test) {
    test.equal(linearSearch.iterativeBinarySearch(sortedTestArray, sortedLength, 121), 12);
    test.equal(linearSearch.iterativeBinarySearch(sortedTestArray, sortedLength, 7), 1);
    test.equal(linearSearch.iterativeBinarySearch(bigSortedTestArray, bigSortedLength, 90671), 90670);
    test.equal(linearSearch.iterativeBinarySearch(bigSortedTestArray, bigSortedLength, 7), 6);

    test.done();
}

exports.recursiveBinarySearch = function (test) {
    test.equal(linearSearch.recursiveBinarySearch(sortedTestArray, 0, sortedLength, 68), 7);
    test.equal(linearSearch.recursiveBinarySearch(sortedTestArray, 0, sortedLength, 531), 13);
    test.equal(linearSearch.recursiveBinarySearch(bigSortedTestArray, 0, bigSortedLength, 87649), 87648);
    test.equal(linearSearch.recursiveBinarySearch(bigSortedTestArray, 0, bigSortedLength, 1), 0);

    test.done()
}