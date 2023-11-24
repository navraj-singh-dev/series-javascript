const h1_time = document.getElementById("time");
const stop_button = document.getElementById("stop_button");

function showTime() {
  let time = new Date();
  h1_time.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

let interval = setInterval(showTime, 999);
stop_button.addEventListener("click", () => {
  clearInterval(interval);
});

