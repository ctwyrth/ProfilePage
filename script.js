function myFunction() {
    var x = document.getElementById("navLinks");
    if (x.className === "nav-links") {
        x.className += " responsive";
    } else {
        x.className = "nav-links";
    }
}

function changeName() {
    let newName = prompt("Enter a new name to display:");

    document.querySelector("#profile-user-name").innerText = newName;
}

function removeRequest(element) {
    console.log(element)

    document.querySelector("#" + element).remove()
}

var requestCount = 3;
function changeRequestCount() {
    requestCount--;

    document.querySelector("#reqcount").innerText = requestCount;
}

var connectCount = 994;
function incrementConnections() {
    connectCount++;

    document.querySelector("#connectcount").innerText = connectCount;
}