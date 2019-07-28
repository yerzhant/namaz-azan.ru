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
      :button1Link="routePrefix + data.button1Link"
      :button1Blue="data.button1Blue"
      :button2="data.button2"
      :button2Link="routePrefix + data.button2Link"
      :button2Blue="data.button2Blue"
      :button3="data.button3"
      :button3Link="routePrefix + data.button3Link"
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
      .line
      RuknCompare(
        v-for="(rukn, ru) in rakaat.rukns" :key="`${ra}-${ru}`"
        :rakaat="rakaat.number.toString()"
        :rakaats="data.rakaats.length.toString()"
        :type="rukn.type"
        :title="rukn.title"
        :subTitle="rukn.subTitle"
        :number="(ru + 1).toString()"
        :shortDesc="rukn.description"
        :first="ru === 0"
      )

    .line.type-2
    AppSection(title="ДРУГИЕ ВИДЫ НАМАЗА" regular)
      .other-namazes
        Banner(
          type="fard blue mareed"
          :shadow="$store.state.namaz === 'mareed'"
          descStyleBlackBlue
          descWithMargin2
          title="СОЛААТУЛЬ-МАРИИД"
          shortDesc="Намаз больного (сидя)"
          desc="Положения и условия совершения намаза для больных людей."
        )
          template(slot="buttons")
            AppButton(:link="`${routePrefix}/mareed/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

        Banner(
          type="fard blue jumuah-2"
          :shadow="$store.state.namaz === 'jumuah'"
          descStyleBlackBlue
          descWithMargin2
          title="ДЖУМА НАМАЗ"
          shortDesc="Пятничный намаз в мечети"
          desc="Коллективная молитва, совершение которой предписанно Кораном. \
                Является фардом (т.е. обязательной) для мусульман - мужчин."
        )
          template(slot="buttons")
            AppButton(:link="`${routePrefix}/jumuah/fard`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

        Banner(
          type="fard blue id-2"
          :shadow="$store.state.namaz === 'id'"
          descStyleBlackBlue
          descWithMargin2
          title="ПРАЗДНИЧНЫЙ НАМАЗ"
          shortDesc="Особенности чтения праздничных намазов"
          desc="Два праздничных намаза в году - на Ид аль-Фитр (Ураза-байрам) и \
                Ид аль-Адха (Курбан-байрам) - являются ваджибом для мусульман."
        )
          template(slot="buttons")
            AppButton(:link="`${routePrefix}/id/wadjib`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

        Banner(
          type="fard blue taraweeh-2"
          :shadow="$store.state.namaz === 'taraweeh'"
          descStyleBlackBlue
          descWithMargin2
          title="ТАРАВИХ"
          shortDesc="Намаз в месяц Рамадан"
          desc="Два праздничных намаза в году - на Ид аль-Фитр (Ураза-байрам) и \
                Ид аль-Адха (Курбан-байрам) - являются ваджибом для мусульман."
        )
          template(slot="buttons")
            AppButton(:link="`${routePrefix}/tarawih/sunnah`" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

</template>

<script>
import NamazHeader from '@/components/namaz-header/NamazHeader.vue';
import AppSection from '@/components/app-section/AppSection.vue';
import AppButton from '@/components/AppButton.vue';
import RuknCompare from '@/components/rukn-compare/RuknCompare.vue';
import Banner from '@/components/Banner.vue';
import routePrefix from '@/mixins/routePrefix';
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
      const { madhhab, type, subType } = this.$route.params;
      this.$store.commit('setNamaz', type);
      this.$store.commit('setMenu', 'level-2');
      axios.get(`/api/namaz/namaz/${madhhab}/${this.$store.state.gender}/${type}/${subType}`).then(r => {
        this.data = r.data;
        this.$store.commit('setMenuItems', this.data.menu);
      });
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
    RuknCompare,
    Banner,
  },
  mixins: [routePrefix],
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
.other-namazes {
  > * {
    margin-bottom: 17px;
  }
}
</style>
