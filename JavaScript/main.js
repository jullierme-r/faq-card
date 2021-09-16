"use strict";

let button = document.querySelectorAll(".faq-btn");
let box = document.querySelector("#box");

function closeOpenedFaq () {
    //to ensure that only one item will remains open at the time, set all the items to the closed state
    button.forEach(e => {
        if(e.classList.contains("isOpen")){
            e.classList.remove("isOpen");
            e.setAttribute("aria-expanded", "false");
            e.nextElementSibling.classList.remove("show-faq-answer");
        }
    });
}

function openFaq() {
    let answerDiv = this.nextElementSibling; //storages the content of the button's next sibling

    if(this.classList.contains("isOpen")){ //if the button is already open, removes all the classes that makes the content visible
        this.classList.toggle("isOpen");
        this.setAttribute("aria-expanded", "false");
        answerDiv.classList.toggle("show-faq-answer");
    } else {
        closeOpenedFaq(); 

        //updates aria-expanded and classes of the clicked button and its sibling to be displayed
        this.classList.toggle("isOpen");
        this.setAttribute("aria-expanded", "true");
        answerDiv.classList.toggle("show-faq-answer");
    }
}

function boxEffect(){
    box.classList.toggle("box-hover");
}

button.forEach((e) => e.addEventListener("click", openFaq));
button.forEach((e) => e.addEventListener("mouseover", boxEffect));
button.forEach((e) => e.addEventListener("mouseout", boxEffect));



