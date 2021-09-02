//ask date
const setTime = prompt(`SET TIME
Use Year/Month/Day format 
(Example : 2021/08/01)`);

//filter answer
const splitTime = setTime.split("/");
const newSplitTime = function (time) {
  if (time[0].length === 4 && time[1].length <= 2 && time[2].length <= 2) {
    return `${time[0]}, ${time[1]}, ${time[2]}`;
  } else {
    alert("Write in a right format");
    return prompt(`SET TIME
    Use Year/Month/Day format 
    (Example : 2021/08/01)`);
  }
};

const changeText = function () {
  //target time (month is -1) && the present time
  const target = new Date(String(newSplitTime(splitTime)));
  const current = new Date();
  const targetTime = target.getTime();
  const currentTime = current.getTime();

  //countdown time
  const minusTime = targetTime - currentTime;
  const minusTimeRound = Math.round(minusTime / 1000);

  const calculateDay = Math.floor(minusTimeRound / 86400);
  const calculateHour = Math.floor((minusTimeRound / 3600) % 24);
  const calculateMinute = Math.floor((minusTimeRound / 60) % 60);
  const calculateSecond = Math.floor(minusTimeRound % 60);

  //change countdown text
  document.querySelector(".day-count").textContent = calculateDay;
  document.querySelector(".hour-count").textContent = calculateHour;
  document.querySelector(".minute-count").textContent = calculateMinute;
  document.querySelector(".second-count").textContent = calculateSecond;
};

//change every 1 second
setInterval(changeText, 1000);
