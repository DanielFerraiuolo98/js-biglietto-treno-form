"use strict"
const  firstNameField = document.getElementById("Name-field");
const lastNameField = document.getElementById("Lastname-field");
const kmField = document.getElementById("km-field");
const etaField = document.getElementById("Eta-field");
const button = document.querySelector("button");


const firstName = document.getElementById("Name");
const lastName = document.getElementById("Lastname");
const km = document.getElementById("km");
const eta = document.getElementById("Eta");

button.addEventListener("click", function (event){
    event.preventDefault();

    const card = document.createElement("card");
    card.innerHTML = "resoconto biglietto";
    card.classList.add("card");

    const firstName = document.createElement("firstName");
    firstName.innerHTML = firstNameField.value;
    firstName.classList.add("firstName");
    card.appendChild(firstName);

    const lastName = document.createElement("lastName");
    lastName.innerHTML = lastNameField.value;
    lastName.classList.add("lastName");
    card.appendChild(lastName);

    const km = document.createElement("km");
    km.innerHTML = kmField.value;
    km.classList.add("km");
    card.appendChild(km);

    const eta = document.createElement("eta");
    eta.innerHTML = etaField.value;
    eta.classList.add("eta");
    card.appendChild(eta);

    const prezzoBase = kmField.value * 0.21;
    let sconto = 0;
    const prezzoFinale = prezzoBase * (1 - sconto);

    if (eta < 18) {
        sconto = 0.20;
    } 
    else if (eta > 65) {
        sconto = 0.40;
    }
    
   
    const result = document.createElement("result");
    result.innerHTML = prezzoFinale;
    result.classList.add("result");
    card.appendChild(result);
    document.body.appendChild(card);
})
   


