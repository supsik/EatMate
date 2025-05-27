<template>
  <div class="navigation">
    <div class="rect"></div>
    <div class="navigation__box">
      <router-link to="/create-room">
        <IconsAddRoomBtn :active="tabsStore.activeTab == 'create-room'"/>
      </router-link>
      <router-link to="/">
        <IconsMainPageBtn :active="tabsStore.activeTab == 'main'"/>
      </router-link>
      <router-link to="/places-list">
        <IconsGeoBtn :active="tabsStore.activeTab == 'places-list'"/>
      </router-link>
    </div>
  </div>
</template>
<script setup>
const tabsStore = useMainStore()
</script>
<style lang='scss'>
.navigation {
  width: 100%;
  position: fixed;
  padding-bottom: 24px;
  bottom: 0;
}

.navigation__box {
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

    svg { margin: auto }
  }
}

.router-link-active {
  svg {
    width: auto;
    height: 28px;
  }
}
</style>