var sortBenchmark = require('./benchmark');
var methods = require('./methods');


dataSets = [
  {
    dataName: "Sequential Array Small (100)",
    data: function () {
      var array = [];
      for (var index = 0; index < 100; index++) {
        array.push(index)
      }
      return array
    }()
  },
  {
    dataName: "Random Array Small (100)",
    data: function () {
      var array = [];
      for (var index = 0; index < 100; index++) {
        array.push(Math.floor(Math.random() * 100))
      }
      return array
    }()
  },
  {
    dataName: "Reversed Array Small(100)",
    data: function () {
      var array = [];
      for (var index = 0; index < 100; index++) {
        array.push(100 - index)
      }
      return array
    }()
  },
  {
    dataName: "Sequential Array Medium (1000)",
    data: function () {
      var array = [];
      for (var index = 0; index < 1000; index++) {
        array.push(index)
      }
      return array
    }()
  },
  {
    dataName: "Random Array Medium (1000)",
    data: function () {
      var array = [];
      for (var index = 0; index < 1000; index++) {
        array.push(Math.floor(Math.random() * 1000))
      }
      return array
    }()
  },
  {
    dataName: "Reversed Array Medium(1000)",
    data: function () {
      var array = [];
      for (var index = 0; index < 1000; index++) {
        array.push(1000 - index)
      }
      return array
    }()
  },
  {
    dataName: "Sequential Array Large (10000)",
    data: function () {
      var array = [];
      for (var index = 0; index < 10000; index++) {
        array.push(index)
      }
      return array
    }()
  },
  {
    dataName: "Random Array Large (10000)",
    data: function () {
      var array = [];
      for (var index = 0; index < 10000; index++) {
        array.push(Math.floor(Math.random() * 10000))
      }
      return array
    }()
  },
  {
    dataName: "Reversed Array Large(10000)",
    data: function () {
      var array = [];
      for (var index = 0; index < 10000; index++) {
        array.push(10000 - index)
      }
      return array
    }()
  }
];

sortBenchmark(methods, dataSets);