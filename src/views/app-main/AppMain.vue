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
      Slogan
    Banner(
      type="namaz-detailed"
      title="НАМАЗ: ПОДРОБНО"
      shortDesc="Детализированное обучение намазу"
      desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
        понять принцип исполнения большинства намазов. Если Вы научитесь \
        читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
      descUpBorder
      primaryTitle="НАЧАТЬ ОБУЧЕНИЕ"
    )
</template>

<script>
import Banner from '@/components/Banner.vue';
import Slogan from '@/components/separator/slogan/Slogan.vue';

export default {
  components: {
    Banner,
    Slogan,
  },
};
</script>
