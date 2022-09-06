// Oppgave 1


const removeText = document.getElementById("remove"); 
const removeBtn = document.getElementById("remove-btn"); 

removeBtn.addEventListener('click', () => removeText.innerHTML = ""); 

// Oppgave 2

const changeText = document.getElementById("change"); 
const changeBtn = document.getElementById("change-btn"); 

changeBtn.addEventListener('click', () => changeText.innerHTML = "Jeg har endret teksten til noe annet");

// Oppgave 3
const input = document.getElementById("input"); 
const textInput = document.getElementById("input-text")

input.addEventListener("keyup", () => {
    textInput.innerHTML = input.value;
}); 

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const ul = document.getElementById("ul");
const writeListBtn = document.getElementById("write-list");

writeListBtn.addEventListener("click", () => {
    myList.forEach((item) => ul.innerHTML += `<li>${item}</li>`)
} ); 

// Oppgave 5
const div = document.getElementById("placeholder")
const select = document.getElementById("select"); 
const text = document.getElementById("text");  
const createBtn = document.getElementById("create"); 

createBtn.addEventListener("click", () => div.innerHTML += `<${select.value}>${text.value}</${select.value}>` ) 

// Oppgave 6

const list = document.getElementById("list"); 
const removeLi = document.getElementById("remove-li"); 

removeLi.addEventListener("click", () => {
    list.removeChild(list.firstElementChild);
});

// Oppgave 7
const inputName = document.getElementById("name");
const order = document.getElementById("order"); 
const disabledAttr = document.createAttribute("disabled")

inputName.addEventListener("keyup", () => {
    if(inputName.value.length >= 4) {
        order.setAttributeNode(disabledAttr); 
    } else {
        try {
            order.removeAttributeNode(disabledAttr);
        } catch(DOMException) {}
    }
}); 



// Oppgave 8
/* <h3>Oppgave 8</h3>
<ul class="children">
  <li>List one</li>
  <li>List two</li>
  <li>List three</li>
  <li>List four</li>
  <li>List five</li>
</ul>
<button id="color">
  Bruk denne til å gi li-elementer border med farge
</button> */

const ulChildren = document.getElementsByClassName("children"); 
const colorBtn = document.getElementById("color"); 

colorBtn.addEventListener("click", () => {
    console.log(ulChildren)
    console.log(ulChildren[0].children[0].style.border = "5px solid red")
    console.log(ulChildren)
})




