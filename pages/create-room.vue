<template>
	<div class="base-container">
		<h1 class="page-header">Создание группы</h1>
		<section class="content-section">
			<label class="create-page__group create-page__name-label" for="group-name">
				<span>Имя группы (макс 40 символов):</span>
				<input @input="checkLength" type="text" name="group-name" id="group-name" placeholder="Введите название">
			</label>
			<div class="create-page__group">
				<span>Место обеда:</span>
				<div class="create-page__dropdown" ref="dropdown">
					<button @click="toggleDropdown" class="dropdown__active-item">{{ dropdownActive.name }}</button>
					<ul class="dropdown__list">
						<li
							class="dropdown__item"
							v-for="item in dropdownList"
							:class="{'dropdown__item--active': item == dropdownActive}"
							@click="setActiveItem(item)"
						>
							{{ item.name }}
							<IconsCheckmark v-if="item == dropdownActive" class="dropdown__item-checkmark"/>
						</li>
					</ul>
				</div>
			</div>
			<div class="create-page__group">
				<span>Тип группы:</span>
				<Switcher
					class="create-page__switcher"
					v-model="switcherActive"
					:switcherList="switcherList"
				/>
				<transition name="fade">
					<div v-if="!switcherActive.isPublic" class="create-page__link">
						<div class="link__info">Пользователи смогут попасть в вашу группу только по ссылке-приглашению:</div>
						<div class="link__content">
							<input readonly :value="inputValue" @click="copyLink">
						</div>
					</div>
				</transition>
			</div>
		</section>
	</div>
</template>
<script setup>
// Dropdown-block
const dropdown = ref(null)
const dropdownList = ref([
	{
		id: 0,
		name: 'Выбрать место',
		selectionMode: 'defined'
	},
	{
		id: 1,
		name: 'Голосование',
		selectionMode: 'voting'
	},
	{
		id: 2,
		name: 'Случайное место',
		selectionMode: 'random'
	}
])
const dropdownActive = ref(dropdownList.value[0])

// Переключение дропдауна
const toggleDropdown = () => { dropdown.value.classList.toggle('dropdown--active')}

// Активный тип выбора места
const setActiveItem = (item) => {
	if (item != dropdownActive.value)
	{
		dropdownActive.value = item;
		dropdown.value.classList.remove('dropdown--active')
	}
}

// Switcher-block
const switcherList = ref([
	{
		id: 0,
		content: "ОТКРЫТАЯ",
		isPublic: true
	},
	{
		id: 1,
		content: "ПРИВАТНАЯ",
		isPublic: false
	}
])

const switcherActive = ref(switcherList.value[0])

// Link-block
const inputValue = ref(0)

// Копируем ссылку
const copyLink = event => {
	navigator.clipboard.writeText(event.target.value)

	event.target.disabled = true
	event.target.parentElement.classList.add('copied')
	setTimeout(() => {
		event.target.parentElement.classList.remove('copied')
		event.target.disabled = false
	}, 2000)
}

// Проверка длины input-поля
const checkLength = event => {
	const inputValue = event.target
	if (inputValue.value.length > 40)
		inputValue.value = inputValue.value.slice(0, -1)
}

onMounted(() => {
	inputValue.value = `https://haboshbabosh.fun/id-${Math.floor(Math.random() * 99999999)}`
})
</script>
<style lang='scss'>
.content-section {
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.create-page__group > span {
	font-size: 18px;
	font-family: 'Jost';
}

.create-page__name-label {
	input {
		width: 100%;
		margin-top: 12px;
		padding-bottom: 5px;
		outline: none;
		border: none;
		border-bottom: 1px solid;
		font-family: 'Jost-Light';

		&::placeholder {
			font-family: 'Jost-Light';
			font-size: 18px;
			color: #B8B8B8;
		}
	}
}

.create-page__dropdown {
	max-width: 220px;
	margin-top: 12px;
	border-radius: 16px;
	border: 1px solid $mainColor;
	max-height: 32px;
	transition: .3s;
	overflow: hidden;

	* {
		font-family: 'Jost-Light';
		font-size: 14px;
	}

	.dropdown__active-item {
		padding-block: 6px 8px;
		width: 100%;
		border-bottom: 1px solid #CCEAFF;
		cursor: pointer;
		line-height: 16px;
	}

	.dropdown__list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 9.5px;
		padding-block: 10px 14px;

		.dropdown__item {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			color: $grayText;

			&-checkmark {
				position: absolute;
				right: 24px;
				top: 5px;
			}

			&--active { color: $mainColor }
		}
	}

	&.dropdown--active {
		max-height: 135px;
	}
}

.create-page__switcher {
	height: 40px;
	margin-top: 12px;
	border: 1px solid $mainColor;
}

.create-page__link {
	margin-top: 10px;
	padding: 24px;
	border-radius: 16px;
	background-color: $mainColor;

	.link__info {
		font-family: 'Jost';
		font-size: 14px;
		color: #FFF;
	}

	.link__content {
		position: relative;
		margin-top: 14px;

		input {
			width: 100%;
			height: 30px;
			letter-spacing: -2%;
			padding-inline: 10px;
			border: none;
			border-radius: 6px;
			font-size: 14px;
			font-family: 'Jost-Light';
			cursor: pointer;
		}

		&::after {
			pointer-events: none;
			position: absolute;
			width: 10px;
			height: 12px;
			right: 10px;
			top: calc(50% - 6px);
			display: block;
			content: '';
			background-image: url('/icons/copy.svg');
		}
		&.copied::after {
			width: 11px;
			height: 8px;
			top: calc(50% - 4px);
			background-image: url('/icons/checkmark.svg')
		}
	}
}

.fade-enter-active,
.fade-leave-active { transition: opacity .3s ease-out }

.fade-enter-from,
.fade-leave-to { opacity: 0 }
</style>