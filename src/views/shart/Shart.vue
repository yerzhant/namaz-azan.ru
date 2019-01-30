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
        section.shart-section(v-for="section in sections" :key="section.id")
          h2.shart-header(v-if="section.title") {{ section.title }}
          div(v-html="section.text")

    .line
    AppSection(title="УСЛОВИЯ НАМАЗА" regular bg1)
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
            AppButton(link="/shart/makan" blue :height="36") ЧИТАТЬ ДАЛЕЕ
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
            AppButton(link="/shart/tahharah" blue :height="36") ЧИТАТЬ ДАЛЕЕ
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
            AppButton(link="/shart/awrah" blue :height="36") ЧИТАТЬ ДАЛЕЕ
        Banner(
          type="fard qibla"
          :shadow="$store.state.namaz === 'qibla'"
          descStyleBlackBlue
          descWithMargin2
          title="КИБЛА"
          shortDesc="4 условие намаза"
          desc="Кибла - это направление на Каабу, которая находится в Заповедной мечети в Мекке."
        )
          template(slot="buttons")
            AppButton(link="/shart/qibla" blue :height="36") ЧИТАТЬ ДАЛЕЕ
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
            AppButton(link="/shart/zaman" blue :height="36") ЧИТАТЬ ДАЛЕЕ
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
            AppButton(link="/shart/niet" blue :height="36") ЧИТАТЬ ДАЛЕЕ

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
        AppButton(link="/tutorial/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/fadjr/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/dhuhr/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/asr/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/maghrib/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/isha/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
</template>

<script>
import AppSection from '@/components/app-section/AppSection.vue';
import AppButton from '@/components/AppButton.vue';
import Banner from '@/components/Banner.vue';
import axios from 'axios';

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
      const { type } = this.$route.params;
      this.$store.commit('setNamaz', type);
      this.$store.commit('setMenu', null);
      axios.get(`/api/namaz/shart/${type}`).then(r => {
        this.title = r.data.title;
        this.shortDesc = r.data.shortDesc;
        this.desc = r.data.desc;
        this.sections = r.data.sections;
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
    this.$store.commit('setMobileHeaderStatus', 'Условия намаза');
  },
  components: {
    AppSection,
    AppButton,
    Banner,
  },
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
</style>
