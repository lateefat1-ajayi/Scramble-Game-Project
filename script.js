const gameWord = document.querySelector(".word");
const hints = document.querySelector(".hint span");
const time = document.querySelector(".countdown b");
const refreshBtn = document.querySelector(".refresh");
const confirmBtn = document.querySelector(".confirm-word");
const errorBtn = document.querySelector(".errorbttn");

const input = document.querySelector("input");
const error = document.querySelector(".errorMssg");
error.innerHTML = ""
let correctword;
let countdown;

let allaudio = new Audio("stranger-things-124008.mp3");
let winAudio = new Audio ("game-bonus-2-294436.mp3");
let loseAudio = new Audio ("wrong-100536.mp3");
const words = [
    {
        word: "euphoria",
        hint :"A state of intense happiness"
    } ,
 {
        word: "obtain",
        hint :"To come into possession of something"
    } ,
    {
        word: "compel",
        hint :"Force somebody to do something"
    } ,
    {
        word: "gravity",
        hint :"Force of attraction"
    } ,
    {
        word: "malice",
        hint :"The desire to see others suffer"
    } ,
    {
        word: "exertion",
        hint :"Use of physical or mental energy"
    } ,

    {
        word: "damp",
        hint :"A little wet"
    } ,
    {
        word: "cower",
        hint :"Crouch or curl up"
    } ,
    {
        word: "pacify",
        hint :"Ease the anger"
    } ,

    {
        word: "delay",
        hint :"making someone late or slow"
    } ,

    {
        word: "expand",
        hint :"To make something bigger"
    } ,

    {
        word: "approach",
        hint :"move towards"
    } ,

    {
        word: "match",
        hint :"to pick similar things"
    } ,

    {
        word: "abundance",
        hint :"plenty"
    } ,

    {
        word: "crew",
        hint :"members of a team"
    } ,

    {
        word: "reflection",
        hint :"mirror"
    } ,

    {
        word: "appoint",
        hint :"to assign a duty or responsibility"
    } ,

    {
        word: "toil",
        hint :"work hard"
    } ,
    {
        word: "lateefat",
        hint :"cohort six member"
    } 
]


allaudio.play();
function countdownTime(maxTime) {

    clearInterval(countdown);
    countdown = setInterval(() => {
        
        if(maxTime > 0){
            maxTime--; //time decrease
        return    time.innerText = maxTime
        }

        clearInterval(countdown);
        error.style.color = "brown"
        error.style.textAlign = "center"
        error.textContent = (`Time up! ${correctword.toUpperCase()} was the correct word`);
      scrambleGame()
    }, 1000)

}


function scrambleGame() {
    countdownTime(31)
    let randomObj = words[Math.floor(Math.random() * words.length )];
    //splitting each letter of the words
    let wordArray = randomObj.word.split("");

    for (let i = wordArray.length -1 ; i > 0; i--) {

        let J = Math.floor(Math.random() * (i + 1)); //getting random numbers

        //shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[J]] =
        [wordArray[J], wordArray[i]]
    }

    gameWord.innerText = wordArray.join(""); // ppassing shuffled word as word text

    hints .innerText = randomObj.hint //passing random object hint as hint text

    correctword = randomObj.word.toLowerCase(); // to check if the word is correct

    input.value= "";
    
}
scrambleGame()

function confirmWord() {
    let word = input.value.trim().toLowerCase();
    
    if(!word){
        error.innerHTML = "Enter a word!";
        error.style.textAlign = "center"
        error.style.color = "red"
    }else if(word !== correctword){
        loseAudio.play();
         error.innerHTML = "Incorrect word!";
         error.style.color = "red"
         error.style.textAlign = "center"
    }else if (word == correctword){
        winAudio.play();
        error.innerHTML = "Correct!🌟"
        error.style.textAlign = "center"
        error.style.color = "blue"
    } 
    scrambleGame()

}

refreshBtn.addEventListener("click", scrambleGame); //changes the game

confirmBtn.addEventListener("click", confirmWord); // to check if its correct

errorBtn.addEventListener("click", function () {
    error.textContent = ""
}) //to remove the error message