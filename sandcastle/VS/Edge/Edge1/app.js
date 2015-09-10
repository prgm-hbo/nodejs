var edge = require('edge');

// Call C# async lambda from Node.js

// Func<object, Task<object>> delegate

// delegate en string
var lambda_1 = edge.func('async (p) => { return "lambda_1: return"; }');

// delegate en commentaire
// lambda_2(p, function (error, result) {
var lambda_2 = edge.func(function () {
/*
    using System.Threading;
    using System.Threading.Tasks;

	async (p) => {
        Console.WriteLine(string.Format("lambda_2 ({0}) ---", p)); 
        Thread.Sleep(1000);  // synchrone quand même
        Console.WriteLine("  lambda_2: 1"); 
        await Task.Delay(1000);
        Console.WriteLine("  lambda_2: 2"); 
        await Task.Run(() => Thread.Sleep(1000));
		return "lambda_2: return";
	}
*/
});

// Appel synchrone, la fonction doit être synchrone (pas de tâche): result = lambda_3(p, true);
var lambda_3 = edge.func(function () {
/*
    using System.Threading;

	async (p) => {
        Thread.Sleep(1000);  // synchrone, même si appel asynchrone
		return "lambda_3 .NET call, param " + p.ToString(); 
	}
*/
});

// Return C# function to node.js: res4 = lambda_4(null, true);
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

console.log("Test 1");
// Appel asynchrone, callback
lambda_1(p, function (error, result) {
    if (error) throw error;
    console.log(result);
});

console.log("Test 2");
// Appel asynchrone, callback
lambda_2(p, function (error, result) {
    if (error) throw error;
    console.log(result);
});

console.log("Test 3");
// Appel synchrone, la fonction doit être synchrone (pas de tâche)
var result = lambda_3(p, true);
console.log(result);

console.log("Test 4");
// Return C# function to node.js
var res4 = lambda_4(null, true);
// Appel asynchrone
res4(p, false);  // true = appel synchrone

console.log("Test Fin ***");
