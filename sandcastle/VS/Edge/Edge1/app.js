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
        // Thread.Sleep(1000);  // NON synchrone !!
        
        await Task.Run( async () => {
            Thread.Sleep(1000);
        });
        Console.WriteLine("  lambda_2: 1");
        
        await Task.Run( () => Thread.Sleep(1000) );
        Console.WriteLine("  lambda_2: 2"); 
        
        await Task.Delay(1000);
        Console.WriteLine("  lambda_2: 3"); 
		
        return "lambda_2: return";
	}
*/
});

// Appel synchrone, la fonction doit être synchrone (pas de tâche): result = lambda_3(p, true);
var lambda_3 = edge.func(function () {
/*
    using System.Threading;

	async (p) => {
        Console.WriteLine(string.Format("lambda_3 ({0}) ---", p)); 
        Thread.Sleep(1000);  // synchrone, même si appel asynchrone
		return "lambda_3: return";
	}
*/
});

// Return C# function to node.js
var lambda_4 = edge.func(function () {
/*
    using System.Threading;
    using System.Threading.Tasks;
 
    async (input) => {
        return (Func<object, Task<object>>)(async (p) => { 
            Console.WriteLine(string.Format("lambda_4 ({0}) ---", p)); 
            await Task.Run( async () => {
                Thread.Sleep(1000);
            });
            Console.WriteLine("lambda_4: return");
            return null; 
        });
    }*/
});

// class Startup, Invoke
var lambda_5 = edge.func(function () {
/*
    using System.Threading;
    using System.Threading.Tasks;

    public class Data
    {
        public int anInteger = 1;
        public string aString = "foo";
        public bool aBoolean = true;
        public object anObject = new { a = "foo", b = 12 };
    }

    public class Startup
    {
        public async Task<object> Invoke(dynamic p)
        {
            // KO Console.WriteLine("coucou");
            return new Data();
        }
    }
*/
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
// Export C# function to node.js
var func4 = lambda_4(null, true);
func4(p, false);  // false = appell asynchrone, true = appel synchrone

console.log("Test 5");
lambda_5(p, function (error, result) {
    if (error) throw error;
    console.log(result);
    console.log(result.anObject.a);
});

console.log("Test Fin ***");
