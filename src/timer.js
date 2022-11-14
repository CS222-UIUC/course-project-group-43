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
    if (this.timer.interval) {
      clearInterval(this.timer.interval);
    }

    this.timer = {
      interval: null,
      scheduledTime: null,
      totalTime: 0,
      type: null,
    };

  }

  setTimer(type) {
    this.resetTimer();

    this.settings.getSettings().then((settings) => {
      const milliseconds = getTimerTypeMilliseconds(type, settings);

      this.timer = {
        interval: setInterval(() => {
          const timer = this.getTimer();
          const timeLeft = timer.scheduledTime - Date.now();

          if (timeLeft <= 0) {
            this.notifications.createBrowserNotification(timer.type);
            this.timeline.addAlarmToTimeline(timer.type, timer.totalTime);
            this.resetTimer();
          } else {
            const minutesLeft = getMillisecondsToMinutesAndSeconds(timeLeft).minutes.toString();
            const secondsLeft = getMillisecondsToMinutesAndSeconds(timeLeft).seconds;
          }
        }, getSecondsInMilliseconds(1)),
        scheduledTime: Date.now() + milliseconds,
        totalTime: milliseconds,
        type,
      };

      const { minutes } = getMillisecondsToMinutesAndSeconds(milliseconds);
    });
  }


}