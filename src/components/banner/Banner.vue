<template lang="pug">
  section.banner
    ActionDesc(
      title="МОЙ ПЕРВЫЙ НАМАЗ"
      shortDesc="Экспресс обзор намаза для новичков"
      desc="Насколько сложно или просто читать намаз?  Что бы выяснить это мы \
        подготовили для Вас тур по намазу состоящий всего из 20 шагов. Начните \
        прямо сейчас и через 20 минут Вы будете знать о втором столпе Ислама!"
      descUpBorder="true"
      primaryTitle="ДА, НАЧАТЬ!"
      primaryRed="true"
      secondaryTitle="ПОДРОБНЫЕ УРОКИ"
    )
</template>

<script>
import ActionDesc from '@/components/action-desc/ActionDesc.vue';

export default {
  components: {
    ActionDesc,
  },
};
</script>
