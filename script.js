const countdown = () => {
    const now = new Date();
    const eventDate = new Date('October 27, 2024 00:00:00').getTime();
    const distance = eventDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerHTML = days + "d";
    document.getElementById('hours').innerHTML = hours + "h";
    document.getElementById('minutes').innerHTML = minutes + "m";
    document.getElementById('seconds').innerHTML = seconds + "s";
  }
  
  setInterval(countdown, 1000);
  
