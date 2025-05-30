<template>
  <div class="base-container">
		<h1 class="page-header">{{ testItem.roomName }}</h1>
	</div>
</template>

<script setup>
const router = useRoute()
const testItem = ref({
	roomId: 1,
	roomName: 'Идём кушать с ребятами',
	roomPlace: 'KFC',
	roomAddress: 'ул. Генерала Плиева, 28А',
	roomUsers: ['@supsik', '@gandon66', '@Oleg228', 'Alan777'],
},)
</script>

<style lang='scss'>
</style>