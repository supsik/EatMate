<template>
  <div class="navigation">
    <button class="create-btn" v-if="router.path == '/create-room'">Создать группу</button>
    <div class="navigation__box">
      <router-link to="/create-room">
        <IconsAddRoomBtn :color="router.path == '/create-room' ? '#1193EF' : '#000'"/>
      </router-link>
      <router-link to="/">
        <IconsMainPageBtn :color="router.path == '/' ? '#1193EF' : '#000'"/>
      </router-link>
      <router-link to="/places-list">
        <IconsGeoBtn :color="router.path == '/places-list' ? '#1193EF' : '#000'"/>
      </router-link>
    </div>
  </div>
</template>
<script setup>
const router = useRoute()
</script>
<style lang='scss'>
.navigation {
  width: 100%;
  position: fixed;
  padding-bottom: 24px;
  bottom: 0;
  pointer-events: none;
}

.navigation__box {
  pointer-events: all;
  width: 100%;
  height: 46px;
  max-width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding-inline: 42px;
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);

  a {
    width: 28px;
    height: 28px;
    display: flex;
    line-height: 0;

    svg {
      margin: auto;
      transition: .05s;
    }
  }
}

.router-link-active {
  svg {
    width: auto;
    height: 28px;
  }
}

.create-btn {
  pointer-events: all;
  width: 160px;
  height: 40px;
  margin: 0 auto 10px;
  display: block;
  border-radius: 20px;
  color: #FFF;
  font-family: 'Jost-Medium';
  letter-spacing: 4%;
  background-color: $mainColor;
}
</style>