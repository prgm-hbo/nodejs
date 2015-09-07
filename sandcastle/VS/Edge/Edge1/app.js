var edge = require('edge');

// Call C# async lambda from Node.js
var test_1 = edge.func('async (p1) => { return ".NET call, param " + p1.ToString(); }');

var test_2 = edge.func(function () {/*
	async (p1) => 
	{ 
		return ".NET call, param " + p1.ToString(); 
	}
*/
});

var p1 = "p1";
test_1(p1, function (error, result) {
  if (error) throw error;
  console.log(result);
});

test_2(p1, function (error, result) {
    if (error) throw error;
    console.log(result);
});
