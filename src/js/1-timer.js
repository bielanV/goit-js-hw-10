// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector('.start-btn');
const dataInput = document.querySelector('.data-input');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

let userSelectedDate = 0;
startBtn.setAttribute("disabled",'');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] > Date.now()) {
            userSelectedDate = selectedDates[0];
            startBtn.removeAttribute('disabled');
        }
        else
        {
            iziToast.show({
                message: '❌ Please choose a date in the future',
                color: 'red',
    position: 'topRight'        });
    startBtn.setAttribute("disabled",'');    }
    
    },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
let intervalId = null;
const start = () => {
        startBtn.setAttribute('disabled', ''); 
        dataInput.setAttribute('disabled', '');
    intervalId = setInterval(() => {
        const deltaTime = userSelectedDate - Date.now();
            if (Math.floor(deltaTime/1000)===0) {
                clearInterval(intervalId);
                startBtn.removeAttribute('disabled', ''); 
                dataInput.removeAttribute('disabled', '');
            }
        console.log(Math.floor(deltaTime/1000));
        const time = convertMs(deltaTime);
        const addZeroes = addLeadingZero(time);
        updateClock(addZeroes);
    }, 1000);
    
}

function addLeadingZero({ days, hours, minutes, seconds }) {
    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return { days, hours, minutes, seconds };
}

function updateClock({ days, hours, minutes, seconds }) {
    daysSpan.textContent = days;
            hoursSpan.textContent = hours;
            minutesSpan.textContent = minutes;
            secondsSpan.textContent = seconds;
}

startBtn.addEventListener('click', start);