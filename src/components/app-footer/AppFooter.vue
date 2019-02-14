<template lang="pug">
  footer.footer
    .top
      .title ЭНЦИКЛОПЕДИЯ НАМАЗА
      img.moon(src="./moon.png")
      .desc Самоучитель и справочник
        br
        | Cпецпроект Azan.ru
      .socials
        Socials
        router-link.tutoring(to="/solaatil-uulaa") Обучение намазу
      .links
        router-link(to="/roiisiyyah") Главная
        router-link(to="/tahharah/wudu") Тахарат
        router-link(to="/fadjr/fard") Намаз
        router-link(to="/tutorial/fard") Обучение
      .up(@click="$scrollTo('body')")
    .bottom
      span Copyright © 2019 Azan.ru
      span.bar |
      a(href="/site/agreement") Соглашение об использовании
      span.bar |
      a(href="/site/write-to-admin") Написать администратору
</template>

<script>
import Socials from '@/components/socials/Socials.vue';

export default {
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  color: #aebbd2;
  text-align: center;
}
.top {
  background: url(./top-bg.png) no-repeat top;
  background-color: #1a3053;
  padding-top: 125px;
  @media (max-width: $mobile) {
    background-image: url(./top-bg-m.png);
    background-size: 360px;
    padding-top: 104px;
  }
}
.title {
  font-family: $open-sans;
  font-weight: bold;
  font-size: 20px;
  color: #f0faff;
}
.moon {
  margin-top: 18px;
  margin-bottom: 10px;
}
.desc {
  margin-bottom: 25px;
}
.tutoring {
  display: inline-block;
  border: 1px solid #67758b;
  margin-left: 10px;
  padding: 6px 10px;
  vertical-align: top;
  font-size: 13px;
  color: #5ca5e2;
}
.links {
  margin-top: 110px;
  margin-bottom: 55px;
  @media (max-width: $mobile) {
    margin-top: 102px;
    margin-bottom: 77px;
  }
  > a {
    display: inline-block;
    border: 1px solid #67758b;
    padding: 6px 10px;
    font-size: 14px;
    font-weight: normal;
    color: #7a8aa3;
    min-width: 79px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: $mobile) {
      min-width: 71px;
    }
  }
}
.up {
  display: inline-block;
  position: relative;
  bottom: -1px;
  width: 37px;
  height: 27px;
  background: url(./up.png) no-repeat center;
  background-color: #13223b;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  vertical-align: bottom;
  cursor: pointer;
}
.bottom {
  padding-top: 40px;
  padding-bottom: 90px;
  background: url(./bottom-bg.png) no-repeat bottom;
  background-color: #07162d;
  border-top: 1px solid #313f53;
  @media (max-width: $mobile) {
    background-image: url(./bottom-bg-m.png);
    background-size: 360px;
  }
  > * {
    color: #bbc8dd;
    font-size: 13px;
  }
  .bar {
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>
