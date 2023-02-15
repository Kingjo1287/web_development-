
var totalButtons = document.querySelectorAll(".btn").length;

var currentaudio;

for(var i = 0; i < totalButtons; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){

        
        if (currentaudio) {
            currentaudio.pause();
        }

        var statement = this.id;
       
       
        
        var audio1 = new Audio("sounds/"+statement+".mp3");
        
        currentaudio = audio1;
        audio1.play();

    });
 
}
