var nodeunit     = require('nodeunit'),
    linearSearch = require('../linear_search'),
    testArray    = [3, 5, 7, 1, 8, 9, 1, 2, 8, 9, 3, 4, 1, 5],
    length       = testArray.length;

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