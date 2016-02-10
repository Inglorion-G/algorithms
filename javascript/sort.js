/*
    Selection Sort
    Inputs --
        an Array
    Outputs --
        the input Array, sorted
    Complexity --
        O(n^2)
*/

function selectionSort(arr) {
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

module.exports = {
    selectionSort: selectionSort
};