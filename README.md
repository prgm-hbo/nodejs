# nodejs

* [![](http://www.google.com/s2/favicons?domain=nodejs.org) Node.js](https://nodejs.org)
* [![][ico-github.com] joyent / node](https://github.com/joyent/node) on GitHub (orig)
* [![][ico-github.com] node.js / node](https://github.com/nodejs/node) on GitHub (io.js merged)
* [![](http://www.google.com/s2/favicons?domain=nodeschool.io) nodeschool](http://nodeschool.io/fr-fr/)

PATH = `C:\Program Files (x86)\nodejs\` (node.exe, npm.cmd)

PATH = `...\AppData\Roaming\npm`

Version installée : `node -v`


# npm

Package manager pour javascript.

* [![][ico-npmjs.com] npm](https://www.npmjs.com)
* [![][ico-npmjs.com] npm doc](https://docs.npmjs.com)

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


# express

Minimal and flexible Node.js web application framework

* [expressjs](http://expressjs.com)
* [Third-party middleware](http://expressjs.com/resources/middleware.html)
* [Using template engines with Express](http://expressjs.com/guide/using-template-engines.html)
* [Moving to Express 4](http://expressjs.com/guide/migrating-4.html)
* [Database integration](http://expressjs.com/guide/database-integration.html)

* VS express templates
  * [Jade](http://jade-lang.com/) [![][ico-github.com]](https://github.com/jadejs/jade) [![][ico-npmjs.com]](https://www.npmjs.com/package/jade)
  * [Stylus](http://learnboost.github.io/stylus/) [![][ico-github.com]](https://github.com/stylus/stylus) [![][ico-npmjs.com]](https://www.npmjs.com/package/stylus)
  * [A Simple Website in Node.js with Express, Jade and Stylus](http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus)

## TODO

* [![](http://www.google.com/s2/favicons?domain=loopback.io) LoopBack](http://loopback.io)
* [![][ico-github.com] nib](https://github.com/tj/nib) (Stylus mixins, utilities, components, and gradient image generation)


# edge

* [![][ico-github.io] edge doc](http://tjanczuk.github.io/edge/)
* [![][ico-github.com] github / edge](https://github.com/tjanczuk/edge)
* [![](http://www.google.com/s2/favicons?domain=tomasz.janczuk.org) Tomasz Janczuk](http://tomasz.janczuk.org)

C#

* [![][ico-github.com] edge-cs](https://github.com/tjanczuk/edge-cs)
* [![](http://www.google.com/s2/favicons?domain=tomasz.janczuk.org) Script Node.js from .NET using Edge.js](http://tomasz.janczuk.org/2014/05/script-nodejs-from-net-using-edgejs.html)


# Visual Studio

**Node.js Tools for Visual Studio (NTVS)**

* [![](http://www.google.com/s2/favicons?domain=visualstudio.com) visualstudio](https://www.visualstudio.com/en-us/features/node-js-vs.aspx)
* [![][ico-github.com] github](https://github.com/Microsoft/nodejstools)
* [![][ico-github.com] github / wiki](https://github.com/Microsoft/nodejstools/wiki/Install-Node.js-and-get-started-with-NTVS)

Templates

    New Project / Templates / JavaScript / Node.js

# Frameworks

- http://learn.mean.io/

[ico-github.com]: http://www.google.com/s2/favicons?domain=github.com
[ico-github.io]: http://www.google.com/s2/favicons?domain=github.io
[ico-npmjs.com]: http://www.google.com/s2/favicons?domain=npmjs.com