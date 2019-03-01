<template lang="pug">
  section.namaz
    NamazHeader(
      :type="$store.state.namaz"
      :subType="$route.params.subType"
      :typeText="data.typeText"
      :title="data.title"
      :subTitle="data.namaz.title"
      :shortDesc="data.shortDesc"
      :rakaats1="data.rakaats1"
      :rakaats1Title="data.rakaats1Title"
      :rakaats2="data.rakaats2"
      :rakaats2Title="data.rakaats2Title"
      :rakaats3="data.rakaats3"
      :rakaats3Title="data.rakaats3Title"
      :button1="data.button1"
      :button1Link="data.button1Link"
      :button1Blue="data.button1Blue"
      :button2="data.button2"
      :button2Link="data.button2Link"
      :button2Blue="data.button2Blue"
      :button3="data.button3"
      :button3Link="data.button3Link"
      :button3Blue="data.button3Blue"
      :desc="data.namaz.description"
    )
    AppSection(
      :title="rakaat.title"
      :notFirst="rakaat.number !== 1"
      v-for="(rakaat, ra) in data.rakaats"
      :key="ra"
      rakaat
    )
      .line(v-if="rakaat.number === 1")
      Rukn(
        v-for="(rukn, ru) in rakaat.rukns" :key="`${ra}-${ru}`"
        :kind="$route.params.subType"
        :next="getNext(ra, ru)"
        :last="!getNext(ra, ru)"
        :rakaat="rakaat.number.toString()"
        :rakaats="data.rakaats.length.toString()"
        :type="rukn.type"
        :title="rukn.title"
        :subTitle="rukn.subTitle"
        :number="(ru + 1).toString()"
        :shortDesc="rukn.description"
        :arabic="rukn.arabic"
        :transcription="rukn.transcription"
        :translation="rukn.translation"
        :first="ru === 0"
      )

    .line.type-2
    AppSection(title="ОБЯЗАТЕЛЬНЫЕ НАМАЗЫ" bg1 regular)
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
import NamazHeader from '@/components/namaz-header/NamazHeader.vue';
import AppSection from '@/components/app-section/AppSection.vue';
import AppButton from '@/components/AppButton.vue';
import Rukn from '@/components/rukn/Rukn.vue';
import Banner from '@/components/Banner.vue';
import axios from 'axios';

export default {
  data() {
    return {
      data: {
        namaz: {},
      },
    };
  },
  methods: {
    getData() {
      const { type, subType } = this.$route.params;
      this.$store.commit('setNamaz', type);
      this.$store.commit('setMenu', 'level-2');
      axios.get(`/api/namaz/namaz/${this.$store.state.gender}/${type}/${subType}`).then(r => {
        this.data = r.data;
        this.$store.commit('setMenuItems', this.data.menu);
      });
    },
    getNext(ra, ru) {
      const nextRukn = this.data.rakaats[ra].rukns[ru + 1];
      if (nextRukn) {
        return `#r${ra + 1}-${nextRukn.type}`;
      }
      const nextRakaat = this.data.rakaats[ra + 1];
      if (nextRakaat) {
        return `#r${nextRakaat.number}-${nextRakaat.rukns[0].type}`;
      }
      return null;
    },
  },
  watch: {
    $route() {
      this.getData();
    },
    // eslint-disable-next-line
    '$store.state.gender'() {
      this.getData();
    },
  },
  created() {
    this.getData();
    this.$store.commit('setMobileHeaderStatus', 'Намаз');
  },
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
