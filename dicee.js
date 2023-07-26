let counter1 = 0;
let counter2 = 0;
let played = 0;
function play(){ 
    //Attributes for Player 1
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage1 = "images/dice" + randomNumber1 +".png"

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomDiceImage1)

    //Attributes for Player 2
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage2 = "images/dice" + randomNumber2 +".png"

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomDiceImage2)

   
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Player 1 won ✌️";
        counter1++;
        played++;
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").textContent="Player 2 won ✌️";
        counter2++;
        played++;
    }else{
        document.querySelector("h1").textContent="Draw 🎌";
        played++;
    }
}

function reset(){
    counter1 = 0;
    counter2 = 0;
    played = 0  ;  
    document.querySelector("h1").textContent="Dice Game";
    alert("Stats Reset")
    let image = document.querySelectorAll("img")[1];
    image.setAttribute("src","images/dice6.png");
    image = document.querySelectorAll("img")[0];
    image.setAttribute("src","images/dice6.png");
}
function stats(){
    alert("Player1 wins: " + counter1 + "\nPlaye2 wins: " + counter2 + "\nDraws: " +(played-(counter1+counter2))+"\nTotal games: " + played)
}