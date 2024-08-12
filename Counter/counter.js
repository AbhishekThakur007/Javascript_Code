const increase = document.getElementById(`inc`);
const reset = document.getElementById(`reset`);
const decrease = document.getElementById(`dec`);

let count=0;
increase.onclick = function(){
    count++;
    document.getElementById(`mylabel`).textContent=count;
}
reset.onclick = function(){
    count=0;
    document.getElementById(`mylabel`).textContent=count;
}
decrease.onclick = function(){
    count--;
    document.getElementById(`mylabel`).textContent=count;
}