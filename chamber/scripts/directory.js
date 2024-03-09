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
    console.log("inside showList()")
}

function showGrid() {
    container.classList.add("grid");
    container.classList.remove("list");
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
        let name = document.createElement("p");
        name.classList.add("business-name");
        name.innerHTML = `${member.name}`;
        let address = document.createElement("p");
        address.classList.add("address");
        address.innerHTML = `${member.address}`;
        let phone = document.createElement("p");
        phone.classList.add("phone");
        phone.innerHTML = `${member.phone}`;
        let web = document.createElement("p");
        web.classList.add("web");
        web.innerHTML = `${member.website}`;
        let mlevel = document.createElement("p");
        mlevel.classList.add("m-level");
        mlevel.innerHTML = `<span class="emphasis">Membership Level:</span>  ${member.mlevel}`;
        let category = document.createElement("p");
        category.classList.add("category");
        category.innerHTML = `<span class="emphasis">Category:</span>  ${member.category}`
        
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
        card.appendChild(mlevel);
        card.appendChild(category);

        
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

