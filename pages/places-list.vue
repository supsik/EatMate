<template>
  <div class="base-container">
    <h1 class="page-header">Список мест</h1>
    <Switcher class="places-page__switcher" :switcherActive="switcherActive" :switcherList="switcherList"/>
  </div>
</template>
<script setup>
const switcherList = ref([
  {
		id: 0,
		content: resolveComponent('IconsList')
	},
	{
		id: 1,
		content: resolveComponent('IconsList')
	}
])
const switcherActive = ref(switcherList.value[0])
</script>
<style lang='scss'>
.places-page__switcher {
  width: 100px;
  margin: 24px auto 0;
  border-radius: 6px;

  .switcher__bar { border-radius: 4px }
}
</style>