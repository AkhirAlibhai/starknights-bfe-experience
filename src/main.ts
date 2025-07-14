import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

function unlockPhone() {
    var timeDisplay = document.getElementById('timedisplay');
    if (timeDisplay) {
        timeDisplay.style.display = 'none';
    }

    var unlockBtn = document.getElementById('unlockbutton');
    if (unlockBtn) {
        unlockBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Fade in and unblur effect for the whole page
    var phoneContainer = document.getElementById('phonecontainer');
    setTimeout(function () {
        phoneContainer?.classList.add('page-loaded');
    }, 10);
    var unlockBtn = document.getElementById('unlockbutton');
    unlockBtn?.addEventListener('click', function (e) {
        unlockPhone();
    });
});
