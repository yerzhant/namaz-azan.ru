<template lang="pug">
  section.main
    Banner(
      type="first-namaz"
      title="МОЙ ПЕРВЫЙ НАМАЗ"
      shortDesc="Экспресс обзор намаза для новичков"
      desc="Насколько сложно или просто читать намаз?  Что бы выяснить это мы \
        подготовили для Вас тур по намазу состоящий всего из 20 шагов. Начните \
        прямо сейчас и через 20 минут Вы будете знать о втором столпе Ислама!"
      descTopBorder
    )
      template(slot="buttons")
        AppButton(link="/first-namaz" red) ДА, НАЧАТЬ!
        AppButton.color-2d(link="/tutorial/fard") ПОДРОБНЫЕ УРОКИ
      Slogan

    Banner.namaz-detailed(
      type="namaz-detailed"
      title="НАМАЗ: ПОДРОБНО"
      shortDesc="Детализированное обучение намазу"
      desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
        понять принцип исполнения большинства намазов. Если Вы научитесь \
        читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
      descTopBorder
    )
      template(slot="buttons")
        AppButton(link="/tutorial/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      .table
        NamazInfo(
          type="fadjr"
          title="ФАДЖР"
          desc="Утренний намаз"
          :startTime="$store.state.namazTimes.today[0]"
          :endTime="$store.state.namazTimes.today[1]"
          :namaz1Count=2
          namaz1Type="сунны"
          namaz1Link="/fadjr/sunnah"
          :namaz2Count=2
          namaz2Type="фарда"
          namaz2Link="/fadjr/fard"
        )
        NamazInfo(
          type="dhuhr"
          title="ЗУХР"
          desc="Обеденный намаз"
          :startTime="$store.state.namazTimes.today[2]"
          :endTime="$store.state.namazTimes.today[3]"
          :namaz1Count=4
          namaz1Type="сунны"
          namaz1Link="/dhuhr/sunnah-before"
          :namaz2Count=4
          namaz2Type="фарда"
          namaz2Link="/dhuhr/fard"
          :namaz3Count=2
          namaz3Type="сунны"
          namaz3Link="/dhuhr/sunnah-after"
        )
        NamazInfo(
          type="asr"
          title="АСР"
          desc="Предвечерний намаз"
          :startTime="$store.state.namazTimes.today[3]"
          :endTime="$store.state.namazTimes.today[4]"
          :namaz1Count=4
          namaz1Type="фарда"
          namaz1Link="/asr/fard"
        )
        NamazInfo(
          type="maghrib"
          title="МАГРИБ"
          desc="Вечерний намаз"
          :startTime="$store.state.namazTimes.today[4]"
          :endTime="$store.state.namazTimes.today[5]"
          :namaz1Count=3
          namaz1Type="фарда"
          namaz1Link="/maghrib/fard"
          :namaz2Count=2
          namaz2Type="сунны"
          namaz2Link="/maghrib/sunnah"
        )
        NamazInfo(
          type="isha"
          title="ИША"
          desc="Ночной намаз"
          :startTime="$store.state.namazTimes.today[5]"
          :endTime="$store.state.namazTimes.today[0]"
          :namaz1Count=4
          namaz1Type="фарда"
          namaz1Link="/isha/fard"
          :namaz2Count=2
          namaz2Type="сунны"
          namaz2Link="/isha/sunnah"
        )
        NamazInfo(
          type="witr"
          title="ВИТР"
          desc="Заключительный намаз"
          startTime="После намаза Иша"
          :endTime="$store.state.namazTimes.tomorrow[0]"
          :namaz1Count=3
          namaz1Type="ваджиба"
          namaz1Link="/witr/wadjib"
        )
      .buttons
      //-   AppButton(link="/" blue) ВСЕ ВИДЫ НАМАЗА
      //-   AppButton.color-2d(link="/") УСЛОВИЯ НАМАЗА

    AppSection.tahharah(title="ВИДЫ ОЧИЩЕНИЯ")
      Banner(
        type="ghusl"
        descStyleBlackBlue
        title="ГУСЛЬ"
        shortDesc="Полное омовение"
        desc="Полное ритуальное омовение водой всего тела целиком. В ряде \
          случаев тахарат недостаточен для достижения ритуальной чистоты"
      )
        template(slot="buttons")
          AppButton(link="/tahharah/ghusl" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      Banner(
        type="taharat"
        descStyleBlackBlue
        descWithMargin
        title="ТАХАРАТ"
        shortDesc="Малое омовение"
        desc="Малое омовение является доступным и простым способом очищения \
          и состоит всего из 4 фардов."
      )
        template(slot="buttons")
          AppButton(link="/tahharah/wudu" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      .small-banners
        SmallBanner(
          link="/tahharah/istibra"
          type="istibra"
          title="ИСТИБАРА"
          subTitle="Сухое очищение"
          text="Только для мужчин. Выполняется до принятия омовения."
        )
        SmallBanner(
          link="/tahharah/istinja"
          type="istinja"
          title="ИСТИНДЖА"
          subTitle="Подмывание"
          text="Устранение остатков наджасы после малой или большой нужды."
          bg2
        )
        SmallBanner(
          link="/tahharah/tayammum"
          type="tayammum"
          title="ТАЯММУМ"
          subTitle="Когда нет воды"
          text="Протирание частей тела чистой землей либо песком. Служит заменой омовения."
        )
        SmallBanner(
          link="/tahharah/ghusl"
          type="ghusl"
          title="ГУСЛЬ"
          subTitle="Полное омовение"
          text="Полное ритуальное омовение водой всего тела целиком."
          bg2
        )
        SmallBanner(
          link="/tahharah/wudu"
          type="wudu"
          title="ТАХАРАТ"
          subTitle="Малое омовение"
          text="Малое омовение является доступным и простым способом очищения."
        )
        SmallBanner(
          link="/tahharah/masah"
          type="masah"
          title="МАСХ"
          subTitle="Протирание носков"
          text="Условия протирания водонепроницаемых носков."
          bg2
        )
</template>

<script>
import Banner from '@/components/Banner.vue';
import SmallBanner from '@/components/small-banner/SmallBanner.vue';
import AppButton from '@/components/AppButton.vue';
import AppSection from '@/components/app-section/AppSection.vue';
import Slogan from '@/components/slogan/Slogan.vue';
import NamazInfo from '@/components/namaz-info/NamazInfo.vue';

export default {
  created() {
    this.$store.commit('setNamaz', null);
    this.$store.commit('setMenu', null);
    this.$store.commit('setMobileHeaderStatus', 'Главная');
  },
  components: {
    Banner,
    SmallBanner,
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
.small-banners {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: $mobile) {
  .tahharah >>> .content {
    > * {
      margin-bottom: 20px;
    }
  }
}
</style>
