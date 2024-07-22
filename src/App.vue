<template>
  <header>
    <img alt="MindBlown logo" class="logo" src="./assets/focus.png" width="2912" height="1632" />
    <button class="custom-button" @click="incrementExperience">Gain Experience</button>
    <p class="gold-text">{{ levelUpMessage }}</p>
    <progress class="experience-bar" :value="experience" :max="level * 10"></progress>

  </header>
  <section class="logs">
    <h1>HACKING HISTORY</h1>
    <div class="log-messages" v-for="(log, index) in levelUpLogs" :key="index">
      <p>{{ log }}</p>
    </div>
  </section>
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
          // ... add more cases as desired
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

.gold-text {
  color: gold;
  margin-top: 40px; /* adjust this value as needed */
  font-size: 32px; /* adjust as needed */
  text-shadow: 3px 3px 2px black; /* adjust these values as needed */
  text-align: center;
}

.logo {
  width: 560px; /* Full width */
  height: 300px;
}

.experience-bar {
  width: 100%; /* Full width */
  height: 100px; /* Specified height */
  margin-top: 40px;

}

.custom-button {
  font-size: 48px; /* adjust as needed */
  padding: 24px 24px; /* adjust as needed */
  margin-top: 40px; /* adjust this value as needed */
  display: flex;
  background-color: #42b983; /* adjust as needed */
  color: black; /* adjust as needed */
  border: inset 10px red; /* adjust as needed */
  border-radius: 64px; /* adjust as needed */
}

body {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
}

.logs {
  width: 25%; /* Adjust this as required */
  max-height: 100%;
  overflow-y: auto; /* Enable scrolling on overflow */
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-left: 60px;
}

.logs h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.logs p {
  margin-bottom: 0.5rem;
}

</style>