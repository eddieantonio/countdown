Countdown
---------

This is my first [Svelte](https://svelte.dev/) app.


Build Dependencies
==================

To build the app, you will need:

 - [NodeJS] ≥ 10.0.0.


Building
========

To build the app, first make sure all development dependencies are
installed:

    npm install

Then, run the build script:

    npm run build

This will create a directory called `dist` that contains files that
can be statically-hosted on a server.

    dist/
    ├── bundle.js
    └── index.html

That is, just copy `dist/bundle.js` and `dist/index.html` to some place
that your server will host them!

[NodeJS]: https://nodejs.org/en/
