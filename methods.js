module.exports =
  [
    {
      methodName: "JS-sort",
      methodFunction: function (array) {
        return array.sort(function (a, b) {
          return b - a;
        });
      }
    },
    {
      methodName: "InsertionSort",
      methodFunction: function (array) {
        var len = array.length;
        var preIndex, current;
        for (var i = 1; i < len; i++) {
          preIndex = i - 1;
          current = array[i];
          while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex + 1] = array[preIndex];
            preIndex--;
          }
          array[preIndex + 1] = current;
        }
        return array;
      }
    },

    {
      methodName: "BubbleSort",
      methodFunction: function (array) {
        for (var outerIndex = 0, len = array.length; outerIndex < len - 1; outerIndex++) {
          for (var index = 0; index < len - outerIndex - 1; index++) {
            if (array[index] < array[index + 1]) {
              var temp = array[index];
              array[index] = array[index + 1];
              array[index + 1] = temp;
            }
          }
        }
        return array;
      }
    },

    {
      methodName: "QuickSort",
      methodFunction: function quickSort(array) {
        if (array.length <= 1) {
          return array;
        }
        var pivotIndex = Math.floor(array.length / 2);
        var pivot = array.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var index = 0, len = array.length; index < len; index++) {
          if (array[index] > pivot) {
            left.push(array[index]);
          } else {
            right.push(array[index]);
          }
        }
        return quickSort(left).concat([pivot], quickSort(right));
      }
    }
  ];