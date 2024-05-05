const eventList = document.querySelector("ul");
const createEvent = document.getElementById("create")
let time = 0
createEvent.addEventListener("click", function(){
    eventList.classList.remove("fill-content")
    const inputTitle = document.createElement("input")
    inputTitle.type = "text"
    inputTitle.placeholder = "Event Title"
    const inputCountdown = document.createElement("input")
    inputCountdown.type = "number"
    inputCountdown.placeholder = "mm/dd/yyyy"
    const inputContent = document.createElement("input")
    inputContent.type = "text"
    inputContent.placeholder = "Event Content"
    const submit = document.createElement("button")
    const editPlane = document.createElement("div");
    editPlane.classList.add("edit-plane");
    
    editPlane.appendChild(inputTitle);
    editPlane.appendChild(inputCountdown);
    editPlane.appendChild(inputContent);
    editPlane.appendChild(submit);
    eventList.appendChild(editPlane);

})
