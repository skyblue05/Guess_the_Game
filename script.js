let score = 10;
let chances = 0;
let userGuessInput = document.getElementById("userGuess");
let ok = document.getElementById("ok")

let number = Math.floor((Math.random)()*10);

function check(){
    const userGuess = parseInt(userGuessInput.value);
    const scorePlayer = score - chances;

    if (userGuess == number){
        ok.textContent = "Congratulations 🤩 You Did it 🏆. Your Score is "+ scorePlayer + " Out of 10, Keep it up 👍 Try Your Highest";
    } else if (userGuess > number) {
        ok.textContent = "Too High, Try Again 😮";
        chances++;
    } else if(userGuess < number) {
        ok.textContent= "Too Low, Try Again 👎" ;
        chances++;
    } else {
        ok.textContent= "Invalid Value 💔" ;
    }
    userGuessInput.value = "";


}



//share button

// function shareSite() {
//     if (navigator.share) {
//         navigator.share({
//             title: document.title,
//             text: 'Check out this awesome site!',
//             url: window.location.href
//         })
//         .then(() => console.log('Shared successfully'))
//         .catch((error) => console.error('Error sharing:', error));
//     } else {
//         // Fallback for browsers that do not support Web Share API
//         alert('Web Share API is not supported in this browser. You can manually share the site URL.');
//     }
// }

        
