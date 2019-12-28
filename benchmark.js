module.exports =
  function sortBenchmark(methods, dataSets) {
    for (var dataSet of dataSets) {

      console.log(`\n****** Running sorting benchmark for ${dataSet.dataName}`);
      var data = dataSet.data;
      console.log(`[Array: ${data.slice(0, 10)}... (${data.length}) elements]`);

      for (var method of methods) {
        var sortFunction = method.methodFunction;

        var msConsumed = 0;
        var iterations = 100;
        for (var i = 1; i <= iterations; i++) {
          var benchData = data.concat();  // deep copy
          var startTime = (new Date()).getTime();
          sortFunction(benchData);
          msConsumed += new Date().getTime() - startTime;
        }

        var averTimeNs = Math.round(msConsumed / iterations * 1000000);
        console.log(`${method.methodName}: ${averTimeNs}ns per iteration (${msConsumed}ms for ${iterations} iterations)`);
      }
    }
  };