const path = require('path');
const url = require('url');
const { app, BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true
            }
    });

    win.setMaximizable(false)
    win.setResizable(false) 

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    
    //win.webContents.openDevTools();
    
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit()
})
