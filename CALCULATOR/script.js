let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input'); // Assuming there's only one input field

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);  // Using eval to evaluate the string as a mathematical expression
        inputField.value = string;
      } catch {
        inputField.value = "Error";  // Catching any errors from invalid expressions
      }
    } else if (e.target.innerHTML === "C") {
      string = "";  // Clear the input when "C" is pressed
      inputField.value = string;
    } else {
      string += e.target.innerHTML;  // Append the clicked button's content to the string
      inputField.value = string;  // Update the input field value
    }
  });
});
 