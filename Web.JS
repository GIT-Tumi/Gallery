const PASSWORD = 'ice-tea';
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
const passwordScreen = document.getElementById('passwordScreen');
const galleryContent = document.getElementById('galleryContent');
const folderButtons = document.querySelectorAll('.folder-card');
const folderSections = document.querySelectorAll('.gallery-folder');

function selectFolder(folderName) {
    folderButtons.forEach(button => {
        const isActive = button.dataset.folder === folderName;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    folderSections.forEach(section => {
        section.classList.toggle('active', section.dataset.folder === folderName);
    });
}

folderButtons.forEach(button => {
    button.addEventListener('click', () => selectFolder(button.dataset.folder));
});

passwordForm.addEventListener('submit', event => {
    event.preventDefault();
    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === PASSWORD) {
        passwordScreen.style.display = 'none';
        galleryContent.removeAttribute('aria-hidden');
        passwordError.textContent = '';
        selectFolder('night-market');
    } else {
        passwordError.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
});

passwordInput.addEventListener('input', () => {
    passwordError.textContent = '';
});

selectFolder('night-market');
