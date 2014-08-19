(function() {
  define('ember/load-helpers', ['ember'],
    function(ember) {
      'use strict';

      return {
        'default': function(prefix) {
          var helpersRegExp = new RegExp('^' + prefix + '/helpers');

          Ember.keys(requirejs._eak_seen).filter(function(key) {
            return helpersRegExp.test(key);
          }).forEach(function(moduleName) {
            var module    = require(moduleName, null, null, true);
            var shortName = moduleName.slice(moduleName.lastIndexOf('/') + 1);

            if (!module) {
              throw new Error(moduleName + ' must export a helper.');
            }

            ember.Handlebars.helper(shortName, module['default']);
          });
        }
      };
    }
  );
})();
