toCamelCase
===========

A simple JavaScript script that adds a comprehensive `toCamelCase` function to `String.prototype`.  `toCamelCase()`
includes an optional boolean parameter to output PascalCase instead of CamelCase.

This "pollutes" the `String` prototype which may or may not be an issue for you.  It will not, however, overwrite
`String.prototype.toCamelCase` if it is already defined.

If performance is an issue and you're running this over millions of strings, there are probably faster modules out
there.  This one uses three Regex passes over the string.  For the majority of cases, however, this is not an issue.

Installation
------------

For NPM:

`npm install @dfoverdx/tocamelcase`

Without NPM:

1) Download `/dist/tocamelcase.min.js` from this repository
2) Place it somewhere your webpage can access (e.g. `/scripts/`)
3) Add it to your HTML file
    
    ``` html
    <body>
        <!-- ... -->
        <script src="/scripts/tocamelcase.js" type="text/javascript"></script>
        <!-- scripts that use .toCamelCase() -->
    </body>
    ```

Usage
-----

### ES5 ###

``` js
require('tocamelcase');

console.log('This is camel-case'.toCamelCase()); // outputs: 'thisIsCamelCase'
console.log('This is pascal-case'.toCamelCase(true)); // outputs 'ThisIsPascalCase'
```

### ES6 ###
``` es6
import 'tocamelcase';

console.log('This is camel-case'.toCamelCase()); // outputs: 'thisIsCamelCase'
console.log('This is pascal-case'.toCamelCase(true)); // outputs 'ThisIsPascalCase'
```