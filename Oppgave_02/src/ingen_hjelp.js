//import './styles.css';
import { users } from './util.js';

// TODO: Hent HTML #id med getElementById
const ul = document.getElementById("users"); 
const nameInput = document.getElementById("name"); 

const ageInput = document.getElementById("age"); 
const filterBtn = document.getElementById("filter"); 
const searchBtn = document.getElementById("search"); 
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const listOfUsers = () => {
    users.forEach((item) => ul.innerHTML += `<li>${item.name} with age ${item.age}</li>` )
}
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const searchName = (nameInputArg) => {
        ul.innerHTML = ""; 
        users.filter((item) => {
            if(item.name.toLowerCase() === nameInputArg.value.toLowerCase() || nameInputArg.value === "" ) {
                ul.innerHTML += `<li>${item.name} with age ${item.age}</li>`
            }
        });   
}

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const filterAge = (ageInputArg) => {
        ul.innerHTML = ""; 
        users.filter((item) => {
            if (item.age >= Number(ageInputArg.value)) {
                ul.innerHTML += `<li>${item.name} with age ${item.age}</li>`
            }
    } ); 
}
    
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
nameInput.addEventListener("keyup", (event) => {
    console.log("listening to keypress"); 
    searchName(nameInput); 
}  ); 
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener('click', (event) => {
    filterAge(ageInput); 
    } );
 
searchName(nameInput); 
listOfUsers();