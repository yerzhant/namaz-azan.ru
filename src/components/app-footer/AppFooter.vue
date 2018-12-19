<template lang="pug">
  footer
    .top
      .title ЭНЦИКЛОПЕДИЯ НАМАЗА
      img.moon(src="./moon.png")
      .desc Самоучитель и справочник
        br
        | Cпецпроект Azan.kz
      .socials
        Socials
        .tutoring Обучение намазу
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
