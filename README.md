# nodejs

* [![](http://www.google.com/s2/favicons?domain=nodejs.org) Node.js](https://nodejs.org)
* [![][ico-github] joyent / node](https://github.com/joyent/node) on GitHub (orig)
* [![][ico-github] node.js / node](https://github.com/nodejs/node) on GitHub (io.js merged)
* [![](http://www.google.com/s2/favicons?domain=nodeschool.io) nodeschool](http://nodeschool.io/fr-fr/)

PATH = `C:\Program Files (x86)\nodejs\` (node.exe, npm.cmd)

PATH = `...\AppData\Roaming\npm`

Version installée : `node -v`


# npm

Package manager pour javascript.

* [![][ico-npm] npm](https://www.npmjs.com)
* [![][ico-npm] npm doc](https://docs.npmjs.com)

node vient avec npm (`npm -v`).

Pour mettre à jour la version de npm installée (globalement car utilisation en ligne de commande) : `npm install npm -g`.

* [install](https://docs.npmjs.com/cli/install)

  ```sh
  npm install [-g] <pkgname>    // global, dans ...\AppData\Roaming\npm\node_modules\
  npm install <pkgname> --save  // local, --save pour maj du fichier package.json
  ```
  
  Pour utiliser un package global dans un projet sans le recopier en local, on peut le linker localement : `npm link <pkgname>`.
  Ou bien installer 2 fois le package ; globalement pour utilisation en ligne de commande et localement pour le projet.
  
  > Le lien symbolique provoque une erreur de synchro dans GitHub. 

## package.json

* [init](https://docs.npmjs.com/cli/init)

  `npm init [-f]` génère un fichier `package.json` dans le répertoire courant 'MonApp'.
  
  ```json
  {
    "name": "MonApp",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  ```

To read : https://gist.github.com/branneman/8048520


# Express

Minimal and flexible Node.js web application framework

* [expressjs](http://expressjs.com)
* [Third-party middleware](http://expressjs.com/resources/middleware.html)
* [Using template engines with Express](http://expressjs.com/guide/using-template-engines.html)
* [Moving to Express 4](http://expressjs.com/guide/migrating-4.html)
* [Database integration](http://expressjs.com/guide/database-integration.html)
* VS express templates
  * [Jade](http://jade-lang.com/)
  * [Stylus](http://learnboost.github.io/stylus/)


# Jade

[Jade](http://jade-lang.com/)
( [![][ico-github]](https://github.com/jadejs/jade) [![][ico-npm]](https://www.npmjs.com/package/jade) )

* [Express and Jade](http://tott-meetup.readthedocs.org/en/latest/sessions/express.html)
* [To Engineers Who Tried to Use Jade Template Engine and Can’t Get Started](http://webapplog.com/jade/)


# Stylus

[Stylus](http://learnboost.github.io/stylus/)
( [![][ico-github]](https://github.com/stylus/stylus) [![][ico-npm]](https://www.npmjs.com/package/stylus) )

* [Nib](http://tj.github.io/nib/)
  ( [![][ico-github]](https://github.com/tj/nib) [![][ico-npm]](https://www.npmjs.com/package/nib) )
  Stylus mixins, utilities, components, and gradient image generation

*  http://nibstyl.us/

* [A Simple Website in Node.js with Express, Jade and Stylus](http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus)


# Edge

[Edge](http://tjanczuk.github.io/edge/)
( [![][ico-github]](https://github.com/tjanczuk/edge) [![][ico-npm]](https://www.npmjs.com/package/edge) )

[![](http://www.google.com/s2/favicons?domain=tomasz.janczuk.org) Tomasz Janczuk](http://tomasz.janczuk.org)

**C#** compiler for edge.js

[![][ico-github] edge-cs](https://github.com/tjanczuk/edge-cs)

* [![](http://www.google.com/s2/favicons?domain=tomasz.janczuk.org) Script Node.js from .NET using Edge.js](http://tomasz.janczuk.org/2014/05/script-nodejs-from-net-using-edgejs.html)


# Socket.io

[Socket.io](http://socket.io/)
( [![][ico-github]](https://github.com/socketio/socket.io) [![][ico-npm]](https://www.npmjs.com/package/socket.io) )

* [engine.io](https://github.com/socketio/engine.io)


# Visual Studio

Node.js Tools for Visual Studio (NTVS)

* [![][ico-vs] visualstudio](https://www.visualstudio.com/en-us/features/node-js-vs.aspx)
( [![][ico-github]](https://github.com/Microsoft/nodejstools) [wiki](https://github.com/Microsoft/nodejstools/wiki/) )

Templates

    New Project / Templates / JavaScript / Node.js


# Frameworks

* [![](http://www.google.com/s2/favicons?domain=loopback.io) LoopBack](http://loopback.io)
( [![][ico-github]](https://github.com/strongloop/loopback) [![][ico-npm]](https://www.npmjs.com/package/loopback) )

* http://learn.mean.io/


[ico-github]: http://www.google.com/s2/favicons?domain=github.com
[ico-npm]:    http://www.google.com/s2/favicons?domain=npmjs.com
[ico-vs]:     https://i-msdn.sec.s-msft.com/dynimg/IC612308.png