# Ember Load Helpers

## About

A small package to automatically load and register all your helpers in EAK and
ember-cli. Inspired by [ember-load-initializers][ember-load-initializers].

``` javascript
import loadHelpers from 'ember/load-helpers';

loadHelpers('app-name');
```

Don't forget to add `ember-load-helpers` to **both** `package.json` and `bower.json`:

``` javascript
{
  "dependencies": {
    "ember-load-helpers": "~0.0.2"
  }
}
```

## License

Ember load helpers is [UNLICENSED][unlicense].

[ember-load-initializers]: https://github.com/stefanpenner/ember-load-initializers
[unlicense]: UNLICENSE
