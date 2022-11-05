import browser from "webextension-polyfill";

import Settings from "../utils/settings";
import Timeline from "../utils/timeline";

export default class Timer {
  constructor() {
    this.settings = new Settings();
    this.timeline = new Timeline();

    this.timeline.switchStorageFromSyncToLocal();

    this.timer = {};

    this.resetTimer();
  }

  getTimer() {
    return this.timer;
  }

  resetTimer() {
    };
}