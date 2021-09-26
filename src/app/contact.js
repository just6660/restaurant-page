import {createParagraph} from "./home"
const main = document.querySelector(".main");
function createContact(){
    const contact = document.createElement("div");
    contact.appendChild(createParagraph("hello"));
    return contact;
    
}
function loadContact(){
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;