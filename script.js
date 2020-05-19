
  
  const light1 = document.querySelector("#light1");
  const light2 = document.querySelector("#light2");
  const body = document.querySelector("#body");
  const cake = document.querySelector("#cake");
  const wishText = document.querySelector(".wish_text");

const a1 = document.querySelector("#s1");
const a2 = document.querySelector("#s2");
const a3 = document.querySelector("#s3");

const star = document.querySelector("#star");
const mainbox = document.querySelector("#main");
const sWidth = window.innerWidth;
const sHeight = window.innerHeight;
const halfVW = (sWidth / 2) - 50;
const halfVH = sHeight / 1.8;
const starCount = 35;
const starArr = [];
const starColorArr = ["rgb(252,201,130)",
                        "rgb(139,94,59)",
                        "rgb(240,149,207)",
                        "rgb(120,61,190)",
                        "rgb(26,117,187)",
                        "rgb(1,173,67)",
                        "rgb(250,206,0)",
                        "rgb(249,147,29)",
                        "rgb(236,30,36)"
                    ];

function removeScreen(){
    document.querySelector(".screen").remove();
    a1.play();
    light1.classList.add("light-animate");
    light2.classList.add("light-animate");
    body.classList.add("bodyFlick");
    
    
    setInterval(randomize, 5000);
    setTimeout(()=> {
        a2.play();
        dropStars();
        
        setTimeout(cakeFn, 1500);
    }, 5000);
}

function cakeFn(){
    cake.style.opacity = "1";
    wishText.style.opacity = "1";
    a3.play();
}

function makeStars(noOfStars){

    for(var i = 1; i <= noOfStars; i++){
        let x = Math.abs(Math.random() * (sWidth - 100));
        let y = Math.abs(Math.random() * (sHeight - 80));
        let starSize = Math.floor(Math.random() * 6);
        let span = document.createElement("span");
        span.setAttribute("class",  "star");
        span.innerHTML = "&starf;";
        span.style.position = "absolute";
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.fontSize = `${starSize}rem`;    
        starArr.push(span);
    }
}

function printStars(itemsArr){
    itemsArr.forEach(item => {
        mainbox.appendChild(item);
    });
}

function uniqueStar(noOfUnqStr){
    let x = Math.abs(Math.floor(Math.random() * (sWidth - 100)));
    let y = Math.abs(Math.floor(Math.random() * (sHeight - 80)));
    // let starSize = Math.floor(Math.random() * 8);
    let starSize = Math.random() * (9 - 4) + 4;
    let colorIndex = Math.abs(Math.floor(Math.random() * (starColorArr.length)));
        let span = document.createElement("span");
        span.setAttribute("id",  "uniqueStar");
        span.innerHTML = "&starf;";
        // span.style.position = "absolute";
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.fontSize = `${starSize}rem`;
        span.style.color = starColorArr[colorIndex];
        span.style.textShadow = `0 0 20px ${starColorArr[colorIndex]}`;
        mainbox.appendChild(span);
}

const uniqueStarPrinter = setInterval( function(){
        let child = document.querySelector("#uniqueStar");
        if(child !== null){
            mainbox.removeChild(child);
        }
        uniqueStar();
        },
        5000 );

function circleGenerator(photo){
    let imgTag = document.createElement("img");
    let circleDiv = document.createElement("div");
    circleDiv.setAttribute("class", "circle__box");
    circleDiv.appendChild(imgTag);
    imgTag.setAttribute("src", `images/${photo}`);
    circleDiv.style.visibility = "hidden";
    mainbox.appendChild(circleDiv);
}


function randomize(){
    let circle = [...document.querySelectorAll(".circle__box")];
    circle.forEach(item => {
        // let pos_x = Math.floor(Math.random() * (halfVW - 100));
        let pos_x = Math.random() * (halfVW - (-halfVW)) + (-halfVW);
        let pos_y = Math.floor(Math.random() * halfVH);
        item.style.visibility = "visible";
        item.style.transform = `translate(${pos_x}px, ${pos_y}px)`;
    });
}

function printCircles(numOfCircle){
    for(i = 1; i<= numOfCircle; i++){
        circleGenerator(`${i}.jpg`);
    }
}

function dropStars(){
    let allStars = document.querySelectorAll(".star");
    allStars.forEach(star => {
        star.classList.add("dropStars");
        setTimeout( function(){
            // Math.random() * ( 1 + top - bottom )
            // Math.random() * (max - min) + min;
            let iw = Math.random() * (8 - 4) + 4;
            let pic = Math.floor(Math.random() * (4 - 1) + 1);
            let allStars = document.querySelectorAll(".star");
            star.innerHTML = `<img src=\"rose/${pic}.png\" >`;
            star.style.width = `${iw}rem`;
        }, 1000
        )
    });
}


makeStars(starCount);
printStars(starArr);
printCircles(30);


    
    
