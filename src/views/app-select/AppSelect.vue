<template lang="pug">
  section.app-select
    .buttons
      AppButton(:width="177" :height="36" small) НАМАЗ ДЛЯ ВЗРОСЛЫХ
      AppButton(:width="177" :height="36" small) ХАНАФИТСКИЙ МАЗХАБ
    .select
      .prev
      .left(@click="selectGender('man')")
      .middle
      .right(@click="selectGender('woman')")
      .next
    .select-text
      .left-text(@click="selectGender('man')")
        .line-1 МУЖЧИНАМ
        .line-2 Намаз для мужчин
      .middle-text
      .right-text(@click="selectGender('woman')")
        .line-1 ЖЕНЩИНАМ
        .line-2 Намаз для женщин
    footer.footer
      .line-1 ЭНЦИКЛОПЕДИЯ НАМАЗА
      .line-2 Самоучитель и справочник
      .line-3 Cпецпроект
        a.link(href="https://azan.ru")  Azan.ru
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  methods: {
    selectGender(gender) {
      this.$store.commit('setGender', gender);
      this.$router.push('/main');
    },
  },
  components: {
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.app-select {
  background: url(./bg.jpg) no-repeat center -50px;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 185px;
  > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.select {
  display: flex;
  align-items: center;
  border-top: 1px solid #bfced5;
  border-bottom: 1px solid #c7d1d7;
  height: 504px;
  background: url(./select-bg.png) no-repeat center -2px;
}
.middle {
  width: 1px;
  height: 430px;
  background-color: #bcc6d7;
}
.right {
  width: 538px;
  height: 100%;
  cursor: pointer;
  background: url(./woman.png) no-repeat bottom;
}
.left {
  width: 538px;
  height: 100%;
  cursor: pointer;
  background: url(./man.png) no-repeat bottom;
}
.prev {
  flex-grow: 1;
  height: 430px;
  border-right: 1px solid #dde3ee;
  background: url(./prev.png) no-repeat center;
}
.next {
  flex-grow: 1;
  height: 430px;
  border-left: 1px solid #dde3ee;
  background: url(./next.png) no-repeat center;
}
.select-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 114px;
  color: #5d6b7b;
  background-color: #e4eef3;
}
.middle-text {
  width: 1px;
  height: 70px;
  background-color: #acb7ca;
}
.right-text,
.left-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 539px;
  height: 70px;
  cursor: pointer;
  border-right: 1px solid #dde3ee;
  .line-1 {
    font-size: 20px;
    font-weight: 500;
    color: #0b91cf;
    margin-bottom: 5px;
  }
}
.left-text {
  border-right: none;
  border-left: 1px solid #dde3ee;
}
.footer {
  background: url(./footer-bg.png) no-repeat top;
  background-color: #e4eef3;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  color: #7f9ab3;
  padding-top: 219px - 114px;
  padding-bottom: 59px;
  .line-1 {
    font-family: $pt-sans;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 16px;
  }
}
.link {
  color: #7f9ab3;
}
</style>
