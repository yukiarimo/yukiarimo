'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html", "assets/css/index.css", "assets/fonts/kawai-font.woff"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 1
});