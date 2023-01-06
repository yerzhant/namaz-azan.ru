<template lang="pug">
section.condition
  Banner(
    :type="`shart ${$store.state.namaz}`"
    :title="title"
    :shortDesc="shortDesc"
    :desc="desc"
    descTopBorder
    descBottomBorder
    descStyleBlackBlue0
  )

  AppSection(:title="title" regular)
    section.admin-text
      section.admin-section(v-for="section in sections" :key="section.id")
        h2.admin-header(v-if="section.title") {{ section.title }}
        div(v-html="section.text")

  .line
  AppSection(title="УСЛОВИЯ НАМАЗА" regular bg1 v-if="false && (isShuruut || isShart)")
    .fards
      Banner(
        type="fard makan"
        :shadow="$store.state.namaz === 'makan'"
        descStyleBlackBlue
        descWithMargin2
        title="ЧИСТОТА МЕСТА"
        shortDesc="1 условие намаза"
        desc="Это условие означает отсутствие канонически нечистых вещей (наджасы) \
          на теле и одежде молящегося и на месте совершения намаза. "
      )
        template(slot="buttons")
          AppButton(:link="`${routePrefix}/shart/makan`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
      Banner(
        type="fard tahharah"
        :shadow="$store.state.namaz === 'tahharah'"
        descStyleBlackBlue
        descWithMargin2
        title="ОМОВЕНИЕ"
        shortDesc="2 условие намаза"
        desc="Совершающему намаз надлежит находится в состоянии ритуальной \
          чистоты - иметь малое омовение (вуду) и полное омовение (гусль)."
      )
        template(slot="buttons")
          AppButton(:link="`${routePrefix}/shart/tahharah`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
      Banner(
        type="fard awrah"
        :shadow="$store.state.namaz === 'awrah'"
        descStyleBlackBlue
        descWithMargin2
        title="АУРАТ"
        shortDesc="3 условие намаза"
        desc="Аурат - это области тела, которые следует обязательно закрывать \
          перед посторонними. Намаз с открытым ауратом недействителен."
      )
        template(slot="buttons")
          AppButton(:link="`${routePrefix}/shart/awrah`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
      Banner(
        type="fard qiblah"
        :shadow="$store.state.namaz === 'qiblah'"
        descStyleBlackBlue
        descWithMargin2
        title="КИБЛА"
        shortDesc="4 условие намаза"
        desc="Кибла - это направление на Каабу, которая находится в Заповедной мечети в Мекке."
      )
        template(slot="buttons")
          AppButton(:link="`${routePrefix}/shart/qiblah`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
      Banner(
        type="fard zaman"
        :shadow="$store.state.namaz === 'zaman'"
        descStyleBlackBlue
        descWithMargin2
        title="ВРЕМЯ"
        shortDesc="5 условие намаза"
        desc="Каждый намаз необходимо совершить в установленное для него время. \
          Намаз совершенный до наступления его времени недействителен."
      )
        template(slot="buttons")
          AppButton(:link="`${routePrefix}/shart/zaman`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
      Banner(
        type="fard niet"
        :shadow="$store.state.namaz === 'niet'"
        descStyleBlackBlue
        descWithMargin2
        title="НАМЕРЕНИЕ"
        shortDesc="6 условие намаза"
        desc="Осознанное решение выполнить намаз выраженное в мысленной форме \
          является намерением. Намаз без намерения недействителен."
      )
        template(slot="buttons")
          AppButton(:link="`${routePrefix}/shart/niet`" blue :height="36") ЧИТАТЬ ДАЛЕЕ

  AppSection.general-provisions(
    title="ОБЩИЕ ПОЛОЖЕНИЯ НАМАЗА" regular bg1 fullContentWidth noBottomPadding
  )
    GeneralProvisions(:initialIndex="nextGeneralProvisionIndex")
  AppSection.mobile-general-provisions(title="ОБЩИЕ ПОЛОЖЕНИЯ НАМАЗА" regular)
    MobileGeneralProvisions

  Banner(
    type="namaz-detailed short"
    title="НАМАЗ: ПОДРОБНО"
    shortDesc="Детализированное обучение намазу"
    desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
      понять принцип исполнения большинства намазов. Если Вы научитесь \
      читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
    descTopBorder
  )
    template(slot="buttons")
      AppButton(:link="`${routePrefix}/tutorial/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

  .line
  AppSection(title="ОБЯЗАТЕЛЬНЫЕ НАМАЗЫ" regular bg1)
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
          AppButton(:link="`${routePrefix}/fadjr/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
          AppButton(:link="`${routePrefix}/dhuhr/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
          AppButton(:link="`${routePrefix}/asr/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
          AppButton(:link="`${routePrefix}/maghrib/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

      Banner(
        type="fard isha"
        :shadow="$store.state.namaz === 'isha'"
        descStyleBlackBlue
        descWithMargin2
        title="ИША"
        shortDesc="Ночной намаз"
        desc="Детальный обзор ночного намаза “Иша”, состоящего из 4 ракаатов \
          фарда. Иша является последним из пяти обязательных намазов."
      )
        template(slot="buttons")
          AppButton(:link="`${routePrefix}/isha/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
</template>

<script>
import AppSection from "@/components/app-section/AppSection.vue";
import AppButton from "@/components/AppButton.vue";
import Banner from "@/components/Banner.vue";
import GeneralProvisions from "@/components/general-provisions/GeneralProvisions.vue";
import MobileGeneralProvisions from "@/components/mobile-general-provisions/MobileGeneralProvisions.vue";
import routePrefix from "@/mixins/routePrefix";
import axios from "axios";

export default {
  data() {
    return {
      title: null,
      shortDesc: null,
      desc: null,
      sections: null,
    };
  },
  methods: {
    getData() {
      let headerStatus = "Условия намаза";
      if (!this.isShart) {
        headerStatus = "Общие положения";
      }
      const { type, madhhab } = this.$route.params;
      this.$store.commit("setMobileHeaderStatus", headerStatus);
      this.$store.commit("setNamaz", type);
      this.$store.commit("setMenu", null);
      axios.get(`/api/namaz/shart/${madhhab}/${type}`).then((r) => {
        this.title = r.data.title;
        this.shortDesc = r.data.shortDesc;
        this.desc = r.data.desc;
        this.sections = r.data.sections;
      });
    },
  },
  computed: {
    isShart() {
      return this.$route.params.section === "shart";
    },
    isShuruut() {
      return this.$route.params.type === "shuruut";
    },
    nextGeneralProvisionIndex() {
      switch (this.$route.params.type) {
        case "ma-hiya":
          return 1;

        case "aqsaam":
          return 2;

        case "shuruut":
          return 3;

        case "azan-iqamat":
          return 4;

        case "aadaab":
        case "fasaad":
          return 5;

        default:
          return 0;
      }
    },
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
  components: {
    AppSection,
    AppButton,
    Banner,
    GeneralProvisions,
    MobileGeneralProvisions,
  },
  mixins: [routePrefix],
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #bfcad1;

  @media (max-width: $mobile) {
    display: none;
  }
}

.fards {
  > * {
    margin-bottom: 17px;
  }
}

.admin-text {
  @media (max-width: $mobile) {
    padding: 0;
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
