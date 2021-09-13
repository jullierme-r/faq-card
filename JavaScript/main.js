"use strict";

let button = document.querySelectorAll(".faq-btn");
let box = document.querySelector("#box");

function openFaq() {
    //to ensure that only one item will remains open at the time, set all the items to the closed state
    button.forEach(e => {
        if(e.classList.contains("isOpen")){
            e.classList.remove("isOpen");
            e.setAttribute("aria-expanded", "false");
            e.nextElementSibling.classList.remove("show-faq-answer");
        }
    });
    
    this.classList.toggle("isOpen"); //the button the was suffered the action receive the class 'isOpen' to indicate that it will be displayed
    let answerDiv = this.nextElementSibling; //storages the content of the button's next sibling
    answerDiv.classList.toggle("show-faq-answer"); //gives to the button's sibling the class to display the content
    this.setAttribute("aria-expanded", "true"); //updates the aria-expanded of the clicked button
}

function boxEffect(){
    box.classList.toggle("box-hover");
}

button.forEach((e) => e.addEventListener("click", openFaq));
button.forEach((e) => e.addEventListener("mouseover", boxEffect));
button.forEach((e) => e.addEventListener("mouseout", boxEffect));



