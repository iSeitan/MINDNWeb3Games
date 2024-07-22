<script setup>
import { defineProps } from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import ToolingIcon from './icons/IconTooling.vue'

const { level, experience } = defineProps({
  level: Number,
  experience: Number
})
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>Get to the level 100 to prestige!</template>
  </WelcomeItem>
</template>

<style>
/* your styles here */
</style>