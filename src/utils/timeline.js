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

  async _getRawTime() {
    const local_timeline = await this._getLocalTime();
    const sync_timeline = await this._getSyncTime();
    return local_timeline || sync_timeline || [];
  }

  // PUBLIC FUNCS:
  async resetTimeline() {
    await browser.storage.sync.remove(STORAGE_KEY.TIMELINE);
    await browser.storage.local.remove(STORAGE_KEY.TIMELINE);
  }

  async getTimeline() {
    const raw_time = await this._getRawTime();
    return raw_time.map((timelineAlarm) => {
      timelineAlarm.date = new Date(timelineAlarm.date);
      return timelineAlarm;
    });
  }

  async setTimeline(timeline) {
    const raw_time = await this._getRawTimeline();
    timeline.map((item) => {
      raw_time.push(item);
    });
    try {
      await this.storage.set({ [STORAGE_KEY.TIMELINE]: raw_time });
    } catch (e) {
      if (e.message.startsWith("QuotaExceededError")) {
        await this.notifications.createStorageLimitNotification();
      }
    }
  }
}