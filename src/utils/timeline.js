import browser from "webextension-polyfill";
import { STORAGE_KEY } from "./constants";

export default class Timeline {
  constructor() {
    this.storage = browser.storage.local;
    this.notifications = notifications;
  }

  // PRIVATE FUNCS:
  async _getLocalTime() {
    const local_time = await browser.storage.local.get(
      STORAGE_KEY.TIMELINE
    );
    return local_time[STORAGE_KEY.TIMELINE];
  }

  async _setLocalTime(time) {
    await browser.storage.local.set({ [STORAGE_KEY.TIMELINE]: time });
  }

  async _getSyncTime() {
    const sync_time = await browser.storage.sync.get(
      STORAGE_KEY.TIMELINE
    );
    return sync_time[STORAGE_KEY.TIMELINE];
  }

  async _setSyncTime(time) {
    await browser.storage.sync.set({ [STORAGE_KEY.TIMELINE]: time });
  }

  async _resetLocalTime(time) {
    // TODO
  }

  async _resetSyncTime(time) {
    // TODO
  }

  // PUBLIC FUNCS:
  async resetTimeline() {
    await browser.storage.sync.remove(STORAGE_KEY.TIMELINE);
    await browser.storage.local.remove(STORAGE_KEY.TIMELINE);
  }

  async getTimeline() {
    // TODO
  }

  async setTimeline(timeline) {
    // TODO
  }

  // helper funcs
  async isEqual(timeline_1, timeline_2) {
    // TODO
  }

  async mergeTimeline(timeline_1, timeline_2) {
    // TODO
  }
}