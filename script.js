let score = 10;
let chances = 0;
let userGuessInput = document.getElementById("userGuess");
let ok = document.getElementById("ok")

let number = Math.floor((Math.random)()*100 +1);

function check(){
    const userGuess = parseInt(userGuessInput.value);
    const scorePlayer = score - chances;

    if (userGuess == number){
        ok.textContent = "Congratulations 🤩 You Did it 🏆. Your Score is "+ scorePlayer + " Out of 10, Keep it up 👍, Try Your Highest";
    } else if (userGuess > number) {
        ok.textContent = "Too High, Try Again 😮";
        chances++;
    } else if(userGuess < number) {
        ok.textContent= "Too Low, Try Again 👎" ;
        chances++;
    } else {
        ok.textContent= "Invalid Value" ;
    }
    userGuessInput.value = "";

}

        
