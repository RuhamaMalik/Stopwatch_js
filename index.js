// default values
let minutes = 00;
let sec = 00;
let milisec = 00;

// Get Section where Time will Render
const mintSec = document.getElementById('minutes');
const secondSec = document.getElementById('seconds');
const miliSecondSec = document.getElementById('miliSec');

//Get Buttons / handler

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const clearBtn = document.getElementById('reset');

//start Function

startBtn.addEventListener('click', () => {
  
  setTime = setInterval(() => {
    milisec++
    miliSecondSec.innerHTML = milisec;
    if (milisec === 100) {
      sec++;
      secondSec.innerHTML = sec;
      milisec = 0;
    }
    if (sec === 60) {
      minutes++;
      mintSec.innerHTML = minutes;
      sec = 0;
    }

  }, 10)
  startBtn.setAttribute('disabled', 'disabled');
  pauseBtn.removeAttribute('disabled', 'disabled')

})

//Pause Function 

pauseBtn.addEventListener('click', ()=>{

  clearInterval(setTime, 1000);
  
  startBtn.removeAttribute('disabled', 'disabled');
  
  if(secondSec.innerHTML > 00){
      pauseBtn.setAttribute('disabled', 'disabled')

  }



})

// Reset Funnction

clearBtn.addEventListener('click', ()=>{
  
minutes = 00;
  sec = 00;
  milisec = 00;
  mintSec.innerHTML = minutes;
    secondSec.innerHTML = sec;
  miliSecondSec.innerHTML = milisec;

    clearInterval(setTime, 1000);


  startBtn.removeAttribute('disabled', 'disabled');
  pauseBtn.removeAttribute('disabled', 'disabled')

  
})

