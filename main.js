//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
hideall();


// /*find references to all the buttons and ball */
// const leftBtn = document.querySelector("#leftBtn");
// const rightBtn = document.querySelector("#rightBtn");
// const upBtn = document.querySelector("#upBtn");
// const downBtn = document.querySelector("#downBtn");
// const resetBtn = document.querySelector("#resetBtn");
// const ball = document.querySelector("#ball");
// var ballX = ballY = 0; //assign initial position of ball
// function ResetPos() {
// ballX=ballY=0; //reset to zero
// ball.style.left = ballX+"px"; //set left property to ball x variable
// ball.style.top = ballY+"px"; //set top property to ball x variable
// ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
// }
// function MovePos(leftInc, topInc) {
// ballX =ballX+ leftInc;
// ballY =ballY+ topInc;
// ball.style.left = ballX+"px"; //set left css property to ball x variable
// ball.style.top = ballY+"px"; //set top css property to ball y variable
// ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
// }
// function MoveLeft(){
// ballX =ballX-10; //decrement by 10
// ballY =ballY+0; //no change
// ball.style.left = ballX+"px"; //set left css property to ball x variable
// ball.style.top = ballY+"px"; //set top css property to ball y variable
// ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
// }
// //eventlistener to activate MoveLeft (named callback function)
// leftBtn.addEventListener("click", MoveLeft); //no brackets after MoveLeft
// //eventListener to anonymous callback function (other way)
// rightBtn.addEventListener("click", function () {
// MovePos(10, 0);
// });
// upBtn.addEventListener("click", function () {
// MovePos(0, -10);
// });
// downBtn.addEventListener("click", function () {
// MovePos(0, 10);
// });
// resetBtn.addEventListener("click", ResetPos);

// document.addEventListener('keydown', function (kbEvt) {
// //kbEvt: an event object passed to callback function
// console.log(kbEvt); //see what is returned
// if (kbEvt.code === "ArrowRight"){
// MovePos(10,0);
// }
// if (kbEvt.code === "ArrowLeft"){
// MoveLeft();
// }
// if (kbEvt.code === "ArrowDown"){
// MovePos(0, 10);
// }
// if (kbEvt.code === "ArrowUp"){
// MovePos(0, -10);
// }
// //Better option: use switch case instead
// });

setInterval(function () {
    console.log("this will log every 1 sec");
    console.log("help!");
}, 1000);
//Example 12d - save interval id, so that can stop it later
let itvlId1 = setInterval(function () {
    console.log("interval with id. 1.5 sec");
}, 1500);

const stopBtn = document.querySelector("#stopBtn");
stopBtn.addEventListener("click", function () {
    clearInterval(itvId1); //stop running the interval
})
//Example 12e - stop the intervalId after 5 secs
setTimeout(function () {
    console.log("stop itvId1");
    clearInterval(itvId1); //stop running the interval.
}, 5000);

const grapeId = document.getElementById("grapeId");
function GetRandom(min, max) {
    //this will select a number between min and max
    return Math.round(Math.random() * (max - min)) + min;
}
function MoveGrape() {
    grapeId.style.left = GetRandom(0, 500) + "px";
    grapeId.style.top = GetRandom(0, 500) + "px";
}
var moveGrapeItvId = setInterval(MoveGrape, 1000);
const scoreBox = document.getElementById("scoreBox");
var score = 0; //to track how many clicks
function grapeCatch() {
    //increases score after clickingx
    score++;
    //update html scorebox
    scoreBox.innerHTML = "Score: " + score;
}
//link durian to mouseclick to graapeCatch function
grapeId.addEventListener("click", grapeCatch);


document.addEventListener("keydown", function (evt) {
    console.log(evt);
    if (evt.code == "KeyT") {
        grapeId.classList.add("shrink");
    }
    if (evt.code == "KeyU") {
        grapeId.classList.remove("shrink");
    }
});

