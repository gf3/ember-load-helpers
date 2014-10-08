module.exports = {
  name: 'ember-load-helpers',

  included: function(app) {
    app.import(app.bowerDirectory + '/ember-load-helpers/ember-load-helpers.js', {
      exports: {
        'ember/load-helpers': ['default']
      }
    });
  }
};
