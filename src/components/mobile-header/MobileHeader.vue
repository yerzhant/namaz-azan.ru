<template lang="pug">
header.mobile-header
  .top
    .menu(@click="store.showMenu = true")
    .text(@click="$router.push('/')")
      .title ЭНЦИКЛОПЕДИЯ НАМАЗА
      .sub-title Самоучитель и справочник. Cпецпроект
        a.link(href="https://azan.ru")  Azan.ru
    a.search(href="https://azan.ru/search")
  .status {{ store.mobileHeaderStatus }}
</template>

<script>
import store from "../../store";

export default {
  data() {
    return {
      store: store(),
    };
  },
};
</script>

<style lang="scss" scoped>
.mobile-header {
  display: none;

  @media (max-width: $mobile) {
    display: block;
  }
}

.top {
  display: flex;
  align-items: center;
  height: 70px;
  background: url(./bg.jpg) no-repeat center / cover;
}

.menu {
  width: 57px;
  height: 57px;
  background: url(./menu.png) no-repeat center / 17px;
}

.search {
  width: 57px;
  height: 57px;
  background: url(./search.png) no-repeat center / 17px;
}

.text {
  flex-grow: 1;
  text-align: center;
}

.title {
  display: inline-block;
  font-family: $open-sans;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.2px;
  line-height: 1;
  color: #f0faff;
  border-bottom: 1px solid #42587b;
  padding-bottom: 5px;
}

.sub-title {
  font-weight: 300;
  font-size: 9.3px;
  line-height: 1;
  color: #dde3ec;
  padding-top: 5px;

  .link {
    color: #dde3ec;
  }
}

.status {
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 10px;
  padding: 0 20px;
  height: 20px;
  color: #fff;
  background-color: #327fc6;
}
</style>
