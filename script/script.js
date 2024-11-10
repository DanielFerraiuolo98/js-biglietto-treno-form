"use strict";
const firstNameField = document.getElementById("Name-field");
const lastNameField = document.getElementById("Lastname-field");
const kmField = document.getElementById("km-field");
const etaField = document.getElementById("Eta-field");
const button = document.querySelector("button");

button.addEventListener("click", function (event) {
    event.preventDefault();

    // Crea il contenitore del biglietto
    const card = document.createElement("div");
    card.classList.add("card");

    // Crea i dettagli del biglietto
    const firstNameCard = document.createElement("p");
    firstNameCard.classList.add("firstName");
    firstNameCard.innerHTML = firstNameField.value;
    card.appendChild(firstNameCard);

    const lastNameCard = document.createElement("p");
    lastNameCard.classList.add("lastName");
    lastNameCard.innerHTML = lastNameField.value;
    card.appendChild(lastNameCard);

    const kmValue = parseFloat(kmField.value);

    const kmCard = document.createElement("p");
    kmCard.classList.add("km");
    kmCard.innerHTML = kmValue;
    card.appendChild(kmCard);

    const etaValue = parseInt(etaField.value);

    const etaCard = document.createElement("p");
    etaCard.classList.add("eta");
    etaCard.innerHTML = etaValue;
    card.appendChild(etaCard);

    const prezzoBase = kmValue * 0.21;
    let sconto = 0;

    if (etaValue < 18) {
        sconto = 0.20;
    } else if (etaValue > 65) {
        sconto = 0.40;
    }

    const prezzoFinale = prezzoBase * (1 - sconto);

    const resultCard = document.createElement("p");
    resultCard.classList.add("result");
    resultCard.innerHTML = `Prezzo finale: €${prezzoFinale.toFixed(2)}`;
    card.appendChild(resultCard);

    document.body.appendChild(card);
});

   


