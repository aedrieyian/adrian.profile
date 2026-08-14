document.getElementById("tagList").addEventListener("click", (e) => {
  if (e.target.classList.contains("tag")) {
    e.target.classList.toggle("selected");
  }
});

const currentTime = document.getElementById("currentTime");

function updateTime() {
  if (!currentTime) return;

  const now = new Date();

  currentTime.textContent = now.toLocaleTimeString("en-PH", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
}

updateTime();
setInterval(updateTime, 1000);

const skillsList = document.getElementById("skillsList");

skillsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("skill-button")) {
    e.target.classList.toggle("selected");
  }
});