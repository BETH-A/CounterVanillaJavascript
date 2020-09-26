/*let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click", function (e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    } else if(styles.contains("increase")){
      count++;
    } else {
      count = 0;
    }
    
    value.textContent = count;
  })
})*/

let count = 0

const value = document.querySelector("#value")
const increase = document.querySelector(".increase")
const reset = document.querySelector(".reset")
const decrease = document.querySelector(".decrease")

increase.addEventListener("click", function (e){
    const actions = e.currentTarget.classList;
    if (actions.contains("increase")) {
      count++
    }    
    value.textContent = count
  })

decrease.addEventListener("click", function (e){
    const actions = e.currentTarget.classList
    if (actions.contains("decrease")) {
      count--
    }    
    value.textContent = count;
  })

reset.addEventListener("click", function (e){
    const actions = e.currentTarget.classList
    if (actions.contains("reset")) {
      count=0
    }    
    value.textContent = count
  });