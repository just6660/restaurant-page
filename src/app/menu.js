import {createParagraph} from "./home"
const main = document.querySelector(".main");
function createMenu(){
    const menu = document.createElement("div");
    menu.appendChild(createParagraph("sup"));
    return menu;
}
function loadMenu(){
    main.textContent = "";
    main.appendChild(createMenu());
}
export default loadMenu;