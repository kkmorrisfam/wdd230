const baseURL = "https://kkmorrisfam.github.io/wdd230/";
const linksURL = "https://kkmorrisfam.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    
    console.log(data);
    
    displayLinks(data);
} 

// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {

function displayLinks(weeks) {
    const activities = document.querySelector(".activities");
    activities.innerHTML="";

    const h3 = document.createElement("h3");
    const ul = document.createElement("ul");
    

    weeks.lessons.forEach((week) => {        
        console.log(week.lesson);
        console.log(week.links);
        let li = document.createElement("li");
        
        li.innerHTML = `${week.lesson}: `;
        console.log(li);

        week.links.forEach((list) => {
            console.log(list.url);
            console.log(list.title);
            
            let a = document.createElement("a");
            
            a.setAttribute("href", list.url);
            a.innerHTML = `${list.title}`;   
            li.appendChild(a);            
            li.append(" | ");
        });

        ul.appendChild(li);        
    });
    h3.innerHTML = "Learning Activities";
    activities.appendChild(h3);
    activities.appendChild(ul);    
}

getLinks();
// displayLinks();

