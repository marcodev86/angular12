
const {app, BrowserWindow, ipcMain} = require('electron')

let mainWindow

function createWindow() {
  const path = require("path");
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname,'preload.js')
    }
  })

  mainWindow.loadFile(`dist/electron12App/index.html`).then(() => console.info(`loaded application`));
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

ipcMain.handle('invoke-test', async (event, ...args) => {
  console.log(`handle method ${args}`);
})
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()


})
