const randomColor = function(){
    const hex='0123456789ABCDEF';
    let color='#';

    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let eventId;
const start = function(){
    if(!eventId)
    {
    eventId = setInterval(changeColor,1000);
    }
    function changeColor(){
  document.body.style.backgroundColor=randomColor();
    }
};
const stop = function(){
   clearInterval(eventId);
   eventId=NULL;
};  

document.querySelector('#start').addEventListener('click',start);
document.querySelector('#stop').addEventListener('click',stop);