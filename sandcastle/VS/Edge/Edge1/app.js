var edge = require('edge');

// Call C# async lambda from Node.js

// Syntaxe en string
var lambda_1 = edge.func('async (p) => { return "lambda_1 .NET call, param " + p.ToString(); }');

// Syntaxe en commentaire
var lambda_2 = edge.func(function () {
/*
    using System.Threading;
    using System.Threading.Tasks;

	async (p) => {
        Thread.Sleep(1000);  // synchrone, même si appel asynchrone
        await Task.Run(() => Thread.Sleep(1000));
        await Task.Delay(1000);
		return "lambda_2 .NET call, param " + p.ToString(); 
	}
*/
});

var lambda_3 = edge.func(function () {
/*
    using System.Threading;

	async (p) => {
        Thread.Sleep(1000);  // synchrone, même si appel asynchrone
		return "lambda_3 .NET call, param " + p.ToString(); 
	}
*/
});

var lambda_4 = edge.func(function () {
/*
    using System.Threading;
    using System.Threading.Tasks;
 
    async (input) => {
        return (Func<object, Task<object>>)(async (p) => { 
            Console.WriteLine("lambda_4 .NET write, param " + p.ToString()); 
            Thread.Sleep(1000);  // synchrone, même si appel asynchrone
            Console.WriteLine("lambda_4: 1"); 
            await Task.Run(() => Thread.Sleep(1000));
            Console.WriteLine("lambda_4: 2");
            await Task.Delay(1000);
            Console.WriteLine("lambda_4: 3");
            return null; 
        });
    }*/
});



var p = "p1";

// Appel asynchrone, callback
console.log("Test 1");
lambda_1(p, function (error, result) {
    if (error) throw error;
    console.log(result);
});

// Appel asynchrone, callback
console.log("Test 2");
lambda_2(p, function (error, result) {
    if (error) throw error;
    console.log(result);
});

// Appel synchrone, la fonction doit être synchrone (pas de tâche)
console.log("Test 3");
var result = lambda_3(p, true);
console.log(result);

// Return C# function to node.js
console.log("Test 4");
var res4 = lambda_4(null, true);
// Appel asynchrone
res4(p, false);  // true = appel synchrone

console.log("Test Fin ***");
