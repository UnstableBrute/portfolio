//ENTRANCE ANIMAITON

//variables
var headerText = "Cameron Abshear's Portfolio";
var typeText = " ";
var header = document.getElementById("headerText");
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var animatedElement = document.querySelector(".restOfIt");
var form = document.getElementById("contactForm");
var modal = document.getElementById("thanksModal");

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

form.addEventListener("submit", async function (event){
    event.preventDefault();
    //constants to vaildate that each field is filled out
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;
    const formInputData = {
        name : name,
        email: email,
        message: message,
    };
    //email pattern checks for all the symbols that would be needed for an email address such as the @ and . and the text that would come before, between, and after
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //use this variable to display messages if fields are filled out or thank you message
    const valMsg = document.getElementById("validateMsg");
    //checks if all the fields have been filled out properly
    if(!name || !message || !email){
        valMsg.innerHTML = "<p>*Please make sure you have filled out all the fields</p>";
    } else if(!emailPattern.test(email)){
        valMsg.innerHTML = "<p>*Please enter a valid email</p>";
    } else{
        //constants for submitting the form to get around freeforms automatic thank you page
        const data = new FormData(form);
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {"Accept": "application/json"}
        });
        //displays what the user wrote in the contact form
        console.log(JSON.stringify(formInputData));
        if(response.ok){
            valMsg.innerHTML = "";
            //opens the thanks modal
            thanksModal();
        } else{
            valMsg.innerHTML = "<p>*It appears something went wrong when submitting your form, please try again</p>";
        }
    }
})

//SUBMITION MESSAGE

//when this funciton is called it has a little modal pop up that thanks the user for submitting a message to the contact form
function thanksModal(){
    modal.style.display = "block";
}

//closes the modal and clears the form when called
function closeThanksModal(){
    modal.style.display = "none";
    form.reset();
}

//ON LOADS
onload = typeTitleEffect();
onload = animationFunction();