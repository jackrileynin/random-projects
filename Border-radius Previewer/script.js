let intervalId;

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") {
        clearInterval(intervalId); // Clear the previous interval
        intervalId = setInterval(function() {
            let shape1 = document.getElementsByClassName('shape1')[0]; 
            let currentBorderRadius = parseInt(shape1.style.borderTopRightRadius, 10) || 0; 
            let newBorderRadius = currentBorderRadius + 2; 
            shape1.style.borderTopRightRadius = newBorderRadius + 'px'; 
        }, 2);
    }
        if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
        clearInterval(intervalId); // Clear the previous interval
        intervalId = setInterval(function() {
            let shape1 = document.getElementsByClassName('shape1')[0]; 
            let currentBorderRadius = parseInt(shape1.style.borderTopRightRadius, 10) || 0;
            let newBorderRadius = currentBorderRadius - 2; 
            shape1.style.borderTopRightRadius = newBorderRadius + 'px'; 
        }, 2);
    }



});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") {
        clearInterval(intervalId); 
    }
});

