<template lang="pug">
  footer.footer
    .top
      .title ЭНЦИКЛОПЕДИЯ НАМАЗА
      img.moon(src="./moon.png")
      .desc Самоучитель и справочник
        br
        | Cпецпроект Azan.kz
      .socials
        Socials
        router-link.tutoring(to="xxx") Обучение намазу
      .links

    .bottom
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
}
.top {
  text-align: center;
  background: url(./top-bg.png) no-repeat top;
  background-color: #1a3053;
}
.title {
  font-family: $open-sans;
  font-weight: bold;
  font-size: 20px;
  color: #f0faff;
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
</style>
