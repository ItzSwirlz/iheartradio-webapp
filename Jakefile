let { task, desc } = require('jake');

desc('Runs the application');
task('default', function () {
  console.log('Starting iheartradio-webapp');
  jake.exec('npm start', { printStdout: true}, complete());
});

desc('Invokes default task');
task('run', ['default'], function () {
  console.log('Invoking default task')
  jake.Task['default'].invoke();
});
