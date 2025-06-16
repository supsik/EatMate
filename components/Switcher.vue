<template>
  <div class="switcher">
		<button
			class="switcher__item"
			v-for="item in props.switcherList"
			:class="{'switcher__item--active': item == switcherActive}"
			@click="switchItem(item)"
		>{{ item.name }}</button>
		<div class="switcher__bar" ref="switcherBar"></div>
	</div>
</template>

<script setup>
const switcherActive = defineModel()
const switcherBar = ref(null)

const props = defineProps({
  switcherList: Array
})


const switchItem = (item) => {
	switcherActive.value = item
	switcherBar.value.style.transform = `translateX(${100 * item.id}%)`
}
</script>

<style lang='scss'>
.switcher {
	position: relative;
	display: flex;
	padding: 3px;
	border-radius: 20px;
	border: 1px solid $mainColor;

	.switcher__item {
		position: relative;
		z-index: 2;
		font-family: 'Jost-Light';
		font-size: 12px;
		letter-spacing: 10%;
		transition: .3s cubic-bezier(0,.75,.45,1);

		&--active { color: #FFF }
	}

	.switcher__bar {
		width: calc(50% - 3px);
		height: calc(100% - 6px);
		transition: .3s cubic-bezier(0,.75,.45,1);
		border-radius: 16px;
		position: absolute;
		background-color: $mainColor;
	}
}
</style>