// If this fails, run 'npm install && npm run build'
const installdir = "/usr/share/iheartradio-webapp/";
const exec = require('child_process');

// Node likes to have fun and bounce around. THIS MUST COME FIRST.
function createInstalldir() {
  exec(
    "mkdir " + installdir + " " + installdir + "src/",
    (error, stdout, stderr) => {
      if (error) throw error;
      if (stderr) throw stderr;
    }
  );
}

function installApp() {
  // We do this because this way we also get .so libraries with it
  exec(
    "cp -r dist/linux-unpacked/* " + installdir,
    (error, stdout, stderr) => {
      if (error) throw error;
      if (stderr) throw stderr;
    }
  );
}

function linkBinary() {
  exec(
    "ln -sn " + installdir + "iheartradio /usr/bin/iheartradio",
    (error, stdout, stderr) => {
      if (error) throw error;
      if (stderr) throw stderr;
    }
  );
}

createInstalldir();
installApp();
linkBinary();

exec(
  "cp data/iheartradio.desktop /usr/share/applications/",
  (error, stdout, stderr) => {
    if (error) throw error;
    if (stderr) throw stderr;
  }
);

exec(
  "cp data/iheartradio.png /usr/share/pixmaps/",
  (error, stdout, stderr) => {
    if (error) throw error;
    if (stderr) throw stderr;
  }
);
