'use strict'

let checkAns = document.querySelector(".answer");


//Name of the locations = Sentinel Prime, Urdak, Taras Nabad, Nekravol, Fortress of Doom, Earth

let chooseImg = ["https://gameranx.com/wp-content/uploads/2020/03/DOOM-Eternal_20200321223548.jpg","https://gameranx.com/wp-content/uploads/2020/03/DOOM-Eternal_20200323170434.jpg","https://gameranx.com/wp-content/uploads/2020/03/DOOM-Eternal_20200322180804_1.jpg","https://assetsio.reedpopcdn.com/doom-eternal-nekravol-collectables.jpg","https://cdn.mos.cms.futurecdn.net/ddxCiYMRVpMvqU7cR7m8s8.jpg","https://gameranx.com/wp-content/uploads/2020/03/DOOMEternal2.jpg"];


//Generate function, clear the answer textbox and clear the displayed result

let change = function(){
    let randomsent = Math.floor(Math.random()*chooseImg.length);
    document.querySelector('.images').src=chooseImg[randomsent]; 
    document.querySelector('.answer').value="";
    document.querySelector(".correct").textContent="";
}


//Storing images src in variable for checking conditions

const img1 = "https://gameranx.com/wp-content/uploads/2020/03/DOOM-Eternal_20200321223548.jpg";
const img2 = "https://gameranx.com/wp-content/uploads/2020/03/DOOM-Eternal_20200323170434.jpg";
const img3 = "https://gameranx.com/wp-content/uploads/2020/03/DOOM-Eternal_20200322180804_1.jpg";
const img4 = "https://assetsio.reedpopcdn.com/doom-eternal-nekravol-collectables.jpg";
const img5 = "https://cdn.mos.cms.futurecdn.net/ddxCiYMRVpMvqU7cR7m8s8.jpg";
const img6 = "https://gameranx.com/wp-content/uploads/2020/03/DOOMEternal2.jpg";


//Checking the text conditions

function condition1(){
    const textBoxAnswer = document.querySelector('.answer').value.toLowerCase();
    const textBoxAnswer1 = (textBoxAnswer === 'sentinel prime')
    return textBoxAnswer1;
}

function condition2(){
    const textBoxAnswer = document.querySelector('.answer').value.toLowerCase();
    const textBoxAnswer2 = (textBoxAnswer === 'urdak')
    return textBoxAnswer2;
}

function condition3(){
    const textBoxAnswer = document.querySelector('.answer').value.toLowerCase();
    const textBoxAnswer3 = (textBoxAnswer === 'taras nabad')
    return textBoxAnswer3;
}

function condition4(){
    const textBoxAnswer = document.querySelector('.answer').value.toLowerCase();
    const textBoxAnswer4 = (textBoxAnswer === 'nekravol')
    return textBoxAnswer4;
}

function condition5(){
    const textBoxAnswer = document.querySelector('.answer').value.toLowerCase();
    const textBoxAnswer5 = (textBoxAnswer === 'fortress of doom')
    return textBoxAnswer5;
}

function condition6(){
    const textBoxAnswer = document.querySelector('.answer').value.toLowerCase();
    const textBoxAnswer6 = (textBoxAnswer === 'earth')
    return textBoxAnswer6;
}


//Checking if the entered location is correct

function checkLocation() {
    const imgSrc = document.querySelector('#images').src;
    const conditions = [
        { condition: condition1, img: img1 },
        { condition: condition2, img: img2 },
        { condition: condition3, img: img3 },
        { condition: condition4, img: img4 },
        { condition: condition5, img: img5 },
        { condition: condition6, img: img6 },
    ];

    let isCorrect = false;

    for (let i = 0; i < conditions.length; i++) {
        if (conditions[i].condition() && imgSrc === conditions[i].img) {
            isCorrect = true;
            break;
        }
    }

    document.querySelector(".correct").textContent = isCorrect ? "Correct answer!" : "Wrong answer! Try again!";
}

//Key press
document.querySelector('.answer').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  
        checkLocation();
        let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }
});


