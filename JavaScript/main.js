"use strict";

let button = document.querySelectorAll(".faq-btn");
let box = document.querySelector("#box");

function showFaqAnswers() {
    let open = this.classList.toggle("isOpen"); //toggle the class isOpen and storages the state inside open
    let answerDiv = this.nextElementSibling; //storages the content of the button's sibling

    if(open){ //if the button has the class 'isOpen', adds to the sibling the class to make the answer visible
        answerDiv.classList.add("show-faq-answer");
        this.setAttribute("aria-expanded", "true");
    } else { // otherwise remove the class, hiding the answer
        answerDiv.classList.remove("show-faq-answer");
        this.setAttribute("aria-expanded", "false");
    }
}

function boxEffect(){
    box.classList.toggle("box-hover");
}

button.forEach((element) => element.addEventListener("click", showFaqAnswers));
button.forEach((element) => element.addEventListener("mouseover", boxEffect));
button.forEach((element) => element.addEventListener("mouseout", boxEffect));
