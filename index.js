
let letterButtons = document.querySelectorAll(".drum");
letterButtons.forEach((letterButton)=>{
    letterButton.addEventListener("click", () => {
        makeSound(letterButton.innerHTML);
        buttonAnimation(letterButton.innerHTML);
    });
});

document.addEventListener("keypress", (e)=>{
    makeSound(e.key);
    buttonAnimation(e.key);

})

function makeSound(key){
    var audioFile = "";
    switch(key)
        {
            case "w":
                audioFile = "crash.mp3";
                break;
            case "a":
                audioFile = "kick-bass.mp3";
                break;
            case "s":
                audioFile = "snare.mp3";
                break;
            case "d":
                audioFile = "tom-1.mp3";
                break;
            case "j":
                audioFile = "tom-2.mp3";
                break;
            case "k":
                audioFile = "tom-3.mp3";
                break;
            case "l":
                audioFile = "tom-4.mp3";
                break;
        };
        var audio = new Audio(`./sounds/${audioFile}`);
        audio.play();
}

function buttonAnimation(key){
    var activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    setTimeout(()=>{activeButton.classList.remove("pressed");}, 1000);
}
