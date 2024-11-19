const offerEnds = "20 Nov 2024";

function countdown() {
  const offerDate = new Date(offerEnds);
  const currentDate = new Date();
  const totalseconds = (offerDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / (24 * 60 * 60));
  const hours = Math.floor((totalseconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalseconds % 3600) / 60);
  const second = Math.floor(totalseconds % 60);
  //
  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(second);
  console.log(
    `days: ${days} hours: ${hours} minutes: ${minutes} second: ${second}`
  );
  document.querySelector("#days").innerText = formaTime(days);
  document.querySelector("#hours").innerText = formaTime(hours);
  document.querySelector("#minutes").innerText = formaTime(minutes);
  document.querySelector("#second").innerText = formaTime(second);
  document.querySelector("#second").innerText =
    second < 10 ? `0${second}` : second;
}
// DRY - do not reapet yourself
function formaTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
