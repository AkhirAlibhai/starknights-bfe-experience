function unlockPhone() {
    var timeDisplay = document.getElementById('timedisplay');
    if (timeDisplay) {
        timeDisplay.style.display = 'none';
    }
    var unlockBtn = document.getElementById('unlockbutton');
    if (unlockBtn) {
        unlockBtn.style.display = 'none';
    }
    var homeScreen = document.getElementById('homescreen');
    if (homeScreen) {
        homeScreen.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Fade in and unblur effect for the whole page
    var phoneContainer = document.getElementById('phonecontainer');
    if (phoneContainer) {
        setTimeout(function () {
            phoneContainer.classList.add('page-loaded');
        }, 10);
    }
    var unlockBtn = document.getElementById('unlockbutton');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', function (e) {
            unlockPhone();
        });
    }
    // Show phone app when phone icon is clicked
    var phoneIcon = document.querySelector('#homescreen .bg-gray-800');
    var phoneApp = document.getElementById('phoneApp');
    var closePhoneApp = document.getElementById('closePhoneApp');
    var dialInput = document.getElementById('dialInput');
    var dialPad = document.getElementById('dialPad');
    var deleteBtn = document.getElementById('deleteBtn');
    if (phoneIcon && phoneApp) {
        phoneIcon.addEventListener('click', function () {
            phoneApp.classList.remove('hidden');
        });
    }
    if (closePhoneApp && phoneApp) {
        closePhoneApp.addEventListener('click', function () {
            phoneApp.classList.add('hidden');
        });
    }
    // Dial pad button logic
    if (dialPad && dialInput) {
        dialPad.querySelectorAll('button.dial-number').forEach(function (btn) {
            btn.addEventListener('click', function () {
                dialInput.value += btn.textContent;
            });
        });
    }
    if (deleteBtn && dialInput) {
        deleteBtn.addEventListener('click', function () {
            dialInput.value = dialInput.value.slice(0, -1);
        });
    }
});
