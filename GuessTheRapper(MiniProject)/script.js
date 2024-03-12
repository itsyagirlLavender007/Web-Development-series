'use strict';

const subbtn = document.querySelector('.subtn');
const scoreDisplay = document.querySelector('.score');
const tryAgain = document.querySelector('.again');


//The images 
let myPix = ["https://yt3.ggpht.com/a/AATXAJwSqnG6Sgtjbg2RhxW6iA8h_T_7y0ZneuwvEw=s900-c-k-c0xffffffff-no-rj-mo","https://static.toiimg.com/photo/78036900.cms?imgsize=369483","https://ruinmyweek.com/wp-content/uploads/2020/04/random-4-1-20-4.jpg"];


//Generating random images

let choosePic = function(){
    // console.log("hey");
    let randomNum = Math.floor(Math.random()*myPix.length);
    document.querySelector('.myPicture').src=myPix[randomNum];
    reset();
}

const displayAnswer = function(answer){
    document.querySelector('.answer').textContent=answer;
}

const reset = function(){
    scoreDisplay.textContent = 0 ;
    document.querySelector('.textBox').value = "";
    displayAnswer("");
}


tryAgain.addEventListener('click',reset);

const imgSrc1 = 'https://yt3.ggpht.com/a/AATXAJwSqnG6Sgtjbg2RhxW6iA8h_T_7y0ZneuwvEw=s900-c-k-c0xffffffff-no-rj-mo';

const imgSrc2 = 'https://static.toiimg.com/photo/78036900.cms?imgsize=369483';

const imgSrc3 = 'https://ruinmyweek.com/wp-content/uploads/2020/04/random-4-1-20-4.jpg';

const textBoxAnswerCond1 = function(){
    const textBoxAnswer = document.querySelector('.textBox').value;
    const textBoxAnswer1 = (textBoxAnswer === 'krsna' || textBoxAnswer === 'Krsna' || textBoxAnswer === 'kr$na' || textBoxAnswer === 'Kr$na')
    return textBoxAnswer1;
}

const textBoxAnswerCond2 = function(){
    const textBoxAnswer = document.querySelector('.textBox').value;
    const textBoxAnswer2 = (textBoxAnswer === 'raftaar' || textBoxAnswer === 'Raftaar')
    return textBoxAnswer2;
}

const textBoxAnswerCond3 = function(){
    const textBoxAnswer = document.querySelector('.textBox').value;
    const textBoxAnswer3 = (textBoxAnswer === 'goat' || textBoxAnswer === 'Goat')
    return textBoxAnswer3;
}


//Submit button and check conditions
const press = function(){
    const imgSrc = document.querySelector('#imgname').src;
    // console.log(imgSrc);
    // const textBoxAnswer = document.querySelector('.textBox').value;

    //If it's Krsna
    if(textBoxAnswerCond1() && imgSrc === imgSrc1){
    displayAnswer("Correct! It is Krsna");
    scoreDisplay.textContent = 20;
    }

    //If it's Raftaar
    else if(textBoxAnswerCond2() && imgSrc === imgSrc2){
    displayAnswer("Raftaar it is!");
    scoreDisplay.textContent = 20;
    }

    //If it's Goat
    else if(textBoxAnswerCond3() && imgSrc === imgSrc3){
    displayAnswer("Goat it is!");
    scoreDisplay.textContent = 20;
    }

    //If the answer is answer
    else{
    displayAnswer("Wrong answer! Try Again! ");
    scoreDisplay.textContent = 0;
    }
}

subbtn.addEventListener('click',press);