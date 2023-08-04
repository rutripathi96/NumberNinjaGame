let input = document.querySelector("input");
let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");

let h1 = document.querySelector("h1");
let chances = 3;
let randomNumber = Math.floor(Math.random()*899)+100 ;
if(randomNumber%2==0){
    h3.innerText = " Hint :- The random number generated is even";
}
else{
    h3.innerText = "Hint :- The random number generated is odd";
}
function game(){
    if(input.value==randomNumber){
        h1.innerText = "Congratulations!!! You won";
        h2.remove();
        h3.remove();
        h4.remove();
        input.remove();
        btn.remove();
    }
    else{
        chances--;
        if(chances==0){
            h1.innerHTML = `Game Over <br>The answer was ${randomNumber}`;
            h2.remove();
            h3.remove();
            h4.remove();
            input.remove();
            btn.remove();
            
        }
        h2.innerText = `${chances} chances left`;
        if(input.value>randomNumber){
            h3.innerText = "New Hint :- Try entering a smaller number";
        }
        else{
            h3.innerText = "New Hint :- Try entering a larger number";
        }
    }
};
btn.addEventListener("click",game);


