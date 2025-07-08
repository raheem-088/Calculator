let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.closest('button').dataset.value;

        // If button doesn't have data-value, use its text
        if (!value) {
            value = e.target.closest('button').innerText;
        }

        if (value == '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
        } else if (value == 'AC') {
            string = '';
        } else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
        } else {
            string += value;
        }

        input.value = string;
    });
});