function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

   //formatting in hh:mm:ss
   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   const timeString = `${hours}:${minutes}:${seconds}`

   document.getElementById('time').textContent = timeString;
}
setInterval(updateTime,1000);
updateTime();