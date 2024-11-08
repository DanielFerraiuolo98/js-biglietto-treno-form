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

    firstName.innerText = firstNameField.value
    lastName.innerText = lastNameField.value
    km.innerText = kmField.value
    eta.innerText = etaField.value
})
   
  

    

