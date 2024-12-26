let userscore=0;
let computerscore=0;
const or = document.querySelectorAll(".one");
let cmp=document.getElementById("cmpsc");
let usr=document.getElementById("usersc");
let min=document.getElementById("mop");
let max=document.getElementById("max");
let max1=document.getElementById("max1");
max.classList.add("copy");
max1.classList.add("copy");
let button1=document.getElementById("lala");


const game = () => {
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    let cool=choices[index];
    max1.innerText="computer chose" + " "+ cool;
    return choices[index];
} 
//draw
const draw=()=>{
    console.log("draw");
    min.innerText="Game was Draw! Play Again";
}
//user's condition 
//rock condition
 const rock=()=>{
userscore+=1;
usr.innerText=userscore;
}
//paper condition
 const paper=()=>{
    userscore+=1;
usr.innerText=userscore;
}
//scissors condition
const scis=()=>{
    userscore+=1;
usr.innerText=userscore;
}
//computers condition
//rock1
const rock1=()=>{
    computerscore+=1;
    cmp.innerText=computerscore;
}
//paper1
const paper1=()=>{
    computerscore+=1;
    cmp.innerText=computerscore;
}
//scis1
const scis1=()=>{
    computerscore+=1;
    cmp.innerText=computerscore;
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    max.innerText="You Chose"+ " " + userchoice;
    const compute=game();
    console.log("computer choose",compute);
    //draw condition
    
//user win condition
if(userchoice==="rock"&&compute==="scissors"){
    rock();
    console.log("u win");
    min.innerText="You Win!";

};
if(userchoice==="paper"&&compute==="rock"){
paper();
console.log("u win");
min.innerText="You Win!";


};
if(userchoice==="scissors"&&compute==="paper"){
scis();
console.log("u win");
min.innerText="You Win!";


};
//computer wins
if(compute==="rock"&&userchoice==="scissors"){
    rock1();
    console.log("you loss");
    min.innerText="You Lose!";

};
if(compute==="paper"&&userchoice==="rock"){
paper1();
console.log("you loss");
min.innerText="You Lose!";

};
if(compute==="scissors"&&userchoice==="paper"){
scis1();
console.log("you loss");
min.innerText="You Lose!";


};
if (compute===userchoice) { 
    draw(); 
    return;
}
}
or.forEach((one) => {
    one.addEventListener("click", () => {
        const userchoice=one.getAttribute("id");
        playgame(userchoice);
    });
});
button1.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    usr.innerText = userscore; // Update user score display
    cmp.innerText = computerscore; // Update computer score display
    min.innerText = "Play your move"; // Reset message
    max.innerText = ""; // Clear the user's choice display
    max1.innerText = ""; // Clear the computer's choice display
});
