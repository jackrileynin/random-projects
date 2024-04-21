const inputButton = document.getElementsByClassName("input-button")[0];
const outputFrom = document.getElementsByClassName("output-form-content")[0];


const convertBinaryString = () => {
    const binInput = document.getElementById("binary");
    const input = binInput.value
    const mathematicalFunction = function(value, index){
        return value === "1" ? 2 ** (input.length - 1 - index): 0;
    };


    if (input.match(/^[01]{1,8}$/)) {
        const conversion = input.split("").reduce((acc, value, index) => {
            return acc + mathematicalFunction(value, index);

        }, 0); // Initialize accumulator with 0
        console.log(conversion)
        //make it so the conversion remians on the output form, right it just shows up for a second
        
        outputFrom.innerHTML = conversion;        

    } else if (input.length > 8 || input.match(`^[^01]+$`)) {
        alert(`It seems like your input: ${input} either has too many digits or one or more of the digits are not "0" or "1".`);
    }
};

inputButton.addEventListener('click', (e) =>{
    e.preventDefault();
    convertBinaryString();
});
