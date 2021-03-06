module.exports = {
  nodedeps: {
    files: [{
      cwd: 'node_modules/mozilla-payments-client/dist',
      expand: true,
      src: 'payments-client.js',
      dest: 'public/lib/js',
    }, {
      cwd: 'node_modules/mozilla-payments-config/json',
      expand: true,
      src: '**',
      dest: 'public/lib/js/mozilla-payments-config',
    }, {
      cwd: 'node_modules/jquery/dist',
      expand: true,
      src: 'jquery.min.js',
      dest: 'public/lib/js',
    }, {
      cwd: 'bower_components/fxa-relier-client/',
      expand: true,
      src: 'fxa-relier-client.min.js',
      dest: 'public/lib/js',
    }],
  },
};
