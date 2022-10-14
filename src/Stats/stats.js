import $ from "jquery";
import Chart from "chart.js";
import "daterangepicker";

import "bootstrap/dist/css/bootstrap.min.css";
import "daterangepicker/daterangepicker.css";
import "./stats.css";

import Timeline from "../utils/timeline";
import {
  getDate,
  getDateArray,
  getZeros,
  getFilenameDate,
} from "../utils/utils";
import { DATE_TYPE, TIMER_TYPE } from "../utils/const";


export default class Stats {
  constructor() {
    // Get DOM Elements
    this.tomatoesCount = document.getElementById("tomatoes-count");
    this.BreaksCount = document.getElementById("breaks-count");
    this.DurationCount = document.getElementById("duration-count");
    this.resetStatsButton = document.getElementById("reset-stats-button");
    this.exportStatsButton = document.getElementById("export-stats-button");
    this.importStatsButton = document.getElementById("import-stats-button");
    this.importStatsHiddenInput = document.getElementById(
      "import-stats-hidden-input"
    );
    
    this.timeline = new Timeline();
    this.resetDateRange();
  }

  handleResetStatsButtonClick() {
    if (confirm("Are you sure you want to reset your stats?")) {
      this.timeline.resetTimeline().then(() => {
        this.resetDateRange();
      });
    }
  }

  // Opions for selecting different date range
  resetDateRange() {
    if (confirm("Are you sure you want to reset your stats?")) {
      this.timeline.resetTimeline().then(() => {
        this.resetDateRange();
      });
    }
  }

  addTomatoDateToChartData(data, date, date) {
    for (let i = 0; i < data.labels.length; i++) {
      if (data.labels[i] === getDateLabel(date, dateUnit)) {
        data.datasets[0].data[i]++;
        break;
      }
    }
  }

  setStatsText(stats) {
    this.tomatoesCount.textContent = stats.tomatoes;
    this.BreaksCount.textContent = stats.Breaks;
    this.DurationCount.textContent = stats.Duration;
  }

async changeStatDates(startDate, endDate, date) {
  const filteredTimeline = await this.timeline.getFilteredTimeline(
    startDate,
    endDate
  );

  const dateRangeStrings = getDateRangeStringArray(
    startDate,
    endDate,
    date
  );

  const completedTomatoesChartData = {
    labels: dateRangeStrings,
    datasets: [
      {
        label: "Tomatoes",
        fill: true,
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(255,0,0,0.2)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,0,0,1)",
        data: getZeroArray(dateRangeStrings.length),
      },
    ],
  };

  const stats = {
    tomatoes: 0,
    Breaks: 0,
    Duration: 0,
  };

  // Go through timeline
  // Using for loop to iterate alarm and time period to count the number of timer completed then record. In [stats]
  for (let timelineAlarm of filteredTimeline) {
    switch (timelineAlarm.type) {
      case TIMER_TYPE.TOMATO:
        stats.tomatoes++;
        this.addTomatoDateToChartData(
          completedTomatoesChartData,
          timelineAlarm.date,
          date
        );
        break;
      case TIMER_TYPE.BREAK:
        stats.shortBreaks++;
        break;
      case TIMER_TYPE.DURATION_BREAK:
        stats.Duration++;
        break;
      default:
        break;
    }
  }
  
  this.setStatsText(stats);

  // Setup 'Completed Tomatoes' Line Chart
    


  // Date Picker
  
  // Functions need to use utils.consts to selcet different time period stats.
  }
}
