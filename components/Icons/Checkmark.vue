<template>
  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3.58571L3.63793 6.5L10 0.5" :stroke="props.color" stroke-width="1.4"/>
  </svg>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '#1193EF',
  }
})
</script>