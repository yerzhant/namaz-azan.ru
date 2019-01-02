<template lang="pug">
  section.tahharah
    NamazHeader(
      :type="`tahharah ${$store.state.namaz}`"
      title="ФАДЖР: УТРЕННИЙ НАМАЗ"
      shortDesc="Вуду - это малое ритуальное омовение тела, которое является простым и \
                 доступным способом достичь состояния ритаульной чистоты, кроме тех \
                 случаев, когда требуется полное омовение - гусль."
    )
    p fdsafasdfasdfs
    .line.type-2
    AppSection(title="ДРУГИЕ ВИДЫ ОЧИЩЕНИЯ")
      .fards
        Banner(
          type="fard gusl blue"
          :shadow="$store.state.namaz === 'gusl'"
          descStyleBlackBlue
          descWithMargin2
          title="ГУСЛЬ"
          shortDesc="Полное омовение"
          desc="Полное ритуальное омовение водой всего тела целиком. По-арабски \
                полное омовение носит название “Гусль”."
        )
          template(slot="buttons")
            AppButton(link="/tahharah/gusl" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
        Banner(
          type="fard wudu blue"
          descStyleBlackBlue
          descWithMargin2
          title="ВУДУ (ТАХАРАТ)"
          shortDesc="Малое омовение"
          desc="Малое омовение является доступным и простым способом очищения \
                однако, в ряде случаев, для достижения ритуальной чистоты нужен гусль."
        )
          template(slot="buttons")
            AppButton(link="/tahharah/wudu" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

    Banner.namaz-detailed(
      type="namaz-detailed short"
      title="НАМАЗ: ПОДРОБНО"
      shortDesc="Детализированное обучение намазу"
      desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
        понять принцип исполнения большинства намазов. Если Вы научитесь \
        читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
      descUpBorder
    )
      template(slot="buttons")
        AppButton(link="/" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

    .line.type-2
    AppSection(title="ОБЯЗАТЕЛЬНЫЕ НАМАЗЫ" bg1)
      .fards
        Banner(
          type="fard fadjr"
          :shadow="$store.state.namaz === 'fadjr'"
          descStyleBlackBlue
          descWithMargin2
          title="ФАДЖР"
          shortDesc="Утренний намаз"
          desc="Детальный обзор утреннего намаза “Фаджр”, состоящего из 2 ракаатов \
                фарда. Фаджр является первым из пяти обязательных намазов."
        )
          template(slot="buttons")
            AppButton(link="/fadjr" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

        Banner(
          type="fard dhuhr"
          :shadow="$store.state.namaz === 'dhuhr'"
          descStyleBlackBlue
          descWithMargin2
          title="ЗУХР"
          shortDesc="Обеденный намаз"
          desc="Детальный обзор обеденного намаза “Зухр”, состоящего из 4 ракаатов \
                фарда. Зухр является вторым из пяти обязательных намазов."
        )
          template(slot="buttons")
            AppButton(link="/dhuhr" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

        Banner(
          type="fard asr"
          :shadow="$store.state.namaz === 'asr'"
          descStyleBlackBlue
          descWithMargin2
          title="АСР"
          shortDesc="Полуденный намаз"
          desc="Детальный обзор послеполуденного намаза “Аср”, состоящего из 4 \
                ракаатов фарда. Аср является третьим из пяти обязательных намазов."
        )
          template(slot="buttons")
            AppButton(link="/asr" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

        Banner(
          type="fard maghrib"
          :shadow="$store.state.namaz === 'maghrib'"
          descStyleBlackBlue
          descWithMargin2
          title="МАГРИБ"
          shortDesc="Вечерний намаз"
          desc="Детальный обзор вечернего намаза “Магриб”, состоящего из 3 ракаатов \
                фарда. Магриб является четвёртым из пяти обязательных намазов."
        )
          template(slot="buttons")
            AppButton(link="/maghrib" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

        Banner(
          type="fard isha"
          :shadow="$store.state.namaz === 'isha'"
          descStyleBlackBlue
          descWithMargin2
          title="ИША"
          shortDesc="Ночной намаз"
          desc="Детальный обзор обеденного намаза “Иша”, состоящего из 4 ракаатов \
                фарда. Иша является последним из пяти обязательных намазов."
        )
          template(slot="buttons")
            AppButton(link="/isha" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
</template>

<script>
import NamazHeader from '@/components/namaz-header/NamazHeader.vue';
import AppSection from '@/components/app-section/AppSection.vue';
import AppButton from '@/components/AppButton.vue';
import Rukn from '@/components/rukn/Rukn.vue';
import Banner from '@/components/Banner.vue';

export default {
  components: {
    NamazHeader,
    AppSection,
    AppButton,
    Rukn,
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #b0bacc;
  &.type-2 {
    background-color: #bfcad1;
  }
}
.fards {
  > * {
    margin-bottom: 17px;
  }
}
</style>
