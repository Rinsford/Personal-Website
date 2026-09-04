const terminalInput = document.querySelector('.terminal-input');
const output = document.querySelector('.terminal-output');

//Add the files and directories to be displayed when the 'ls' command is executed
const filesAndDirectories = ['about-me', 'projects', 'contact'];

//Repeat the command when the user presses the Enter key
function repeatCommand() {
    terminalInput.value = '';
}

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
         // Prevent form submission
        event.preventDefault();

        // Get the command entered by the user
        const command = terminalInput.value.trim();

        if (command === 'ls') {
            output.textContent = filesAndDirectories.join('\n');
        }

        // The terminal input reappears after the command is executed
        repeatCommand();
    }
})