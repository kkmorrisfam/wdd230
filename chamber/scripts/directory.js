// const url = "https://kkmorrisfam.github.io/wdd230/chamber/data/members.json";
const url = "data/members.json";

const container = document.querySelector(".directory");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

// const get = jsonFetch(url);
// console.log(get);
// buildHTML(get);
//showGrid();


gridBtn.addEventListener("click", ()=> {
    console.log("Inside gridBtn")
    showGrid();
});

listBtn.addEventListener("click", ()=>{
    console.log("Inside listBtn")
    showList();
});

function showList() {
    container.classList.add("list");
    container.classList.remove("grid");

    // Select all section elements with class "card" within the container
    let cardSections = container.querySelectorAll('.card');

    // Loop through each selected section and remove the "card" class
    cardSections.forEach((section) => {
        section.classList.remove('card');
    });


    console.log("inside showList()")
}

function showGrid() {
    container.classList.add("grid");
    container.classList.remove("list");
    
     // Select all section elements within the container
     let allSections = container.querySelectorAll('section');

     // Loop through each selected section and add the "card" class
     allSections.forEach((section) => {
         section.classList.add('card');
     });
    
    console.log("inside showGrid()")

}

function buildHTML(members) {
    console.log("inside buildHTML 1");        
    console.log(members);
    container.innerHTML="";

    members.forEach((member)=>{
        console.log(member.name);
        let card = document.createElement("section");        
        card.classList.add("card");
        card.classList.add("business");
        
        let img = document.createElement("img");
        img.classList.add("logo");
        img.src = member.image;
        img.alt = `Logo for ${member.name}.`
        let div = document.createElement("div");

        let name = document.createElement("p");
        name.classList.add("business-name");
        name.innerHTML = `${member.name}`;
        let address = document.createElement("p");
        address.classList.add("address");
        address.innerHTML = `${member.address}`;
        let phone = document.createElement("p");
        phone.classList.add("phone");
        phone.innerHTML = `${member.phone}`;

        let websiteName = member.website;
        let strippedUrl = websiteName.replace(/^https?:\/\//, '');
        console.log(strippedUrl);

        let web = document.createElement("a");
        web.href = member.website;
        web.target = "_blank";
        web.textContent = strippedUrl;

        let mlevel = document.createElement("p");
        mlevel.classList.add("m-level");
        mlevel.innerHTML = `<span class="emphasis">Membership Level:</span>  ${member.membershipLevel}`;
        let category = document.createElement("p");
        category.classList.add("category");
        category.innerHTML = `<span class="emphasis">Category:</span>  ${member.category}`
        
        card.appendChild(img);
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(web);
        div.appendChild(mlevel);
        div.appendChild(category);
        card.appendChild(div);
        
        container.appendChild(card);
    });
}

async function jsonFetch() {
    console.log('Fetching data...');
    const response = await fetch(url);
    console.log('Data fetched successfully.');
    console.log(response);
    const data = await response.json();
    console.log('JSON data:', data.members);
    console.log('jsonFetch function: ' + JSON.stringify(data.members) );
    // return data;
    buildHTML(data.members);
}

jsonFetch();

// const directory = document.getElementsByClassName("directory");
//     directory.innerHTML = ""; //clear hardcoded or other elements    
