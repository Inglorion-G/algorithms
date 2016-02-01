/*
    Implementations of basic algorithims from Algorithms Unlocked
    by Thomas H. Cormen
*/

/*
    Naive Linear Search
    Inputs --
        arr: an array
        n: the number of elements in A
        x: the target being searched for
    Output --
        Either the index i for which A[i] === x or null
    Complexity --
        O(n)
*/

function naiveLinearSearch(arr, n, x) {
    var idx = null;
    for (i = 0; i < n; i++) {
        if (arr[i] === x) {
            idx = i;
        }
    }
    return idx;
}

/*
    Better Linear Search
    Inputs --
        arr: an array
        n: the number of elements in A
        x: the target being searched for
    Output --
        Either the index i for which A[i] === x or null
    Complexity --
        Best case: constant if arr[0] === x
        Worst case: linear
        O(n)
*/

function betterLinearSearch(arr, n, x) {
    for (i = 0; i < n; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
}

/*
    Sentinel Linear Search
    Inputs --
        arr: an array
        n: the number of elements in A
        x: the target being searched for
    Output --
        Either the index i for which A[i] === x or null
    Complexity --
        O(n)
    Notes --
        Utilizes the "sentinel" pattern of inserting the target value
        at the final index, thus saving the for loop's check to see if i
        is in bounds.
*/

function sentinelLinearSearch(arr, n, x) {
    var last = arr[n],
        i    = 0;

    arr[n] = x; // insert sentinel

    while (arr[i] !== x) {
        i += 1;
    }
    arr[n] = last;

    if (i < n || arr[n] === x) {
        return i;
    } else {
        return null;
    }
}

/*
    Recursive Linear Search
    Inputs --
        arr: an array
        n: the number of elements in A
        x: the target being searched for
        i: 
    Output --
        Either the index i for which A[i] === x or null
    Complexity --
        O(n)
*/

function recursiveLinearSearch(arr, n, i, x) {
    if (i > n) {
        return null;
    } else {
        if (arr[i] === x) {
            return i;
        } else {
            return recursiveLinearSearch(arr, n, i + 1, x);
        }
    }
}

module.exports = {
    naiveLinearSearch: naiveLinearSearch,
    betterLinearSearch: betterLinearSearch,
    sentinelLinearSearch: sentinelLinearSearch,
    recursiveLinearSearch: recursiveLinearSearch
};