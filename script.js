const terminalInput = document.querySelector('.terminal-input');
const output = document.querySelector('.terminal-output');
const popupWindow = document.querySelector('#popup-window');
const closePopup = document.querySelector('#close-popup');
const popupHeader = document.querySelector('#popup-header');

let dragOffsetX = 0;
let dragOffsetY = 0;

//Add the files and directories to be displayed when the 'ls' command is executed
const filesAndDirectories = ['about-me', 'projects', 'contact'];

function openPopup() {
    popupWindow.style.left = '50%';
    popupWindow.style.top = '50%';
    popupWindow.style.transform = 'translate(-50%, -50%)';
    popupWindow.classList.remove('hidden');
}

function closePopupWindow() {

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

        //The terminal input clears after the command is executed
        terminalInput.value = '';

        // If the user types 'cd about-me', show the About Me popup.
        if (command === 'cd about-me') {
            openPopup();
        }

        //The terminal input clears after the command is executed
        terminalInput.value = '';

        // If the user types 'cd projects', open the projects popup.
        if (command === 'cd projects') {
            openPopup();
            document.querySelector('#popup-content-projects').classList.remove('hidden');
        }
        
        //The terminal input clears after the command is executed
        terminalInput.value = '';

        // If the user types 'cd contact', open the contact popup.
        if (command === 'cd contact') {
               openPopup();
             document.querySelector('#popup-content-contact').classList.remove('hidden');
        }
        
        //The terminal input clears after the command is executed
        terminalInput.value = '';

    }
});

closePopup.addEventListener('click', function() {
    popupWindow.classList.add('hidden');
    // Close any open popup content
    document.querySelectorAll('.popup-content > div').forEach(function(div) {
        div.classList.add('hidden');
    });
});

popupHeader.addEventListener('pointerdown', function(event) {
    const popupBounds = popupWindow.getBoundingClientRect();

    dragOffsetX = event.clientX - popupBounds.left;
    dragOffsetY = event.clientY - popupBounds.top;
    popupWindow.style.left = `${popupBounds.left}px`;
    popupWindow.style.top = `${popupBounds.top}px`;
    popupWindow.style.transform = 'none';
    popupWindow.classList.add('dragging');
    popupHeader.setPointerCapture(event.pointerId);
});

popupHeader.addEventListener('pointermove', function(event) {
    if (!popupWindow.classList.contains('dragging')) {
        return;
    }

    popupWindow.style.left = `${event.clientX - dragOffsetX}px`;
    popupWindow.style.top = `${event.clientY - dragOffsetY}px`;
});

popupHeader.addEventListener('pointerup', function(event) {
    popupWindow.classList.remove('dragging');
    popupHeader.releasePointerCapture(event.pointerId);
});