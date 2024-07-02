function updateTimeAndDay() {
  const currentTimeUTC = new Date().toUTCString();
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "short",
  });

  document.getElementById(
    "currentTimeUTC"
  ).textContent = `Current Time (UTC): ${currentTimeUTC}`;
  document.getElementById(
    "currentDay"
  ).textContent = `Current Day: ${currentDay}`;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
