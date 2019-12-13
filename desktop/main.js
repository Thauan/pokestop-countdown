const {app, BrowserWindow} = require('electron')
const path = require('path')

require('electron-reload')(__dirname);

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    frame: false,
    width: 105,
    height: 100,
    resizable: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile(path.resolve(__dirname, 'src','index.html'))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
