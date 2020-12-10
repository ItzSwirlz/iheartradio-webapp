let {task, desc} = require('jake');

desc('Builds using electron-builder');
task('default', function() {
  console.log('Building iHeartRadio');
  jake.exec('npm ci && npm run build --if-present', {printStdout: true}, complete());
});

desc('Invokes default task');
task('build', ['default'], function() {
  console.log('Invoking default task')
  jake.Task['default'].invoke();
});

desc('Builds snap package using electron-builder');
task('default', function() {
  console.log('Building iHeartRadio for Snapcraft');
  jake.exec('npm ci && npm run build-snap', {printStdout: true}, complete());
});

desc('Installs iHeartRadio for Linux (run as root)');
task('install-linux', function() {
  console.log('Installing for Linux');
  jake.exec('npm run install-linux', {printStdout: true}, complete());
});

desc('Starts the application');
task('start', function() {
  console.log('Starting iHeartRadio');
  jake.exec('npm start', {printStdout: true}, complete());
});
