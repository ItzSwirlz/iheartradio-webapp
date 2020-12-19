const dirname = ".";
const {app, BrowserWindow} = require('electron');
const {autoUpdater} = require("electron-updater");
const path = require('path');
const process = require('process');

// Program variable for the window
let mainWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
autoUpdater.checkForUpdatesAndNotify();

function clearCache() {
  if (mainWindow != null) mainWindow.webContents.session.clearCache();
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    title: "iHeartRadio",
    icon: dirname + '/icon.png',
    webPreferences: {
      preload: path.join(dirname, 'preload.js'),
      plugins: true
    }
  });

  mainWindow.maximize();
  mainWindow.setMenu(null);
  mainWindow.loadURL('https://iheart.com/');

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});


setInterval(clearCache, 1000*60*5);
