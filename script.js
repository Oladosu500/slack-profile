function updateTimeAndDay() {
  const currentTimeUTC = new Date().toUTCString();
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "short",
  });

  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current Time (UTC): ${currentTimeUTC}`;
  document.querySelector(
    '[data-testid="currentDay"]'
  ).textContent = `Current Day: ${currentDay}`;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
