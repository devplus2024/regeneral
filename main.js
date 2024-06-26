const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1330,
    height: 670,
    frame: false,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#0C0C0D",
      symbolColor: "#fff",
      height: 32,
    }, // Loại bỏ khung mặc định của hệ điều hành
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.setIgnoreMouseEvents(false);
  win.loadFile("index.html");
}
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
