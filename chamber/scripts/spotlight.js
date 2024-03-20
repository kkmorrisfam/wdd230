const urlSpotlight = "data/spotlight.json";
const spotlightSection = document.querySelector(".spotlight");
console.log("inside spotlight.js");

async function jsonSpotlightFetch() {
    try{
        const response = await fetch(urlSpotlight);
        if (response.ok) {
            const data = await response.json();
        
            console.log(data);
            
            displaySpotlight(data);
        } else {
            throw(Error(await response.text()))
        }     
    } catch (error) {
        console.log("caught error jsonSpotlightFetch():  " + error);
    }
}

function displaySpotlight(data) {
    spotlightSection.innerHTML = "";
    
    let length = data.spotlight.length;
    console.log(length);

    //get random index in json data array; get count?
    let randomIndex = getRandomNumber(0, length);
    console.log(randomIndex);
    // console.log(data.spotlight[0].synopsis);

    //build html for chosen index
    let img = document.createElement("img");
    // let h3 = document.createElement("h3");
    let logo = document.createElement("img");
    let p = document.createElement("p");
    let anchor = document.createElement("a");
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    
    img.src = data.spotlight[randomIndex].image;
    img.alt = data.spotlight[randomIndex].img_description;
    img.classList.add("spot-image");
    img.classList.add("images");
    img.setAttribute("loading", "lazy");
    

    logo.src = data.spotlight[randomIndex].business_logo;
    logo.alt = data.spotlight[randomIndex].business_name;
    logo.classList.add("logo");
    
    p.textContent = data.spotlight[randomIndex].synopsis;    
    anchor.setAttribute("href", data.spotlight[randomIndex].website);
    anchor.setAttribute("target", "_blank");
    anchor.innerHTML = "Visit Their Website";

    // creating a div inside of a div for formatting with flex
    divParent.classList.add("external-btn");
    divChild.classList.add("btn");
    divChild.appendChild(anchor);
    divParent.appendChild(divChild);

    spotlightSection.appendChild(img);
    spotlightSection.appendChild(logo);    
    
    spotlightSection.appendChild(p);
    spotlightSection.appendChild(divParent);

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

jsonSpotlightFetch();
