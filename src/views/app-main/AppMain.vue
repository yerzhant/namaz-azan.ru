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
      AppButton(:link="`${routePrefix}/tour-salah`" red) ДА, НАЧАТЬ!
      AppButton.color-2d(:link="`${routePrefix}/tutorial/fard`") ПОДРОБНЫЕ УРОКИ
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
      AppButton(:link="`${routePrefix}/tutorial/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
    .table
      NamazInfo(
        type="fadjr"
        title="ФАДЖР"
        :titleLink="`${routePrefix}/fadjr/fard`"
        desc="Утренний намаз"
        :startTime="$store.state.namazTimes.today[0]"
        :endTime="$store.state.namazTimes.today[1]"
        :namaz1Count=2
        namaz1Type="сунны"
        :namaz1Link="`${routePrefix}/fadjr/sunnah`"
        :namaz2Count=2
        namaz2Type="фарда"
        :namaz2Link="`${routePrefix}/fadjr/fard`"
      )
      NamazInfo(
        type="dhuhr"
        title="ЗУХР"
        :titleLink="`${routePrefix}/dhuhr/fard`"
        desc="Обеденный намаз"
        :startTime="$store.state.namazTimes.today[2]"
        :endTime="$store.state.namazTimes.today[3]"
        :namaz1Count=4
        namaz1Type="сунны"
        :namaz1Link="`${routePrefix}/dhuhr/sunnah-before`"
        :namaz2Count=4
        namaz2Type="фарда"
        :namaz2Link="`${routePrefix}/dhuhr/fard`"
        :namaz3Count=2
        namaz3Type="сунны"
        :namaz3Link="`${routePrefix}/dhuhr/sunnah-after`"
      )
      NamazInfo(
        type="asr"
        title="АСР"
        :titleLink="`${routePrefix}/asr/fard`"
        desc="Предвечерний намаз"
        :startTime="$store.state.namazTimes.today[3]"
        :endTime="$store.state.namazTimes.today[4]"
        :namaz1Count=4
        namaz1Type="фарда"
        :namaz1Link="`${routePrefix}/asr/fard`"
      )
      NamazInfo(
        type="maghrib"
        title="МАГРИБ"
        :titleLink="`${routePrefix}/maghrib/fard`"
        desc="Вечерний намаз"
        :startTime="$store.state.namazTimes.today[4]"
        :endTime="$store.state.namazTimes.today[5]"
        :namaz1Count=3
        namaz1Type="фарда"
        :namaz1Link="`${routePrefix}/maghrib/fard`"
        :namaz2Count=2
        namaz2Type="сунны"
        :namaz2Link="`${routePrefix}/maghrib/sunnah`"
      )
      NamazInfo(
        type="isha"
        title="ИША"
        :titleLink="`${routePrefix}/isha/fard`"
        desc="Ночной намаз"
        :startTime="$store.state.namazTimes.today[5]"
        :endTime="$store.state.namazTimes.today[0]"
        :namaz1Count=4
        namaz1Type="фарда"
        :namaz1Link="`${routePrefix}/isha/fard`"
        :namaz2Count=2
        namaz2Type="сунны"
        :namaz2Link="`${routePrefix}/isha/sunnah`"
      )
      NamazInfo(
        type="witr"
        title="ВИТР"
        :titleLink="`${routePrefix}/witr/wadjib`"
        desc="Заключительный намаз"
        startTime="После намаза Иша"
        :endTime="$store.state.namazTimes.tomorrow[0]"
        :namaz1Count=3
        namaz1Type="ваджиба"
        :namaz1Link="`${routePrefix}/witr/wadjib`"
      )
    .buttons
    //-   AppButton(:link="`${routePrefix}/al-ahkaamul-aammah/ma-hiya`" blue) ЧТО ТАКОЕ НАМАЗ
    //-   AppButton.color-2d(:link="`${routePrefix}/shart/makan`") УСЛОВИЯ НАМАЗА

  AppSection(title="ОБЩИЕ ПОЛОЖЕНИЯ НАМАЗА" fullContentWidth noBottomPadding)
    GeneralProvisions.general-provisions
    MobileGeneralProvisions.mobile-general-provisions


  AppSection.tahharah(title="ДРУГИЕ ВИДЫ НАМАЗА")
    Banner(
      type="jumuah"
      descStyleBlackBlue
      descWithMargin
      title="ДЖУМА НАМАЗ"
      shortDesc="Пятничный намаз в мечети"
      desc="Коллективная молитва совершение которой предписано Кораном. \
        Является фардом, т.е. обязательной для мужчин."
    )
      template(slot="buttons")
        AppButton(:link="`${routePrefix}/jumuah/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
    Banner(
      type="taraweeh"
      descStyleBlackBlue
      descWithMargin
      title="ТАРАВИХ НАМАЗ"
      shortDesc="Намаз в месяц Рамадан"
      desc="Намаз совершаемый только в месяц Рамадан. \
        Таравих является сунной и состоит из 20 ракаатов."
    )
      template(slot="buttons")
        AppButton(:link="`${routePrefix}/tarawih/sunnah`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
    Banner(
      type="id"
      descStyleBlackBlue
      descWithMargin
      title="ИД НАМАЗ"
      shortDesc="Особенности чтения праздничных намазов"
      desc="Два праздничных намаза в году: Ид аль-фитр (Ораза айт/байрам) \
        и Ид аль-Адха (Курбан айт/байрам) - являются ваджибом для мусульман."
    )
      template(slot="buttons")
        AppButton(:link="`${routePrefix}/id/wadjib`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
    Banner(
      type="mareed"
      descStyleBlackBlue
      descWithMargin
      title="СОЛААТУЛЬ-МАРИИД"
      shortDesc="Намаз больного (сидя)"
      desc="Положения и условия совершения намаза для больных людей."
    )
      template(slot="buttons")
        AppButton(:link="`${routePrefix}/mareed/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
        AppButton(:link="`${routePrefix}/tahharah/ghusl`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
    Banner(
      type="taharat"
      descStyleBlackBlue
      descWithMargin
      title="ВУДУ"
      shortDesc="Малое омовение"
      desc="Малое омовение является доступным и простым способом очищения \
        и состоит всего из 4 фардов."
    )
      template(slot="buttons")
        AppButton(:link="`${routePrefix}/tahharah/wudu`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
    .small-banners
      SmallBanner(
        :link="`${routePrefix}/tahharah/ghusl`"
        type="ghusl"
        title="ГУСЛЬ"
        subTitle="Полное омовение"
        text="Полное ритуальное омовение водой всего тела целиком."
        bg2
      )
      SmallBanner(
        :link="`${routePrefix}/tahharah/istibra`"
        type="istibra"
        title="ИСТИБРА"
        subTitle="Сухое очищение"
        text="Только для мужчин. Выполняется до принятия омовения."
      )
      SmallBanner(
        :link="`${routePrefix}/tahharah/istinja`"
        type="istinja"
        title="ИСТИНДЖА"
        subTitle="Подмывание"
        text="Устранение остатков наджасы после малой или большой нужды."
        bg2
      )
      SmallBanner(
        :link="`${routePrefix}/tahharah/wudu`"
        type="wudu"
        title="ВУДУ"
        subTitle="Малое омовение"
        text="Малое омовение является доступным и простым способом очищения."
      )
      SmallBanner(
        :link="`${routePrefix}/tahharah/masah`"
        type="masah"
        title="МАСХ"
        subTitle="Протирание носков"
        text="Условия протирания водонепроницаемых носков."
        bg2
      )
      SmallBanner(
        :link="`${routePrefix}/tahharah/tayammum`"
        type="tayammum"
        title="ТАЯММУМ"
        subTitle="Когда нет воды"
        text="Протирание частей тела чистой землей либо песком. Служит заменой омовения."
      )

  Recommended
</template>

<script>
import routePrefix from "@/mixins/routePrefix";
import Banner from "@/components/Banner.vue";
import SmallBanner from "@/components/small-banner/SmallBanner.vue";
import AppButton from "@/components/AppButton.vue";
import AppSection from "@/components/app-section/AppSection.vue";
import Slogan from "@/components/slogan/Slogan.vue";
import NamazInfo from "@/components/namaz-info/NamazInfo.vue";
import GeneralProvisions from "@/components/general-provisions/GeneralProvisions.vue";
import MobileGeneralProvisions from "@/components/mobile-general-provisions/MobileGeneralProvisions.vue";
import Recommended from "@/components/Recommended.vue";

export default {
  created() {
    this.$store.commit("setNamaz", null);
    this.$store.commit("setMenu", null);
    this.$store.commit("setMobileHeaderStatus", "Главная");
  },
  components: {
    Banner,
    SmallBanner,
    AppButton,
    AppSection,
    Slogan,
    NamazInfo,
    GeneralProvisions,
    MobileGeneralProvisions,
    Recommended,
  },
  mixins: [routePrefix],
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
    // padding: 75px 0;
    padding: 30px 0;

    @media (max-width: $mobile) {
      padding: 20px 0;
    }

    a {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
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

    .taharat {
      border-top: 1px solid #d4dee8;
    }
  }
}

.general-provisions {
  @media (max-width: $mobile) {
    display: none;
  }
}

.mobile-general-provisions {
  display: none;

  @media (max-width: $mobile) {
    display: block;
  }
}
</style>
