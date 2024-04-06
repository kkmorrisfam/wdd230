const rentalJSON = "data/rentals.json";

async function jsonFetch() {
    try {
        const response = await fetch(rentalJSON);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayTable(data);
            displayCards(data);
        } else{
            throw(Error(await response.text()))
        }
    } catch (error) {
        console.log("caught error: " + error);
    }
}

function displayTable(data) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML ="";
    console.log(data.rentals);

    data.rentals.forEach((rental) => {
        let tr = document.createElement("tr");
        let type = document.createElement("td");
        let max = document.createElement("td");
        let reserve3hr = document.createElement("td");
        let reserveFull = document.createElement("td");
        let walk3hr = document.createElement("td");
        let walkFull = document.createElement("td");

        // console.log(rental.type);
        type.textContent = rental.type;
        max.textContent = rental.capacity;
        // console.log(rental.reservation[0].half_day);
        reserve3hr.textContent = `$${rental.reservation[0].half_day}`;
        // console.log(rental.walk_in[0].full_day);
        // console.log(rental.walk_in[0].half_day);
        reserveFull.textContent = `$${rental.reservation[0].full_day}`;
        walk3hr.textContent = `$${rental.walk_in[0].half_day}`;
        walkFull.textContent = `$${rental.walk_in[0].full_day}`;


        tr.appendChild(type);
        tr.appendChild(max);
        tr.appendChild(reserve3hr);
        tr.appendChild(reserveFull);
        tr.appendChild(walk3hr);
        tr.appendChild(walkFull);

        tbody.appendChild(tr);

    });
}//end displayTable()

function displayCards(data) {
    const cardContainer = document.getElementById('rent-card-fill');
    cardContainer.innerHTML="";

    data.rentals.forEach(rental=> {
        let divCard = document.createElement("div");
        divCard.setAttribute("class", "rent-card");
        let img = document.createElement("img");
        img.src = rental.image;
        img.setAttribute("class", "rent-img");
        img.setAttribute("alt", rental.type);
        img.setAttribute("load", "lazy");
        let divContent = document.createElement("div");
        divContent.setAttribute("class", "img-desc");
        let h3 = document.createElement("h3");
        h3.textContent = rental.description;
        let p1 = document.createElement("p");
        p1.textContent = `${rental.capacity} person`;
        let p2 = document.createElement("p");
        p2.textContent = `Reserve for half-day ($${rental.reservation[0].half_day}) or full day ($${rental.reservation[0].full_day})`;

        divContent.appendChild(h3);
        divContent.appendChild(p1);
        divContent.appendChild(p2);
        divCard.appendChild(img);
        divCard.appendChild(divContent);
        cardContainer.appendChild(divCard);
    });

}//end displayCards()


jsonFetch();