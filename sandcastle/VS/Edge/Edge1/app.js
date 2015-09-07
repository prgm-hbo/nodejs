var edge = require('edge');

// Call C# async lambda from Node.js
var hello = edge.func(/*
    async (input) => {
        return ".NET welcomes " + input.ToString();
    }*/
);

hello('Node.js', function (error, result) {
	if (error) throw error;
	console.log(result);
});