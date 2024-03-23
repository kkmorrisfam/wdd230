//there are two different functions here, because I misunderstood the directions initially 
//to select one business to spotlight from two to three business in another json file.
//I decided to leave the first in place and add the second one which lists three business
//randomly chosen from the members.json file.

const urlSpotlight = "data/spotlight.json";  //json file for single spotlight
const urlTripleSpot = "data/members.json";  //json file for triple spotlight cards
const spotlightSection = document.querySelector(".spotlight");
const tripleSpotSection = document.querySelector(".triple-spotlight");

//retrieve single business spotlight
async function jsonSpotlightFetch() {
    try{
        const response = await fetch(urlSpotlight);
        if (response.ok) {
            const data = await response.json();
        
            displaySpotlight(data);
        } else {
            throw(Error(await response.text()))
        }     
    } catch (error) {
        console.log("caught error jsonSpotlightFetch():  " + error);
    }
}


//retrieve spotlights for cards
async function jsonSpotlightCardsFetch() {
    try{
        const response = await fetch(urlTripleSpot);
        if (response.ok) {
            const data = await response.json();
            
            buildTripleSpot(data);
        } else {
            throw(Error(await response.text()))
        }     
    } catch (error) {
        console.log("caught error jsonSpotlightCardsFetch():  " + error);
    }
}

function displaySpotlight(data) {
    spotlightSection.innerHTML = "";
    
    let length = data.spotlight.length;    

    //get random index in json data array; get count?
    let randomIndex = getRandomNumber(0, length);
   
    //build html for chosen index
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
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
    
    h3.textContent= "Local Businesses Spotlight";
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

    spotlightSection.appendChild(h3);
    spotlightSection.appendChild(logo);    
    spotlightSection.appendChild(img);
            
    spotlightSection.appendChild(p);
    spotlightSection.appendChild(divParent);

}

function buildTripleSpot(data) {

    tripleSpotSection.innerHTML="";
    
    let filteredMembers = data.members.filter(member => {
        return (member.membershipLevel=="Gold") || (member.membershipLevel=="Silver");
    });

    // Code help found on Stack Overflow    
     // Shuffle array
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());

    // Get sub-array of first 3 elements after shuffled
    let selectedMembers = shuffled.slice(0, 3);
    
    selectedMembers.forEach((member)=>{
        
        let card = document.createElement("section");        
        card.classList.add("card");
        card.classList.add("business");
        
        let img = document.createElement("img");
        img.classList.add("logo");
        img.src = member.image;
        
        img.setAttribute("alt", `Logo for ${member.name}.`)
        img.setAttribute("width", 150);
        img.setAttribute("height", 100);

        let hr = document.createElement("hr");
        
        let div = document.createElement("div");
        

        let name = document.createElement("p");
        name.classList.add("business-name");
        name.innerHTML = `${member.name}`;
        let address = document.createElement("p");
        address.classList.add("address");
        address.innerHTML = `${member.address1}<br>${member.address2}`;
        let phone = document.createElement("p");
        phone.classList.add("phone");
        phone.innerHTML = `${member.phone}`;
        
        let web = document.createElement("a");
        web.href = member.website;
        web.target = "_blank";

        web.textContent = "Visit Website";

        let mlevel = document.createElement("p");
        mlevel.classList.add("m-level");
        mlevel.innerHTML = `<hr><span class="emphasis">Membership Level:</span><br>${member.membershipLevel}`;
        let category = document.createElement("p");
        category.classList.add("category");

        category.innerHTML = `<span class="emphasis">${member.category}</span>`;

        card.appendChild(img);
        card.appendChild(hr);
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(web);
        div.appendChild(mlevel);
        div.appendChild(category);
        card.appendChild(div);
        
        tripleSpotSection.appendChild(card);
    });
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// function filterMembers(data) {
//     return data.members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
// }

jsonSpotlightFetch();

jsonSpotlightCardsFetch();