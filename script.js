const terminalInput = document.querySelector('.terminal-input');
const output = document.querySelector('.terminal-output');
const popupWindow = document.querySelector('#popup-window');
const closePopup = document.querySelector('#close-popup');

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

        //The terminal input clears after the command is executed
        terminalInput.value = '';

        // If the user types 'cd about-me', show the About Me popup.
        if (command === 'cd about-me') {
            popupWindow.classList.remove('hidden');
        }

        // If the user types 'cd projects', open the projects popup.
        if (command === 'cd projects') {
            window.location.href = 'projects.html';
        }

        // If the user types 'cd contact', open the contact popup.
        if (command === 'cd contact') {
            window.location.href = 'contact.html';
        }

    }
});

closePopup.addEventListener('click', function() {
    popupWindow.classList.add('hidden');
});