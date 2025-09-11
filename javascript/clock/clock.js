// This function updates the dot's position frequently for a smooth animation.
function setDot() {
  const now = new Date();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();
  const clock = document.querySelector('.clock-face');
  const radius = 125;
  
  // Calculate the angle using milliseconds for truly smooth movement
  const angle = ((seconds + milliseconds / 1000) / 60) * 360;

  // Calculate the x and y coordinates
  const x = (clock.offsetWidth / 2) + radius * Math.sin(angle * Math.PI / 180);
  const y = (clock.offsetHeight / 2) - radius * Math.cos(angle * Math.PI / 180);

  // Apply the new position
  document.querySelector('.dot').style.left = `${x}px`;
  document.querySelector('.dot').style.top = `${y}px`;
}

// This function updates the minute and hour hands only when needed.
function setHands() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    // Calculate rotation degrees for minute and hour hands
    const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);
  
    // Apply rotation
    document.querySelector('.min-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Update the dot very frequently
setInterval(setDot, 10);

// Update the hands every second
setInterval(setHands, 1000);

// Set initial positions
setHands();
setDot();