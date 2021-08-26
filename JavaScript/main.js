"use strict";

let button = document.querySelectorAll(".faq-btn");

function showFaqAnswers() {
    let open = this.classList.toggle("isOpen"); //toggle the class isOpen and storages the state inside open
    let answerDiv = this.nextElementSibling; //storages the content of the button's sibling

    if(open){ //if the button has the class 'isOpen', adds to the sibling the class to make the answer visible
        answerDiv.classList.add("show-faq-answer");
    } else { // otherwise remove the class, hiding the answer
        answerDiv.classList.remove("show-faq-answer");
    }
}

button.forEach((element) => element.addEventListener("click", showFaqAnswers));
