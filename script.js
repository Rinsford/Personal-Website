const enterButton = document.querySelector('#button');

if (enterButton) {
    enterButton.focus();

    enterButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            window.location.href = 'index.html';
        }
    });
}

const terminalInput = document.querySelector('.terminal-input');
const output = document.querySelector('.terminal-output');

//Add the files and directories to be displayed when the 'ls' command is executed
const filesAndDirectories = ['about-me', 'projects', 'contact'];

if (terminalInput) {
terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
         // Prevent form submission
        event.preventDefault();

        // Get the command entered by the user
        const command = terminalInput.value.trim();

        if (command === 'ls') {
            output.textContent = filesAndDirectories.join('\n');
        }

        //The terminal input clears after the command is executed
        terminalInput.value = '';

        // If the user types 'cd about-me', show the About Me popup.
        if (command === 'cd about-me') {
            
        }

        //The terminal input clears after the command is executed
        terminalInput.value = '';

        // If the user types 'cd projects', open the projects popup.
        if (command === 'cd projects') {
           
        }
        
        //The terminal input clears after the command is executed
        terminalInput.value = '';

        // If the user types 'cd contact', open the contact popup.
        if (command === 'cd contact') {
            
        }
        
        //The terminal input clears after the command is executed
        terminalInput.value = '';

    }
});
}
