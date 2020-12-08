let { task, desc } = require('jake');

desc('Runs the application');
task('run', function () {
  console.log('Starting iheartradio-webapp');
  jake.exec('npm start', { printStdout: true }, complete());
});

desc('Builds using electron-builder');
task('default', function () {
  console.log('Building iheartradio-webapp');
  jake.exec('npm ci && npm run build --if-present', { printStdout: true }, complete());
});

desc('Invokes default task');
task('build', ['default'], function () {
  console.log('Invoking default task')
  jake.Task['default'].invoke();
});
