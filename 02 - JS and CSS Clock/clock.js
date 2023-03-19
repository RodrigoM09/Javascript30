const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".second-hand");

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    minutesDegrees = (seconds / 60) * 360;
    minuteHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
      const hours = now.getSeconds();
      hoursDegrees = (seconds / 60) * 360;
      hourHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(setTime, 1000);
