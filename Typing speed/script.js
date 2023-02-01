const Typingsentence = ["A quick brown fox jump over a lazy dog.",
    "Hello I am Jhon Wick I am here to Kill you.",
    "Javascript is a very popular language for web development.",
    "This world is full of love spread love and have love.",
    "A man without emotions is not a man but a robot.","Hello I am a front-end web developer.",
    "Hello this is my first class in programming fundamental lab.",
    "I have done my first hello world programe in C."];

const button = document.getElementById("btn");
const typingarea = document.getElementById("maintyping");
const h2 = document.getElementById("h2")
let StartTime, Endtime;

typingarea.disabled = true

let randomsen;

let wrongwords = 0;
playGame = () => {
    let randomsenctence = Math.floor(Math.random() * Typingsentence.length)
    randomsen = Typingsentence[randomsenctence];
    h2.innerText = randomsen
    let date = new Date();
    StartTime = date.getTime();
    button.innerText = "Done";
}
const correctwords = (usertyped, randsomtyped) => {
    usertyped = usertyped.trim();
    console.log(randsomtyped)
    console.log(usertyped)
    let correctcountwords = 0;
    for (let i = 0; i <= randsomtyped.length; i++) {
        if (usertyped[i] == ".") {
            correctcountwords++;
            break;
        }
        if (randsomtyped[i] == usertyped[i]) {
            correctcountwords++;
        }

    }
    console.log("correct words "+correctcountwords)
    let totallenght = randsomtyped.length
    console.log(totallenght)
    let percentage = (correctcountwords / totallenght) * 100;;

    // percentage *= 100;
    return percentage
}
endGame = () => {
    let date = new Date();
    Endtime = date.getTime();
    let totalTime = ((Endtime - StartTime) / 1000);
    let Typedwords = typingarea.value;
    let wordcount = wordcounter(Typedwords);
    let percentage = correctwords(Typedwords, randomsen);
    percentage = Math.floor(percentage)
    console.log("perccentage is " + percentage)
    let speed = Math.round((wordcount / totalTime) * 60)
    typingarea.value = " ";
    let finalmessage = `You typed ${speed} words per minute with accuracy of ${percentage}%`;
    h2.innerText = finalmessage;
}

const wordcounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

button.addEventListener("click", function () {
    if (this.innerText == 'Start') {
        typingarea.disabled = false
        playGame();
    }
    else if (this.innerText == "Done") {
        button.innerText = "Start"
        endGame();
    }
})

