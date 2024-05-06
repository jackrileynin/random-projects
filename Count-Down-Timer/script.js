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
    let index = 0
    submit.addEventListener("click", function(){
        index ++ ;
        JSON.stringify(index)
        localStorage.setItem("index", index)
        localStorage.setItem(`title${index}`, inputTitle.value)
        localStorage.setItem(`countdown${index}`, inputCountdown.value)
        localStorage.setItem(`content${index}`, inputContent.value)
        const event = document.createElement("li")
        const title = document.createElement("h3")
        const countdown = document.createElement("h4")
        const content = document.createElement("p")
        const remove = document.createElement("button")
        const edit = document.createElement("button")   
        title.textContent = inputTitle.value
        countdown.textContent = inputCountdown.value
        content.textContent = inputContent.value
        remove.textContent = "Remove"
        edit.textContent = "Edit"
        event.appendChild(title)
        event.appendChild(countdown)
        event.appendChild(content)
        event.appendChild(remove)
        event.appendChild(edit)
        eventList.appendChild(event)
    })

})
