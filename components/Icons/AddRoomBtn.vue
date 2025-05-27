<template>
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="9.8" :stroke="props.active ? '#1193EF' : '#000'" stroke-width="2.4"/>
    <rect x="6" y="10" width="10" height="2" rx="1" :fill="props.active ? '#1193EF' : '#000'"/>
    <rect x="12" y="6" width="10" height="2" rx="1" transform="rotate(90 12 6)" :fill="props.active ? '#1193EF' : '#000'"/>
  </svg>
</template>
<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  }
})
</script>