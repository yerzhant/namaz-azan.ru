<template lang="pug">
  section.main
    Banner(
      type="first-namaz"
      reverse
      title="МОЙ ПЕРВЫЙ НАМАЗ"
      shortDesc="Экспресс обзор намаза для новичков"
      desc="Насколько сложно или просто читать намаз?  Что бы выяснить это мы \
        подготовили для Вас тур по намазу состоящий всего из 20 шагов. Начните \
        прямо сейчас и через 20 минут Вы будете знать о втором столпе Ислама!"
      descUpBorder
      primaryTitle="ДА, НАЧАТЬ!"
      primaryRed
      secondaryTitle="ПОДРОБНЫЕ УРОКИ"
    )
</template>

<script>
import Banner from '@/components/Banner.vue';

export default {
  components: {
    Banner,
  },
};
</script>
