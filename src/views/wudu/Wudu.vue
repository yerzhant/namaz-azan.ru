<template lang="pug">
  section.wudu
    NamazHeader(
      :type="$store.state.namaz"
      title="ВУДУ"
      subTitle="Малое омовение"
      shortDesc="Вуду - это малое ритуальное омовение тела, которое является простым и \
                 доступным способом достичь состояния ритаульной чистоты, кроме тех \
                 случаев, когда требуется полное омовение - гусль."
      desc="Вуду (тахарат) - это малое ритуальное омовение тела. Если человек находится \
            в состоянии, когда у него нет полного омовения (гусля), ему необходимо совершить \
            гусль. В этом случае совершать отдельно вуду ему не нужно. Тому же, у кого гусль есть, \
            достаточно совершить вуду для совершения тех действий, которые нельзя совершать без \
            малого ритуального омовения."
    )

    AppSection(title="ОБЩИЕ ПОЛОЖЕНИЯ" bg1).generals
      section.admin-text
        section.section(v-for="section in sections" :key="section.id" :id="`section-${section.id}`")
          h2.header {{ section.title }}
          div(v-html="section.text")

    AppSection(title="ОБУЧЕНИЕ ВУДУ" rakaat)
      .line
      Rukn(
        v-for="(rukn, r) in rukns" :key="r"
        rakaat="spec"
        kind="wudu"
        :type="rukn.type"
        :title="rukn.title"
        :number="(r + 1).toString()"
        :description="rukn.text"
        :first="r === 0"
        :last="!getNext(r)"
        :next="getNext(r)"
      )

    .line.type-2
    AppSection(title="ДРУГИЕ ВИДЫ ОЧИЩЕНИЯ" bg1)
      .fards
        Banner(
          type="fard wudu"
          :shadow="$store.state.namaz === 'wudu'"
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
          type="fard ghusl"
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
      rukns: null,
    };
  },
  methods: {
    getData() {
      const { type } = this.$route.params;
      this.$store.commit('setNamaz', type);
      this.$store.commit('setMenu', 'level-2');
      axios.get(`/api/namaz/${type}`).then(r => {
        this.sections = r.data.sections;
        this.rukns = r.data.rukns;
        this.$store.commit('setMenuItems', r.data.menu);
      });
    },
    getNext(r) {
      const nextRukn = this.rukns[r + 1];
      if (nextRukn) {
        return `#rspec-${nextRukn.type}`;
      }
      return null;
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
.generals {
  padding-bottom: 0;
  .admin-text {
    margin-top: 0;
    @media (max-width: $mobile) {
      padding: 0;
    }
  }
  .header {
    background: none;
    padding-top: 0;
    border-top: none;
  }
}
</style>
