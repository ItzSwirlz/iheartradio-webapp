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

desc('Installs iHeartRadio (run as root)');
task('install', function() {
  console.log('Installing for Linux');
  jake.exec('npm run install', {printStdout: true}, complete());
});

desc('Starts the application');
task('start', function() {
  console.log('Starting iHeartRadio');
  jake.exec('npm start', {printStdout: true}, complete());
});
