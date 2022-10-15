// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });
const timeH = document.querySelector("timer");
const timeB = document.querySelector("break");
let seconds;

countDown(10,"timeH");

function countDown({sec, link}){
  seconds = sec;
  seconds--;
  displayTime(seconds,link);
  if (seconds == 0 || seconds < 1) {
      endCount(link);
  }
}


function displayTime({second, link}) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  if(link == "timeH"){
     timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
  }else if(link == "timeB"){
    timeB.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
  }
}


  function endCount(link) {
    link.innerHTML = "Time out";
    alert("time out");
  }
