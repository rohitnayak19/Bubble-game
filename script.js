var timer = 30;
var score = 0;
var randomhitNumber = 0;

var makeBubble = ()=>{
    var bubblesGalery = "";
    for(i = 0;i<160;i++){
        var randomNumber = Math.floor(Math.random()*10);
        bubblesGalery += `<div class="bubble">${randomNumber}</div>`
    }
    document.querySelector(".panelBottom").innerHTML = bubblesGalery;
}

var timerFunction = ()=>{
    var timerint = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector(".printtimer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".panelBottom").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}
var hitFunction = ()=> {
    randomhitNumber = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = randomhitNumber;
}

var scoreFunction = ()=>{
    score += 10;
    document.querySelector(".score").textContent = score;
}

var startThegame = ()=>{
    var panelBottom = document.querySelector(".panelBottom");
    panelBottom.addEventListener('click',(bubblesDetail)=>{
        var clicked = Number(bubblesDetail.target.textContent);
        if(clicked === randomhitNumber){
            makeBubble();
            hitFunction();
            scoreFunction();
        }
    })
}

//Startgamefunction
startThegame();
//makebubbles
makeBubble();
//timerfunctio
timerFunction();
//hitfunction
hitFunction();
