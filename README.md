[![Build Status](https://travis-ci.com/taras/ember-import.svg?branch=master)](https://travis-ci.com/taras/ember-import)

ember-import
==============================================================================

`(import)` helper allows to import arbitrary modules into the template of an
Ember application. 

Installation
------------------------------------------------------------------------------

```
ember install ember-import
```

Usage
------------------------------------------------------------------------------

You can import any module using `{{import 'full-module-path/goes/here'}}`. This
will automatically import the default export. 

If you would like to change the name of the export that you want to import then 
you can specify the name of the module after `?`. 

For example, `{{import 'full-module-path/goes/here?otherExport'}}` will import
`otherExport` from `full-module-path/goes/here`.

Limitations
------------------------------------------------------------------------------

- Does not support relative imports
- Does not allow async import

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone git@github.com:taras/ember-import.git`
* `cd ember-import`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
