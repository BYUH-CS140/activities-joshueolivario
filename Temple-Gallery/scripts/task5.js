const date = new Date();
let dayOfTheWeek = date.getDay();
let message1;


if (dayOfTheWeek > 0 && dayOfTheWeek < 6) {
    message1 = "Hang in there!";
}
else {
    message1 = "Wohoo! It is the weekend!"
}

let message2;

switch (dayOfTheWeek) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

document.querySelector("#message1").textContent = message1;

document.querySelector("#message2").textContent = day;

let templeList = [];

function output(temples) {
    templeList = temples;
    let div = document.getElementById("temples");

    temples.forEach(temple => {
        let article = document.createElement("article");

        let h3 = document.createElement ("h3");
        h3.innerHTML = temple.templeName;

        let templeLocation = document.createElement("h4");
        templeLocation.innerHTML = temple.location;

        let templeDedication = document.createElement("h4");
        templeDedication.innerHTML = temple.dedicated;

        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl)

        article.appendChild(h3);
        article.appendChild(templeLocation);
        article.appendChild(templeDedication);
        article.appendChild(image);
        
        div.appendChild(article);

    });
}

async function getTemples() {
    let response = await fetch (
        "https://byui-cse.github.io/cse121b-course/week05/temples.json"
    );
    let templeList = await response.json();
    output(templeList);
    console.log(response)
}
getTemples(templeList);

function reset() {
    const clear = document.getElementById("temples");
    clear.innerHTML = "";
}

function sortBy (e) {
    reset();
    let sort = document.getElementById("sortBy");

    if (e.target.value === "templeNameAscending") {
        let sorted = templeList.sort(function(a,b) {return a.templeName>b. templeName ? 1 : -1});

        return output(sorted);
    }
    else if (e.target.value === "templeNameDescending") {
        let sorted = templeList.sort(function(a,b) {return b.templeName>a. templeName ? 1 : -1 });

        return output(sorted);
    };
}

document.getElementById("sortBy").addEventListener("change", sortBy);
