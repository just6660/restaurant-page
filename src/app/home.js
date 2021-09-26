import tinapfpsrc from "../assets/tinapfp.jpg";
const main = document.querySelector(".main");

function createHome(){
    const home = document.createElement("div");

    const bio = document.createElement("div");
    bio.classList.add("bio", "d-flex");

    const biotext = document.createElement("div");
    biotext.style.width = "70%";
    biotext.appendChild(createParagraph("Hello, this is my biography"));
    biotext.appendChild(createParagraph("Hello this is the second paragraph"));

    const tinapfp = document.createElement("img");
    tinapfp.src = tinapfpsrc;
    tinapfp.alt = "Chef";
    tinapfp.classList.add("img-fluid");
    tinapfp.style.width = "30%";

    bio.appendChild(tinapfp);
    bio.appendChild(biotext);

    home.appendChild(bio);


    return home;
}

export function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}






function loadHome(){
    main.textContent = "";
    main.appendChild(createHome());
}
export default loadHome;
