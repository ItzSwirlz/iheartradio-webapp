const {complete, desc, jake, task} = require('jake');

desc('Builds using electron-builder for Linux and Mac OS');
task('default', function() {
  jake.exec('npm ci && npm run build', {printStdout: true}, complete());
});

desc('Invokes default task');
task('build', ['default'], function() {
  jake.Task.default.invoke();
});

desc('Builds using electron-builder for armv7l/armhf');
task('build-armv7l', function() {
  jake.exec('npm ci && npm run build-armv7l', {printStdout: true}, complete());
});

desc('Builds Mac OS DMG using electron-builder');
task('build-mac', function() {
  jake.exec('npm ci && npm run build-mac', {printStdout: true}, complete());
});

desc('Builds snap package using electron-builder');
task('build-snap', function() {
  jake.exec('npm ci && npm run build-snap', {printStdout: true}, complete());
});

desc('Installs iHeartRadio for Linux (run as root)');
task('install-linux', function() {
  jake.exec('npm run install-linux', {printStdout: true}, complete());
});

desc('Lints the application with eslint');
task('lint', function() {
  jake.exec('npm run lint', {printStdout: true}, complete());
});

desc('Packages using electron-packager for Linux and Mac OS');
task('package', function() {
  jake.exec('npm ci && npm run package', {printStdout: true}, complete());
});

desc('Packages Mac OS DMG using electron-packager');
task('package-mac', function() {
  jake.exec('npm ci && npm run package-mac', {printStdout: true}, complete());
});

desc('Packages snap package using electron-packager');
task('package-snap', function() {
  jake.exec('npm ci && npm run package-snap', {printStdout: true}, complete());
});

desc('Starts the application');
task('start', function() {
  jake.exec('npm start', {printStdout: true}, complete());
});

desc('Tests the application with eslint');
task('test', function() {
  jake.exec('npm run test', {printStdout: true}, complete());
});
