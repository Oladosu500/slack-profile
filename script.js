function updateTimeAndDay() {
  const currentTimeUTC = new Date().toUTCString();
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = ` ${currentTimeUTC}`;
  document.querySelector(
    '[data-testid="currentDay"]'
  ).textContent = ` ${currentDay}`;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
