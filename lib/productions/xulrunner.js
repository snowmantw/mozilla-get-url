/**
 * Patch for the production: XULRunner.
 * It would take over the options before concat them to the URL,
 * and make the URL path as the special way.
 */
(function() {
  var urls = require('../urls');
  module.exports = {
    path: function(opts, channel) {
      return urls.ftpPath(
        opts.product,
        channel,
        opts.branch,
        'sdk',
        '/'
      );
    }
  }
})();
