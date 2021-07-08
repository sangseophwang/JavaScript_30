const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; // 60초 동안 한 바퀴를 도는 것을 360도로 표현하는 방법. 시작점이 12시였으므로 90을 더해준다.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90; // 60초가 다 돌아야 1개씩 증가하기 때문에 뒤에 초 계산을 더해준다.
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90; // 60분이 돼야 시간이 1씩 증가하기 때문에 뒤에 분 계산을 더해준다.
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); //1초마다 작동하도록 설정

setDate();
