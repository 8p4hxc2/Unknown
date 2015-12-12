/*jshint strict:false */
"use strict";
const app = require('app');
const BrowserWindow = require('browser-window');
// prevent window being GC'd
let mainWindow;

// report crashes to the Electron project
//require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
//require('electron-debug')();

function createMainWindow() {
	const win = new BrowserWindow({
		width: 1280,
		height: 720,
		resizable: false
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.openDevTools();
	win.on('closed', onClosed);

	return win;
}

function onClosed() {
	// deref the window
	// for multiple windows store them in an array
	mainWindow = null;
}

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', function() {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', function() {
	mainWindow = createMainWindow();
});
