<template lang="pug">
  section.namaz
    NamazHeader(
      type="fadjr"
      typeText="Утро"
      title="ФАДЖР: УТРЕННИЙ НАМАЗ"
      shortDesc="Детальный обзор утреннего намаза “Фаджр”, состоящего из 2 ракаатов \
                 фарда. Фаджр является первым из пяти обязательных намазов."
      rakaats1="2"
      rakaats1Title="Сунны"
      rakaats2="2"
      rakaats2Title="Фарда"
      button1="СУННА"
      button1Link="#"
      button2="ФАРД"
      button2Link="#"
      button2Blue
      desc="Фаджр состоит из 2 ракаатов сунны и 2 ракаатов фарда. Время его совершения yачинается \
            с наступлением рассвета и заканчивается за несколько мгновений до восхода солнца. \
            Наилучшее время для совершения утреннего намаза: ближе к концу его времени, когда \
            становятся видны контуры предметов. Однако, не следует излишне откладывать фаджр, \
            что бы не выйти за пределы установленного для него временного промежутка. \
            У мусульманина должно быть достаточно времени для того, что бы подготовится к намазу \
            (совершить омовение, одеться и т.д.) и неторопливо прочитать Коран в обоих ракаатах \
            фаджра до того, как солнце выйдет из-за горизонта. В случае совершения фаджр-намаза \
            в одиночку, предпочительно выполнить его в самом начале времени.  "
    )
    AppSection(title="1 РАКААТ" rakaat)
      .line
      Rukn(
        type="niet"
        title="ТАКБИР"
        subTitle="Вступление в намаз"
        number="1"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        first
      )
      Rukn(
        type="takbir"
        title="ТАКБИР"
        subTitle="Вступление в намаз"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
</template>

<script>
import NamazHeader from '@/components/namaz-header/NamazHeader.vue';
import AppSection from '@/components/app-section/AppSection.vue';
import Rukn from '@/components/rukn/Rukn.vue';

export default {
  components: {
    NamazHeader,
    AppSection,
    Rukn,
  },
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #b0bacc;
}
</style>
