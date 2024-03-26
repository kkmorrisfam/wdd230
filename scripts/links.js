const baseURL = "https://kkmorrisfam.github.io/wdd230/";
const linksURL = "https://kkmorrisfam.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log("inside getLinks");   
    displayLinks(data);
} 

function displayLinks(weeks) {
    const activities = document.querySelector(".activities");
    activities.innerHTML="";
    console.log("inside displayLinks");
    const h3 = document.createElement("h3");
    const ul = document.createElement("ul");
    

    weeks.lessons.forEach((week) => {               
        let li = document.createElement("li");
        
        li.innerHTML = `${week.lesson}: `;
        
        week.links.forEach((list) => {
            
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
    console.log("end of displayLinks");
}

getLinks();


