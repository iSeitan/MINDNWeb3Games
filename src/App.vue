<template>


  <main>
    <TheWelcome :level="level" :experience="experience" />
  </main>
</template>

<script>
import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from './components/WelcomeItem.vue'

export default {
  components: {
    TheWelcome,
    WelcomeItem
  },

  data() {
    return {
      experience: 0,
      level: 1,
      levelUpMessage: 'Start your hacking!',
      levelUpLogs: [],
    };
  },

  methods: {
    incrementExperience() {
      // Add 1 to experience and an additional 1 if level is 5 or more
      this.experience += this.level >= 5 ? 2 : 1;
      this.updateExperience();
    },

    getLevelMessage(level) {
      switch(level) {
        case 1: return 'You have begun your journey!';
        case 2: return 'You are learning fast!';
        case 3: return 'Keep going, you are doing great!';
        default: return `You're now at level ${level}`;
      }
    },

    updateExperience() {
      if (this.experience >= this.level * 10) {
        this.level++;
        this.experience = 0;
        const currentTime = new Date();
        this.levelUpLogs.push(`At ${currentTime.toLocaleTimeString()}, you leveled up to level ${this.level}.`);
      } else {
        // You may want to update the message to notify the user about their progress
        this.levelUpMessage = this.getLevelMessage(this.level);
      }
    },
  }
}
</script>

<style>
header {
  position: relative;
  display: flex;
  font-family: Arial,serif;
  background-color: #0c3753;
}

body {
  position: relative;
  display: flex;
  font-family: Arial,serif;
  background-color: #0c3753;
}

footer {
  position: relative;
  display: flex;
  font-family: Arial,serif;
  background-color: #0c3753;
}

.logs {
  width: 25%;
  max-height: 100%;
  overflow-y: auto;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-left: 60px;
}

.gold-text {
  color: gold;
  margin-top: 40px;
  font-size: 32px;
  text-shadow: 3px 3px 2px black;
  text-align: center;
}

.logo {
  position: absolute;
  top: 16%;
  left: 50%;
  width: 560px;
  height: 300px;
}

.experience-bar {
  width: 100%;
  height: 100px;
  margin-top: 40px;
}

.custom-button {
  font-size: 48px;
  padding: 24px 24px;
  margin-top: 40px;
  display: flex;
  background-color: #42b983;
  color: black;
  border: inset 10px red;
  border-radius: 64px;
}
</style>