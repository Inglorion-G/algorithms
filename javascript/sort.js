/*
    Selection Sort
    Inputs --
        an Array
    Outputs --
        the input Array, sorted
    Complexity --
        O(n^2)
*/

exports.selectionSort = function (arr) {
    var n = arr.length;

    for (var i = 0; i < n; i++) {
        var smallest = i;

        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }

        var temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }

    return arr;
}

/*
    Insertion Sort
    Inputs --
        an Array
    Outputs --
        the input Array, sorted
    Complexity --
        Average complexity is O(n^2), however in the worst case insertion sort
        will move elements n^2 times, whereas selection sort will move
        elements only n times

*/

exports.insertionSort = function (arr) {
    var n = arr.length;

    for (i = 1; i < n; i++) {
        var key = arr[i],
            j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
        }

        arr[j + 1] = key;
    }

    return arr;
}

/*
    Merge Sort
    Inputs --
        an Array, arr
        starting index, p
        ending index, r
    Outputs --
        a sorted subarray arr[p..r]
    Complexity --
        Time: O(n log n)
        Space: Each element is copied O(n log n) times
*/

function merge(left, right) {
    var merged = [],
        i      = 0,
        j      = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            merged.push(right[j]);
            j += 1;
        } else {
            merged.push(left[i]);
            i += 1;
        }
    }

    var leftovers = left.slice(i, left.length).concat(right.slice(j, right.length));
    merged = merged.concat(leftovers);

    return merged;
}

var mergeSort = exports.mergeSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        var mid   = Math.floor((arr.length) / 2),
            left  = arr.slice(0, mid),
            right = arr.slice(mid, arr.length);

        left  = mergeSort(left);
        right = mergeSort(right);

        return merge(left, right);
    }
}






