<template lang="pug">
  section.main
    Banner(
      type="first-namaz"
      title="МОЙ ПЕРВЫЙ НАМАЗ"
      shortDesc="Экспресс обзор намаза для новичков"
      desc="Насколько сложно или просто читать намаз?  Что бы выяснить это мы \
        подготовили для Вас тур по намазу состоящий всего из 20 шагов. Начните \
        прямо сейчас и через 20 минут Вы будете знать о втором столпе Ислама!"
      descUpBorder
    )
      template(slot="buttons")
        AppButton(link="/tour" red) ДА, НАЧАТЬ!
        AppButton.color-2d(link="/") ПОДРОБНЫЕ УРОКИ
      Slogan

    Banner.namaz-detailed(
      type="namaz-detailed"
      title="НАМАЗ: ПОДРОБНО"
      shortDesc="Детализированное обучение намазу"
      desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
        понять принцип исполнения большинства намазов. Если Вы научитесь \
        читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
      descUpBorder
    )
      template(slot="buttons")
        AppButton(link="/" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      .table
        NamazInfo(
          type="fadjr"
          title="ФАДЖР"
          desc="Утренний намаз"
          startTime="00:19"
          endTime="23:42"
          :namaz1Count=2
          namaz1Type="сунны"
          :namaz2Count=2
          namaz2Type="фарда"
        )
        NamazInfo(
          type="dhuhr"
          title="ЗУХР"
          desc="Обеденный намаз"
          startTime="06:59"
          endTime="07:42"
          :namaz1Count=4
          namaz1Type="сунны"
          :namaz2Count=4
          namaz2Type="фарда"
          :namaz3Count=2
          namaz3Type="сунны"
        )
        NamazInfo(
          type="asr"
          title="АСР"
          desc="Предвечерний намаз"
          startTime="06:59"
          endTime="07:42"
          :namaz1Count=4
          namaz1Type="фарда"
        )
        NamazInfo(
          type="maghrib"
          title="МАГРИБ"
          desc="Вечерний намаз"
          startTime="06:59"
          endTime="07:42"
          :namaz1Count=3
          namaz1Type="фарда"
          :namaz2Count=2
          namaz2Type="сунны"
        )
        NamazInfo(
          type="isha"
          title="ИША"
          desc="Ночной намаз"
          startTime="18:59"
          endTime="07:42"
          :namaz1Count=4
          namaz1Type="фарда"
          :namaz2Count=2
          namaz2Type="сунны"
        )
        NamazInfo(
          type="witr"
          title="ВИТР"
          desc="Заключительный намаз"
          startTime="После намаза Иша"
          endTime="07:42"
          :namaz1Count=3
          namaz1Type="ваджиба"
        )
      .buttons
      //-   AppButton(link="/" blue) ВСЕ ВИДЫ НАМАЗА
      //-   AppButton.color-2d(link="/") УСЛОВИЯ НАМАЗА

    AppSection(title="ВИДЫ ОЧИЩЕНИЯ")
      //- Banner(
      //-   type="gusl"
      //-   descStyleBlackBlue
      //-   title="ГУСЛЬ"
      //-   shortDesc="Полное омовение"
      //-   desc="Полное ритуальное омовение водой всего тела целиком. В ряде \
      //-     случаев тахарат недостаточен для достижения ритуальной чистоты"
      //- )
      //-   template(slot="buttons")
      //-     AppButton(link="/tahharah/gusl" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      //- Banner(
      //-   type="taharat"
      //-   descStyleBlackBlue
      //-   descWithMargin
      //-   title="ТАХАРАТ"
      //-   shortDesc="Малое омовение"
      //-   desc="Малое омовение является доступным и простым способом очищения \
      //-     и состоит всего из 4 фардов."
      //- )
      //-   template(slot="buttons")
      //-     AppButton(link="/tahharah/wudu" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
</template>

<script>
import Banner from '@/components/Banner.vue';
import AppButton from '@/components/AppButton.vue';
import AppSection from '@/components/app-section/AppSection.vue';
import Slogan from '@/components/slogan/Slogan.vue';
import NamazInfo from '@/components/namaz-info/NamazInfo.vue';

export default {
  components: {
    Banner,
    AppButton,
    AppSection,
    Slogan,
    NamazInfo,
  },
};
</script>

<style lang="scss" scoped>
.namaz-detailed {
  .table {
    display: flex;
    flex-flow: column wrap;
    width: 2 * 538px + 1px;
    height: 3 * 134px + 1px;
    margin-right: auto;
    margin-left: auto;
    border-right: 1px solid #c7d2da;
    border-bottom: 1px solid #c7d2da;
    @media (max-width: $mobile) {
      width: 100%;
      height: initial;
      padding: 0 20px;
      border: none;
    }
  }
  .buttons {
    text-align: center;
    // padding: 75px 0; Revert in Banner height: 1031
    padding: 40px 0;
    @media (max-width: $mobile) {
      padding: 20px 0;
    }
    a {
      margin-right: 10px;
    }
  }
}
.color-2d {
  color: #2d2d2d;
}
</style>
