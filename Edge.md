# Edge

[Edge](http://tjanczuk.github.io/edge/)
( [![][ico-github]](https://github.com/tjanczuk/edge) [![][ico-npm]](https://www.npmjs.com/package/edge) )
run .NET and Node.js in-process on Windows, Mac OS, and Linux

[![](http://www.google.com/s2/favicons?domain=tomasz.janczuk.org) Tomasz Janczuk](http://tomasz.janczuk.org)

**C#** compiler for edge.js

[![][ico-github] edge-cs](https://github.com/tjanczuk/edge-cs)

- [![](http://www.google.com/s2/favicons?domain=tomasz.janczuk.org) Script Node.js from .NET using Edge.js](http://tomasz.janczuk.org/2014/05/script-nodejs-from-net-using-edgejs.html)
- [Run .NET and Node.js code in-process with Edge.js](http://www.infoq.com/articles/the_edge_of_net_and_node)

node.js -> C#
- [Export node.js function to C#](http://tjanczuk.github.io/edge/#/31): Node.js function is also data
- [Call node.js function from C#](http://tjanczuk.github.io/edge/#/32): Node.js function is also data, continued
- [Script node.js from .NET](http://tjanczuk.github.io/edge/#/48): Asynchronously call Node.js functions in .NET
- [Use built-in modules](http://tjanczuk.github.io/edge/#/51): Core Node.js modules are included with Edge.js 
- [Use npm modules](http://tjanczuk.github.io/edge/#/52): Additional Node.js modules can be installed from NPM

C# -> node.js
- [Return C# function to node.js](http://tjanczuk.github.io/edge/#/33): C# function is also data
- [Manage C# state from node.js](http://tjanczuk.github.io/edge/#/34): Call Node.js proxy to C# closure over CLR data
- [Multi-threading in node.js process](http://tjanczuk.github.io/edge/#/39): Run CPU-bound background work on CLR thread pool
- [Express.js handler in C#](http://tjanczuk.github.io/edge/#/43): Plug in .NET OWIN apps as connect middleware or express handlers
- [.NET handlers for node.js events](http://tjanczuk.github.io/edge/#/55)

## Entry point

The entry point into the .NET code is normalized to a `Func<object, Task<object>>` delegate.
This allows Node.js code to call .NET asynchronously and avoid blocking the Node.js event loop.

- [Sync vs async](http://tjanczuk.github.io/edge/#/27): Call CLR functions synchronously or asynchronously

Appel asynchrone

```javascript
var myFunction = edge.func(...);

myFunction('Some input', function (error, result) {
    //...
});
```

Appel synchrone

```javascript
var result = myFunction('Some input', true);
```

Contrainte : pas de code asynchrone dans la partie .net
 
### edge.func()

* delegate sous forme de string

```csharp

'async (input) => { return ""; }'
```

## Marshalling

Edge.js marshals **all data by value**, so a copy of the data is created on the V8 or CLR heap when execution crosses the V8/CLR boundary.
Exception: separately from marshaling data by value, Edge.js will marshal **functions by reference**. 

## WebSocket 

- [How to: use external Node.js modules](https://www.npmjs.com/package/edge#how-to-use-external-node-js-modules)


[ico-github]: https://camo.githubusercontent.com/40c6c706914d145efe97dd7b353a13fb6a12950a/687474703a2f2f7777772e676f6f676c652e636f6d2f73322f66617669636f6e733f646f6d61696e3d6769746875622e636f6d
[ico-npm]:    https://camo.githubusercontent.com/0b9ab04bd9ec24725b784564edd3b37a6d24e72b/687474703a2f2f7777772e676f6f676c652e636f6d2f73322f66617669636f6e733f646f6d61696e3d6e706d6a732e636f6d
[ico-vs]:     https://camo.githubusercontent.com/e970fb88aa5b2bc099f0e68d36d3c7d670409bfa/68747470733a2f2f692d6d73646e2e7365632e732d6d7366742e636f6d2f64796e696d672f49433631323330382e706e67
[ico-nodejs]: https://camo.githubusercontent.com/ea1200d67566a52c1efe34d5794da1d908419955/687474703a2f2f7777772e676f6f676c652e636f6d2f73322f66617669636f6e733f646f6d61696e3d6e6f64656a732e6f7267
[ico-vscode]: https://camo.githubusercontent.com/85dba057e9bc65dd556272162e125f7dafb7dd6d/687474703a2f2f64367264356734746e6268716a2e636c6f756466726f6e742e6e65742f696d6167653f75726c3d636f64652e76697375616c73747564696f2e636f6d26743d3226733d3126683d3134323939333931313630323730393335353134
