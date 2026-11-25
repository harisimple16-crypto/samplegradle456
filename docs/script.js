
function addEvent() {
    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let location = document.getElementById("eventLocation").value;

    if (name === "" || date === "" || location === "") {
        alert("Please fill all fields!");
        return;
    }

    let list = document.getElementById("eventList");

    let item = document.createElement("li");

    item.innerHTML = name + " - " + date + " - " + location;

    list.appendChild(item);

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventLocation").value = "";

    alert("Event added successfully!");
}
