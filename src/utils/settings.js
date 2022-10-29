import browser from "webextension-polyfill";

export default class Settings {
    constructor() {
      this.storage = browser.storage.sync || browser.storage.local;
    }
  
    getSettings() {
        // TODO
    }

    saveSettings(setting) {
        // TODO
    }

    resetSettings() {
        // TODO
    }
}