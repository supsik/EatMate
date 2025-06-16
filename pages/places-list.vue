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
		content: markRaw(resolveComponent('IconsList'))
	},
	{
		id: 1,
		content: markRaw(resolveComponent('IconsGeoBtn'))
	}
])
const switcherActive = ref(switcherList.value[0])
</script>
<style lang='scss'>
.places-page__switcher {
  width: 100px;
  height: 28px;
  margin: 24px auto 0;
  border-radius: 6px;

  .switcher__bar { border-radius: 4px }
}
</style>