# nodejs

* [![](http://www.google.com/s2/favicons?domain=nodejs.org) Node.js](https://nodejs.org)
* [![][ico-github.com] joyent / node](https://github.com/joyent/node) on GitHub (orig)
* [![][ico-github.com] node.js / node](https://github.com/nodejs/node) on GitHub (io.js merged)
* http://nodeschool.io/fr-fr/

PATH = `C:\Program Files (x86)\nodejs\` (node.exe, npm.cmd)

PATH = `...\AppData\Roaming\npm`

Version installée : `node -v`


# npm

Package manager pour javascript.

* [![][ico-npmjs.com] npm](https://www.npmjs.com)
* [![][ico-npmjs.com] npm doc](https://docs.npmjs.com)

node vient avec npm

Version installée : `npm -v`

Mettre à jour npm : `npm install npm -g` (`-g` car pour utilisation en ligne de commande)

* [install](https://docs.npmjs.com/cli/install)

      npm install [-g] <pkgname>    // global, dans ...\AppData\Roaming\npm\node_modules\
      npm install <pkgname> --save  // local, --save pour maj du fichier package.json

  Pour utiliser un package global dans un projet sans le recopier en local, on peut le linker localement : `npm link <pkgname>`.
  Ou bien installer 2 fois le package ; globalement pour utilisation en ligne de commande et localement pour le projet.
  
      Le lien symbolique provoque une erreur de synchro dans GitHub. 

## package.json

* [init](https://docs.npmjs.com/cli/init)

  `npm init [-f]` génère un fichier `package.json` dans le répertoire courant 'MonApp'.

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

To read : https://gist.github.com/branneman/8048520


# express

[Express](http://expressjs.com)

## TODO

* [![](http://www.google.com/s2/favicons?domain=loopback.io) LoopBack](http://loopback.io)


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