import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// main.js
const clickButton = document.getElementById('clickButton');
let experience = 0;
let level = 1;

clickButton.addEventListener('click', () => {
    experience += 1;
    updateExperience();
});

function updateExperience() {
    // Check if the player has reached the next level
    if (experience >= level * 10) {
        level++;
        // Update the player's level and experience
        console.log(`You leveled up to level ${level}!`);
        experience = 0;
    }
}