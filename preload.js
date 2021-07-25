const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld(
  'electronApi',
  {
    async invoke() {
      await ipcRenderer.invoke('invoke-test', 'hello');
    }
  });
