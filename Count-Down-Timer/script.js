const eventList = document.querySelector("ul");
const createEvent = document.getElementById("create")
const searchEvent = document.getElementById("event-search")
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
        eventList.classList.add("fill-content")
        Index++
        JSON.stringify(index)
        localStorage.setItem(`title for ${index}, ${inputTitle.value}
        countdown for ${index}, ${inputCountdown.value}
        content for ${index} , ${inputContent.value}`)
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
        eventList.removeChild(editPlane)


    })

})
// tie to event list 
// Create factory function for the search bar and form input 

function searchForEvent(inputs){
    const newInputs = inputs
    if (!inputs){
        return "Please enter the event title"

    } else {
        return function searchlocalstorage(){
            localStorage.getItem(newInputs)
        }
    }

    
}


 
searchEvent.addEventListener("submit", ()=>{
    // submit event for title queries 
    searchEvent.preventDefault()
    const search = searchForEvent(searchEvent.value)
    

    if(search == null){
        return "No event found"
    } else {
        return search()
        //to be continued - adjust front end to display the search result 
    }
})



