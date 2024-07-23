import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Initializing the variables
const clickButton = document.getElementById('clickButton');
let experience = 0;
let level = 1;

// Every button click increases the player's experience by 1
clickButton.addEventListener('click', () => {
    experience += 1;
    updateExperience();
});

function updateExperience() {
    // Check if the player has reached the next level
    if (experience >= level * 10) {
        level++;
        // Update the player's level and experience
        console.log(`You leveled up, now ${level} in Hacking!`);
        experience = 0;
    }
}