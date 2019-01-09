<template lang="pug">
  section.tahharah
    NamazHeader(
      :type="`tahharah ${$store.state.namaz}`"
      title="ГУСЛЬ"
      subTitle="Полное омовение"
      shortDesc="После совершения определенных действий Шариат предписывает \
                 мусульманину совершить ритуальное купание – омовение водой всего \
                 тела целиком. По-арабски полное омовение носит название «гусль»."
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
          :shadow="$store.state.namaz === 'ghusl'"
          descStyleBlackBlue
          descWithMargin2
          title="ГУСЛЬ"
          shortDesc="Полное омовение"
          desc="Полное ритуальное омовение водой всего тела целиком. По-арабски \
                полное омовение носит название “Гусль”."
        )
          template(slot="buttons")
            AppButton(link="/tahharah/ghusl" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
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

    Banner(
      type="namaz-detailed short"
      title="НАМАЗ: ПОДРОБНО"
      shortDesc="Детализированное обучение намазу"
      desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
        понять принцип исполнения большинства намазов. Если Вы научитесь \
        читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
      descUpBorder
    )
      template(slot="buttons")
        AppButton(link="/tutorial/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

    .line
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
      sections: null,
    };
  },
  methods: {
    getData() {
      const { type } = this.$route.params;
      this.$store.commit('setNamaz', type);
      this.$store.commit('setMenu', 'level-2');
      axios.get(`/api/namaz/${type}`).then(r => {
        this.sections = r.data.sections;
        this.$store.commit('setMenuItems', r.data.menu);
      });
    },
  },
  created() {
    this.getData();
    this.$store.commit('setMobileHeaderStatus', 'Тахарат');
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
