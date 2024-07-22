let timer = 30;
let score = 0;
let randomhitNumber = 0;

let makeBubble = ()=>{
    let bubblesGalery = "";
    for(i = 0;i<160;i++){
        let randomNumber = Math.floor(Math.random()*10);
        bubblesGalery += `<div class="bubble">${randomNumber}</div>`
    }
    document.querySelector(".panelBottom").innerHTML = bubblesGalery;
}

let timerFunction = ()=>{
    let timerint = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector(".printtimer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".panelBottom").innerHTML = `<h1>Score: ${score} Game Over</h1>`
        }
    }, 1000);
}
let hitFunction = ()=> {
    randomhitNumber = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = randomhitNumber;
}

let scoreFunction = ()=>{
    score += 10;
    document.querySelector(".score").textContent = score;
}

let startThegame = ()=>{
    let panelBottom = document.querySelector(".panelBottom");
    panelBottom.addEventListener('click',(bubblesDetail)=>{
        let clicked = Number(bubblesDetail.target.textContent);
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
