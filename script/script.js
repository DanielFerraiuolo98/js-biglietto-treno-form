"use strict"
const  firstNameField = document.getElementById("Name-field");
const lastNameField = document.getElementById("Lastname-field");
const kmField = document.getElementById("km-field");
const etaField = document.getElementById("Eta-field");
const result = document.getElementById("result");
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
    
    const priceKm = 0.21;
    const lunghezzaKm = parseInt(kmField.value);
    const price = priceKm * lunghezzaKm;

    const junior = price * 20 / 100;
    const senior = price * 40 / 100;
    
    if(junior <= etaField.value){
        result.innerText = (price-junior).toFixed(2);
    }
    else if(senior <= etaField.value){
        result.innerText = (price-senior).toFixed(2);
        
    }
    else{
        result.innerText = price.toFixed(2);
    } 

})
   
  

    

