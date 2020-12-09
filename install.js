// IF THIS FAILS, BLAME NODE. Ensure you ran npm install and npm run build first.
const {exec} = require('child_process');

// TODO: Allow for custom installdir's.
var installdir = "/usr/share/iheartradio-webapp/";

// Node likes to have fun and bounce around. THIS MUST COME FIRST.
function createInstalldir() {
  console.log("Creating install directory " + installdir);
  exec("mkdir " + installdir + " " + installdir + "src/", (error, stdout, stderr) => {
    if (error) throw error; return;
    if (stderr) throw stderr; return;
    console.log('stdout: ${stdout}');
  });
}

function installApp() {
  // We do this because this way we also get .so libraries with it
  console.log("Installing iHeartRadio");
  exec("cp -r dist/linux-unpacked/* " + installdir, (error, stdout, stderr) => {
    if (error) throw error; return;
    if (stderr) throw stderr; return;
    console.log('stdout: ${stdout}');
  });
}

function linkBinary() {
  console.log("Linking iHeartRadio binary file");
  exec("ln -sn " + installdir + "iheartradio /usr/bin/iheartradio", (error, stdout, stderr) => {
    if (error) throw error; return;
    if (stderr) throw stderr; return;
    console.log('stdout: ${stdout}');
  });
}

createInstalldir();
installApp();
linkBinary();

console.log("Installing desktop and menuentry file");
exec("cp data/iheartradio.desktop /usr/share/applications/", (error, stdout, stderr) => {
  if (error) throw error; return;
  if (stderr) throw stderr; return;
  console.log('stdout: ${stdout}');
});

console.log("Installing iHeartRadio icon for the system");
exec("cp data/iheartradio.svg /usr/share/icons/hicolor/symbolic/apps/", (error, stdout, stderr) => {
  if (error) throw error; return;
  if (stderr) throw stderr; return;
  console.log('stdout: ${stdout}');
});
