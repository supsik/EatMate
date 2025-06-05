<template>
	<div class="base-container">
		<h1 class="page-header">Обеденные группы</h1>
		<section class="content-section">
			<div 
				class="room__container"
				v-for="item in testRooms"
				:key="item.roomId"
			>
				<div class="room__left-side">
					<div class="room__name">{{ item.roomName }}</div>
					<div class="room__place">{{ item.roomPlace }}</div>
					<div class="room__address">{{ item.roomAddress }}</div>
					<div class="room__users">
						<span class="room__user-avatar" v-for="el in item.userArr" :key="el"></span>
						<span class="room__user-more" v-if="item.roomUsers?.length > 3">и ещё {{ item.roomUsers?.length - 3 }}</span>
					</div>
				</div>
				<div class="room__right-side">
					<img 
						alt=""
						:src="`/logo/${item.roomPlace}.svg`" 	
						@error="e => e.target.src = '/logo/Others.svg'"
					>
					<a :href="`/room-${item.roomId}`" class="room__join-btn">Войти</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
const mainStore = useMainStore()
const testRooms = ref([
	{
		roomId: 1,
		roomName: 'Идём кушать с ребятами',
		roomPlace: 'KFC',
		roomAddress: 'ул. Генерала Плиева, 28А',
		roomUsers: ['@supsik', '@gandon66', '@Oleg228', 'Alan777'],
	},
	{
		roomId: 2,
		roomName: 'Кушать в Сирии вкусно',
		roomPlace: 'Siria',
		roomAddress: 'ул. Олега, 33',
		roomUsers: ['@supsik', '@Oleg228', 'Alan777'],

	},
	{
		roomId: 3,
		roomName: 'За альтушками в БК',
		roomPlace: 'BurgerKing',
		roomAddress: 'ул. Астана Кесаева, 28А',
		roomUsers: ['@supsik', '@gandon66', '@Oleg228', 'Alan777', '@gandon661'],

	},
	{
		roomId: 4,
		roomName: 'Сицилийская мафия',
		roomPlace: 'Viver',
		roomAddress: 'ул. Анзорчика, 77/1',
		roomUsers: ['@Oleg228', 'Alan777'],
	},
	{
		roomId: 5,
		roomName: 'ВАЦАОО НИМАААА',
		roomPlace: 'Sashimi',
		roomAddress: 'ул. Чинчопа, 34',
		roomUsers: ['@supsik'],
	},
])

onMounted(()=> {
	testRooms.value.map(el => el.userArr = el.roomUsers.slice(0, 3))
})
</script>

<style lang='scss'>
.content-section {
	margin-top: 16px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.room__container {
	display: flex;
	justify-content: space-between;

	&:last-child { margin-bottom: 80px }
}

.room {
	&__left-side, &__right-side {
		display: flex;
		flex-direction: column;
	}

	&__left-side {
		min-width: 210px;
		width: 55vw;
	}

	&__right-side { 
		justify-content: space-between;

		img {  height: 74px;}
	}
}

.room__name {
	font-size: 20px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.room__place {
	font-family: 'Jost-Light';
	font-size: 16px;
}

.room__address {
	margin-top: 2px;
	color: $grayText;
	font-family: 'Jost-Light';
	font-size: 12px;
}

.room__users {
	margin-top: 20px;
	display: flex;
	align-items: center;
}

.room__user-avatar {
	width: 28px;
	height: 28px;
	border-radius: 100%;
	background-color: $grayText;
	border: 2px solid #FFF;

	&:not(&:first-child) {
		margin-left: -8px;
	}
}

.room__user-more {
	margin-left: 10px;
	font-size: 11px;
	font-family: 'Jost-Light';
}

.room__join-btn {
	width: 100%;
	height: 35px;
	border-radius: 20px;
	background-color: $mainColor;
	display: grid;
	place-items: center;
	max-width: 70px;
	align-self: flex-end;
	font-size: 14px;
	font-family: 'Jost-Light';
	color: #FFF;
}
</style>