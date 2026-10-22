<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
section.tahharah
  NamazHeader(
    :type="`tahharah ${store.namaz}`"
    :title="title"
    :subTitle="subTitle"
    :shortDesc="shortDesc"
  )

  section.admin-text
    section.section(v-for="section in sections" :key="section.id" :id="`section-${section.id}`")
      h2.header {{ section.title }}
      div(v-html="section.text")

  .line
  AppSection(title="ДРУГИЕ ВИДЫ ОЧИЩЕНИЯ")
    .fards
      Banner(
        type="fard ghusl blue"
        :shadow="store.namaz === 'ghusl'"
        descStyleBlackBlue
        descWithMargin2
        title="ГУСЛЬ"
        shortDesc="Полное омовение"
        desc="Полное ритуальное омовение водой всего тела целиком. По-арабски \
          полное омовение носит название “Гусль”."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/tahharah/ghusl`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      Banner(
        type="fard wudu blue"
        descStyleBlackBlue
        descWithMargin2
        title="ВУДУ"
        shortDesc="Малое омовение"
        desc="Малое омовение является доступным и простым способом очищения \
          однако, в ряде случаев, для достижения ритуальной чистоты нужен гусль."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/tahharah/wudu`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      Banner(
        type="fard istibra blue"
        :shadow="store.namaz === 'istibra'"
        descStyleBlackBlue
        descWithMargin2
        title="ИСТИБРА"
        shortDesc="Сухое очищение"
        desc="Только для мужчин. Выполняется до принятия омовения. В определенных \
          случаях мужчине обязательно следует совершить истибару."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/tahharah/istibra`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      Banner(
        type="fard istinja blue"
        :shadow="store.namaz === 'istinja'"
        descStyleBlackBlue
        descWithMargin2
        title="ИСТИНДЖА"
        shortDesc="Подмывание"
        desc="Устранение остатков наджасы после совершения малой или большой нужды."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/tahharah/istinja`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      Banner(
        type="fard tayammum blue"
        :shadow="store.namaz === 'tayammum'"
        descStyleBlackBlue
        descWithMargin2
        title="ТАЯММУМ"
        shortDesc="Когда нет воды"
        desc="Протирание частей тела чистой землей либо песком. Служит заменой омовения."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/tahharah/tayammum`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
      Banner(
        type="fard masah blue"
        :shadow="store.namaz === 'masah'"
        descStyleBlackBlue
        descWithMargin2
        title="МАСХ"
        shortDesc="Протирание носков"
        desc="Условия и порядок протирания водонепроницаемых носков."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/tahharah/masah`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

  Banner(
    type="namaz-detailed short"
    title="НАМАЗ: ПОДРОБНО"
    shortDesc="Детализированное обучение намазу"
    desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
      понять принцип исполнения большинства намазов. Если Вы научитесь \
      читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
    descTopBorder
  )
    template(v-slot:buttons)
      AppButton(:link="`${routePrefix}/tutorial/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

  .line
  AppSection(title="ОБЯЗАТЕЛЬНЫЕ НАМАЗЫ" bg1)
    .fards
      Banner(
        type="fard fadjr"
        :shadow="store.namaz === 'fadjr'"
        descStyleBlackBlue
        descWithMargin2
        title="ФАДЖР"
        shortDesc="Утренний намаз"
        desc="Детальный обзор утреннего намаза “Фаджр”, состоящего из 2 ракаатов \
          фарда. Фаджр является первым из пяти обязательных намазов."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/fadjr/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

      Banner(
        type="fard dhuhr"
        :shadow="store.namaz === 'dhuhr'"
        descStyleBlackBlue
        descWithMargin2
        title="ЗУХР"
        shortDesc="Обеденный намаз"
        desc="Детальный обзор обеденного намаза “Зухр”, состоящего из 4 ракаатов \
          фарда. Зухр является вторым из пяти обязательных намазов."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/dhuhr/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

      Banner(
        type="fard asr"
        :shadow="store.namaz === 'asr'"
        descStyleBlackBlue
        descWithMargin2
        title="АСР"
        shortDesc="Полуденный намаз"
        desc="Детальный обзор послеполуденного намаза “Аср”, состоящего из 4 \
          ракаатов фарда. Аср является третьим из пяти обязательных намазов."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/asr/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

      Banner(
        type="fard maghrib"
        :shadow="store.namaz === 'maghrib'"
        descStyleBlackBlue
        descWithMargin2
        title="МАГРИБ"
        shortDesc="Вечерний намаз"
        desc="Детальный обзор вечернего намаза “Магриб”, состоящего из 3 ракаатов \
          фарда. Магриб является четвёртым из пяти обязательных намазов."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/maghrib/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

      Banner(
        type="fard isha"
        :shadow="store.namaz === 'isha'"
        descStyleBlackBlue
        descWithMargin2
        title="ИША"
        shortDesc="Ночной намаз"
        desc="Детальный обзор ночного намаза “Иша”, состоящего из 4 ракаатов \
          фарда. Иша является последним из пяти обязательных намазов."
      )
        template(v-slot:buttons)
          AppButton(:link="`${routePrefix}/isha/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
</template>

<script>
import NamazHeader from "@/components/namaz-header/NamazHeader.vue";
import AppSection from "@/components/app-section/AppSection.vue";
import AppButton from "@/components/AppButton.vue";
import Banner from "@/components/Banner.vue";
import routePrefix from "@/mixins/routePrefix";
import axios from "axios";
import store from "../../store";

export default {
  data() {
    return {
      store: store(),
      title: null,
      subTitle: null,
      shortDesc: null,
      sections: null,
    };
  },
  methods: {
    getData() {
      const { madhhab, type } = this.$route.params;
      this.store.setNamaz(type);
      this.store.setMenu("level-2");
      axios.get(`/api/namaz/tahharah/${madhhab}/${type}`).then((r) => {
        this.title = r.data.title;
        this.subTitle = r.data.subTitle;
        this.shortDesc = r.data.shortDesc;
        this.sections = r.data.sections;
        this.store.setMenuItems(r.data.menu);
      });
    },
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  created() {
    this.getData();
    this.store.setMobileHeaderStatus("Тахарат");
  },
  components: {
    NamazHeader,
    AppSection,
    AppButton,
    Banner,
  },
  mixins: [routePrefix],
};
</script>

<style lang="scss" scoped>
.tahharah {
  background-color: #f7fcff;
}

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
</style>
