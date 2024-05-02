let intervalId;

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp" && e.key === "ArrowRight") {
        clearInterval(intervalId); 
        intervalId = setInterval(function() {
            let shape1 = document.getElementsByClassName('shape')[0]; 
            let currentBorderRadius = parseInt(shape1.style.borderTopRightRadius || 0); 
            let newBorderRadius = currentBorderRadius + 2; 
            shape1.style.borderTopRightRadius = newBorderRadius + 'px'; 
            console.log(`right corner radius:${currentBorderRadius}`)
        }, 2);
    }
        if (e.key === "ArrowDown" && e.key === "ArrowLeft") {
        clearInterval(intervalId); 
        intervalId = setInterval(function() {
            let shape1 = document.getElementsByClassName('shape')[0]; 
            let currentBorderRadius = parseInt(shape1.style.borderBottomLeftRadius || 0);
            let newBorderRadius = currentBorderRadius + 2; 
            shape1.style.borderBottomLeftRadius = newBorderRadius + 'px'; 
        }, 2);
    }
    
    if (e.key === "ArrowUp" && e.key === "ArrowLeft"){
        clearInterval(intervalId); 
        intervalId = setInterval(function(){
            let shape1 = document.getElementsByClassName('shape')[0];
            let currentBorderRadius = parseInt(shape1.style.borderTopLeftRadius || 0);
            let newBorderRadius = currentBorderRadius + 2; 
            shape1.style.borderTopLeftRadius = newBorderRadius + 'px'; 
            console.log(`left corner radius:${currentBorderRadius}`)

        }, 2)
    }
    if(e.key === "ArrowDown" && e.key === "ArrowRight"){
        clearInterval(intervalId);
        intervalId = setInterval(function(){
            let shape1 = document.getElementsByClassName('shape')[0];
            let currentBorderRadius = parseInt(shape1.style.borderBottomRightRadius || 0);
            let newBorderRadius = currentBorderRadius + 2; 
            shape1.style.borderTopRightRadius = newBorderRadius + 'px'; 
        }, 2)
    }



});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") {
        clearInterval(intervalId); 
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        clearInterval(intervalId); 
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        clearInterval(intervalId); 
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
        clearInterval(intervalId); 
    }
});