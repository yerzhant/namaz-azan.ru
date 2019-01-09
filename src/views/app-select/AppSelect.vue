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
    .select-m
      .option(@click="selectGender('man')")
        .image
        .text
          .line-1 МУЖЧИНАМ
          .line-2 Намаз для мужчин
      .option(@click="selectGender('woman')")
        .image.woman
        .text
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
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 185px;
  background: url(./buttons-bg.jpg) no-repeat top;
  @media (max-width: 1366px) {
    height: 112px;
  }
  @media (max-width: $mobile) {
    height: 100px;
  }
  > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: $mobile) {
      width: 148px !important;
      font-size: 10.3px !important;
      margin-right: 21px;
    }
  }
}
.select {
  display: flex;
  align-items: center;
  border-top: 1px solid #bfced5;
  border-bottom: 1px solid #c7d1d7;
  height: 504px;
  background: url(./select-bg.png) no-repeat center -2px, url(./select-bg.jpg) no-repeat top;
  @media (max-width: $mobile) {
    display: none;
  }
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
  @media (max-width: $mobile) {
    display: none;
  }
}
.middle-text {
  width: 1px;
  height: 70px;
  background-color: #acb7ca;
}
.right-text,
.left-text {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 538px;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #eff5f8;
  }
  &::before {
    position: absolute;
    right: -1px;
    width: 1px;
    height: 70px;
    content: '';
    background-color: #dde3ee;
  }
  .line-1 {
    font-size: 20px;
    font-weight: 500;
    color: #0b91cf;
    margin-bottom: 5px;
  }
}
.left-text {
  &::before {
    right: initial;
    left: -1px;
  }
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
  @media (max-width: $mobile) {
    background-image: url(./footer-bg-m.png);
    background-size: 100%;
    padding-top: 70px;
    padding-bottom: 50px;
  }
  .line-1 {
    font-family: $pt-sans;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 16px;
    @media (max-width: $mobile) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
}
.link {
  color: #7f9ab3;
}
.select-m {
  display: none;
  border-bottom: 1px solid #9bacb6;
  @media (max-width: $mobile) {
    display: block;
  }
  .option {
    background: url(./image-bg-m.jpg) no-repeat top / cover;
    border-top: 1px solid #c9d3d8;
  }
  .image {
    height: 253px;
    background: url(./man-m.png) no-repeat bottom / 48%;
    &.woman {
      background-image: url(./woman-m.png);
      background-size: 41%;
    }
  }
  .text {
    background-color: #e7f0f5;
    border-top: 1px solid #c9d3d8;
    text-align: center;
    padding: 21px;
  }
  .line-1 {
    font-weight: 500;
    color: #0b91cf;
  }
  .line-2 {
    font-size: 10px;
    color: #5d6b7b;
  }
}
</style>
