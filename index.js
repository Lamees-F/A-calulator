const operaion = document.querySelector(".operaion")
const result = document.querySelector(".result")
const keys = document.querySelectorAll("button")
  
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText === 'AC'){
        operaion.innerText = "";
        result.innerText = "0";
        result.style.animation =""
        operaion.style.animation = "";
        return;
    }
    if(buttonText === 'del'){
        operaion.textContent = operaion.textContent.substring(0,operaion.textContent.length-1);
        return;
    }
    if(buttonText === "="){
        result.innerText = eval(operaion.innerText);
        result.style.animation = "huge 0.5s ease-in-out"
        operaion.style.animation = "tiny 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        operaion.style.animationFillMode = "forwards";
    }

    else{
        operaion.textContent += buttonText;
        return;
    }
}