/* Chalenge: 

Title: Character counter
=> Build a simple webpage with a text area where the user can type. 
As they type, show a live character count below it. Warn the user when they're getting close to a limit, and stop them from going over it.

Requirements: 
=> A <textarea> where the user can type and a counter below it showing how many characters have been typed, e.g. 32 / 150
The counter turns orange when the user is within 20 characters of the limit
The counter turns red and the user cannot type any more once the limit (150) is reached

*/

const textarea = document.getElementById('textarea-el');
const text = document.getElementById('text-el');
const note = document.getElementById('note');

textarea.addEventListener('input', () => {
    let count = textarea.value.length;

    if (count >= 130 && count < 150){
        textarea.style.border = "2px solid orangered";
        text.style.color = "orangered";
        textarea.style.boxShadow = "0 0 20px orangered";

        note.textContent = "Be Careful";
        note.style.color = "orangered";
    } else if (count === 150){
        textarea.style.borderColor = "darkred";
        text.style.color = "darkred";
        textarea.style.boxShadow = "0 0 20px darkred";

        note.textContent = "Maximum";
        note.style.color = "darkred";
    } else {
        textarea.style.border = "2px solid transparent";
        text.style.color = "black";
        textarea.style.boxShadow = "0 0 20px gray";

        note.textContent = "";
    }
    text.textContent = `${count} / 150`;
})