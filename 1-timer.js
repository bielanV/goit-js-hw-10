import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as p}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector(".start-btn"),r=document.querySelector(".data-input"),S=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),b=document.querySelector("span[data-minutes]"),f=document.querySelector("span[data-seconds]");let d=0;a.setAttribute("disabled","");const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?(d=t[0],a.removeAttribute("disabled")):(p.show({message:"❌ Please choose a date in the future",color:"red",position:"topRight"}),a.setAttribute("disabled",""))}};m("#datetime-picker",y);function g(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:u,seconds:l}}let s=null;const v=()=>{a.setAttribute("disabled",""),r.setAttribute("disabled",""),s=setInterval(()=>{const t=d-Date.now();Math.floor(t/1e3)===0&&(clearInterval(s),a.removeAttribute("disabled",""),r.removeAttribute("disabled","")),console.log(Math.floor(t/1e3));const e=g(t),o=A(e);M(o)},1e3)};function A({days:t,hours:e,minutes:o,seconds:n}){return t=String(t).padStart(2,"0"),e=String(e).padStart(2,"0"),o=String(o).padStart(2,"0"),n=String(n).padStart(2,"0"),{days:t,hours:e,minutes:o,seconds:n}}function M({days:t,hours:e,minutes:o,seconds:n}){S.textContent=t,h.textContent=e,b.textContent=o,f.textContent=n}a.addEventListener("click",v);
//# sourceMappingURL=1-timer.js.map
