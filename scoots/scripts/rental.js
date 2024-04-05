const rentalJSON = "data/rentals.json";

async function jsonFetch() {
    try {
        const response = await fetch(rentalJSON);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayTable(data);
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


}

jsonFetch();