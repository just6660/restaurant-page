import loadHome from "./home"
import loadMenu from "./menu"
import loadContact from "./contact"
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

const main = document.querySelector(".main");

function checkButtons(){
    homeBtn.addEventListener("click",(e)=>{
        loadHome();
    })
    menuBtn.addEventListener("click",(e)=>{
        loadMenu();
    })
    contactBtn.addEventListener("click",(e)=>{
        loadContact();
    })
    

};






function initializeWebsite(){
    checkButtons();
};
export default initializeWebsite;
