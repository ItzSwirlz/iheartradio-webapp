let {task, desc} = require('jake');

desc('Builds using electron-builder for Linux and Mac OS');
task('default', function() {
  console.log('Building iHeartRadio');
  jake.exec('npm ci && npm run build', {printStdout: true}, complete());
});

desc('Invokes default task');
task('build', ['default'], function() {
  console.log('Invoking default task')
  jake.Task['default'].invoke();
});

desc('Builds Mac OS DMG using electron-builder');
task('build-mac', function() {
  console.log('Building iHeartRadio for Mac OS');
  jake.exec('npm ci && npm run build-mac', {printStdout: true}, complete());
});

desc('Builds snap package using electron-builder');
task('build-snap', function() {
  console.log('Building iHeartRadio for Snapcraft');
  jake.exec('npm ci && npm run build-snap', {printStdout: true}, complete());
});

desc('Installs iHeartRadio for Linux (run as root)');
task('install-linux', function() {
  console.log('Installing for Linux');
  jake.exec('npm run install-linux', {printStdout: true}, complete());
});

desc('Lints the application with eslint');
task('lint', function() {
  console.log('Linting iHeartRadio');
  jake.exec('npm run lint', {printStdout: true}, complete());
});

desc('Packages using electron-packager for Linux and Mac OS');
task('package', function() {
  console.log('Packaging iHeartRadio');
  jake.exec('npm ci && npm run package', {printStdout: true}, complete());
});

desc('Packages Mac OS DMG using electron-packager');
task('package-mac', function() {
  console.log('Packaging iHeartRadio for Mac OS');
  jake.exec('npm ci && npm run package-mac', {printStdout: true}, complete());
});

desc('Packages snap package using electron-packager');
task('package-snap', function() {
  console.log('Packaging iHeartRadio for Snapcraft');
  jake.exec('npm ci && npm run package-snap', {printStdout: true}, complete());
});

desc('Starts the application');
task('start', function() {
  console.log('Starting iHeartRadio');
  jake.exec('npm start', {printStdout: true}, complete());
});

desc('Tests the application with eslint');
task('test', function() {
  console.log('Testing iHeartRadio');
  jake.exec('npm run test', {printStdout: true}, complete());
});
