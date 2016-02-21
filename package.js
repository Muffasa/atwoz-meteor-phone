Package.describe({
    name: 'atwoz:phone',
    version: '0.0.1',
    summary: "expose a Phone object that can analize and parse phone numbers",
    git: "https://github.com/muffasa/atwoz-meteor-phone",
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.1');
    api.addFiles('phone.js');
});
Npm.depends({
  "phone": "1.0.5"
});
Package.onTest(function (api) {
    api.use('tinytest');
    api.use('atwoz:phone');
    api.addFiles('phone-tests.js');
});
