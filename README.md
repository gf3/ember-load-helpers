# Ember Load Helpers

## About

A small package to automatically load and register all your helpers in EAK and
ember-cli. Inspired by [ember-load-initializers][ember-load-initializers].

``` javascript
import loadHelpers from 'ember/load-helpers';

loadHelpers('app-name');
```

Don't forget to import ember load helpers in your Brocfile:

``` javascript
app.import('vendor/ember-load-helpers/ember-load-helpers.js', {
  exports: {
    'ember/load-helpers': ['default']
  }
});
```

## License

Ember load helpers is [UNLICENSED][unlicense].

[ember-load-initializers]: https://github.com/stefanpenner/ember-load-initializers
[unlicense]: UNLICENSE
