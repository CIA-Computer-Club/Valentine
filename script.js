const arr = ["Please just for once", "I really love you please", "Accept me please", "I'll be the best date of your life", "I'll buy you all the food and chocolate in the world", "Please marry me", "I'll be your sugardaddy/sugarmommy", "I'll do all your schoolwork", "We can Netflix & chill", "We can eat ramen together"]

function yes(){
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "See you on the 14th bbg <3";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/necohappy.gif";

    document.getElementById("yesButton").remove();
    
}

function not(){
    let msg = arr[(Math.floor(Math.random() * arr.length))]

    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    document.getElementsByClassName("image")[0].src = "images/burugun.png";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent = "ur not allowed to click this :3";
    document.getElementById("name").style.display = "none";
    noButton.textContent = msg;

}

function egg(){
    document.getElementById("container").remove();
    document.body.style.background = "images/pusok.webp";
}