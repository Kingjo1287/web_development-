var random_1 = Math.floor(Math.random() * 6) + 1;
var random_2 = Math.floor(Math.random() * 6) + 1;


var image_1 = "images/dice" + random_1 + ".png"; 
var image_2 = "images/dice" + random_2 + ".png"; 

document.querySelectorAll("img")[0].setAttribute("src",image_1);
document.querySelectorAll("img")[1].setAttribute("src",image_2);


if(random_1 > random_2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(random_1 === random_2){
    document.querySelector("h1").innerHTML = "Tie";

}
else{
    document.querySelector("h1").innerHTML = "Player 2 won";
}