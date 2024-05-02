let intervalId;
let keyState = {};

document.addEventListener('keydown', function(e) {
    keyState[e.key] = true;
    if (!intervalId) {
        intervalId = setInterval(function() {
            let shape1 = document.getElementsByClassName('shape')[0];
            if (keyState["ArrowRight"] && keyState["ArrowUp"]) {
                let currentBorderRadius = parseInt(shape1.style.borderTopRightRadius || 0);
                let newBorderRadius = currentBorderRadius + 2;
                shape1.style.borderTopRightRadius = newBorderRadius + 'px';
                console.log(`right corner radius:${currentBorderRadius}`)
            }
            if (keyState["ArrowDown"] && keyState["ArrowLeft"]) {
                let currentBorderRadius = parseInt(shape1.style.borderBottomLeftRadius || 0);
                let newBorderRadius = currentBorderRadius + 2;
                shape1.style.borderBottomLeftRadius = newBorderRadius + 'px';
            }
            if (keyState["ArrowUp"] && keyState["ArrowLeft"]) {
                let currentBorderRadius = parseInt(shape1.style.borderTopLeftRadius || 0);
                let newBorderRadius = currentBorderRadius + 2;
                shape1.style.borderTopLeftRadius = newBorderRadius + 'px';
                console.log(`left corner radius:${currentBorderRadius}`)
            }
            if (keyState["ArrowDown"] && keyState["ArrowRight"]) {
                let currentBorderRadius = parseInt(shape1.style.borderBottomRightRadius || 0);
                let newBorderRadius = currentBorderRadius + 2;
                shape1.style.borderBottomRightRadius = newBorderRadius + 'px';
            }
        }, 2);
    }
});

document.addEventListener('keyup', function(e) {
    keyState[e.key] = false;
    if (e.key === "ArrowUp" || e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "ArrowLeft") {
        clearInterval(intervalId);
        intervalId = null;
    }
});