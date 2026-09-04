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

        //If the user types the 'cd' command with the files name
        //The hover window will appear with the information in that file
        if (command === 'cd') {
            
            //If the user types 'cd about-me', the hover window will appear with the information in that file
            if (command === 'cd about-me') {
                window.location.href = 'about-me.html';
            }

            //If the user types 'cd projects', the hover window will appear with the information in that file
            if (command === 'cd projects') {
                window.location.href = 'projects.html';
            }

            //If the user types 'cd contact', the hover window will appear with the information in that file
            if (command === 'cd contact') {
                window.location.href = 'contact.html';
            }

        }
    }
})