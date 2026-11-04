//ENTRANCE ANIMAITON

//variables
var headerText = "Cameron Abshear's Portfolio";
var typeText = " ";
var header = document.getElementById("headerText");
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var animatedElement = document.querySelector(".restOfIt");

//async function for the typerwriter effect(async so that it can have the pause before continuing the cycle)
async function typeTitleEffect(){
    for(i = 0; i <= headerText.length; i ++){
        typeText = headerText.slice(0, i);
        console.log(typeText);
        header.innerHTML = typeText + "<span id='blinkCursor'>|</span>";
        await sleep(225);
    }
}

//function to delay the start of the entrance animation for two seconds
function animationFunction(){
    setTimeout(() => {
        animatedElement.classList.add("bodyAnimation");
    }, 2000);
}

//EMAIL VALIDATION

document.getElementById("contactForm").addEventListener("submit", function (event){
    //constants to vaildate that each field is filled out
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;
    //email pattern checks for all the symbols that would be needed for an email address such as the @ and . and the text that would come before, between, and after
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //use this variable to display messages if fields are filled out or thank you message
    const valMsg = document.getElementById("validateMsg");

    //checks if all the fields have been filled out properly
    if(!name || !message){
        event.preventDefault();
        valMsg.innerHTML = "<p>*Please make sure you have filled out all the fields</p>";
    } else if(!emailPattern.test(email)){
        event.preventDefault();
        valMsg.innerHTML = "<p>*Please enter a valid email</p>";
    } else{
        //would have a personal thank you for submitting window pop up with this option if I was willing to upgrade my formspree account. doing it this way would also make it no longer fully reload the page when it was submited, and I would clear the form fields
        valMsg.innerHTML = "";
    }
    const formData = {
        name : name,
        email: email,
        message: message,
    };
    //displays what the user wrote in the contact form
    console.log(JSON.stringify(formData));
})

//ON LOADS
onload = typeTitleEffect();
onload = animationFunction();