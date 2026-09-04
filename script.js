const terminalInput = document.querySelector('.terminal-input');
const output = document.querySelector('.terminal-output');

//Add the files and directories to be displayed when the 'ls' command is executed
const filesAndDirectories = ['about-me', 'projects', 'contact'];


terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
         // Prevent form submission
        event.preventDefault();

        // Get the command entered by the user
        const command = terminalInput.value.trim();

        if (command === 'ls') {
            output.textContent = filesAndDirectories.join('\n');
        }

        // Clear the input field after executing the command
        terminalInput.value = '';
        terminalInput.focus();
    }
})