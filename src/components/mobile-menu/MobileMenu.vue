<template lang="pug">
  menu.mobile-menu(v-show="$store.state.showMenu")
    .header
      .close(@click="$store.commit('showMenu', false)")
      .bar
      .info Энциклопедия намаза - спецпроект образовательного портала
        a.link(href="https://azan.ru")  Azan.ru
    .static-bar Главное меню
    .items
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mobile-menu {
  z-index: 10000;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 290px;
  box-shadow: 0 0 90px rgba(0, 0, 0, 0.56);
  background-color: #081933;
  &::before {
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
}
.header {
  display: flex;
  align-items: center;
  height: 70px;
  .close {
    width: 55px;
    height: 55px;
    cursor: pointer;
    background: url(./close.png) no-repeat center / 14px;
  }
  .bar {
    width: 1px;
    height: 48px;
    background-color: #303e53;
  }
  .info {
    font-size: 10px;
    font-weight: 300;
    color: #b0c1de;
    width: 170px;
    margin-left: 20px;
    .link {
      color: #5ca5e2;
    }
  }
}
.static-bar {
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 10px;
  color: #8fa3c0;
  background-color: #303e53;
  padding: 0 20px;
  height: 20px;
}
</style>
