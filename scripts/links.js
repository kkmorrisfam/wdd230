const baseURL = "https://kkmorrisfam.github.io/wdd230/";
const linksURL = "https://kkmorrisfam.github.io/wdd230/scripts/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json;
    console.log(data);

} 

getLinks();