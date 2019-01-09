<template lang="pug">
  section.namaz
    NamazHeader(
      :type="$store.state.namaz"
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
    AppSection(title="1 РАКААТ" rakaat)
      .line
      Rukn(
        rakaat="1"
        type="niet"
        next="#r1-takbir"
        title="ТАКБИР"
        subTitle="Вступление в намаз"
        number="1"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        description="Аллаху Акбар!"
        first
      )
      Rukn(
        rakaat="1"
        type="takbir"
        title="ТАКБИР"
        subTitle="Вступление в намаз"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="После такбира молящийся складывает руки под пупком так, чтобы правая рука \
          обхватывала мизинцем и большим пальцами запястье левой руки. Указательный, средний \
          и безымянный пальцы при этом расположены вдоль внешней стороны кисти и направлены \
          в сторону локтя. Не шевелитесь без крайней необходимости. Стойте спокойно — чем тише, \
          тем лучше. Если вы хотите почесаться, используйте только одну руку, но не делайте этого \
          без очень серьезной нужды, используя минимум времени и усилий. Всегда стойте прямо, \
          распределяя вес на обе ноги. Всегда смотрите вниз перед собой, не отводите взгляд и не \
          глядите по сторонам. В этом положении сначала читается вступительное дуа «сана» (другое \
          обхватывала мизинцем и большим пальцами запястье левой руки. Указательный, средний \
          и безымянный пальцы при этом расположены вдоль внешней стороны кисти и направлены \
          в сторону локтя. Не шевелитесь без крайней необходимости. Стойте спокойно — чем тише, \
          тем лучше. Если вы хотите почесаться, используйте только одну руку, но не делайте этого \
          без очень серьезной нужды, используя минимум времени и усилий. Всегда стойте прямо, \
          распределяя вес на обе ноги. Всегда смотрите вниз перед собой, не отводите взгляд и не \
          глядите по сторонам. В этом положении сначала читается вступительное дуа «сана» (другое \
          название – «Субханака»)"
      )
      Rukn(
        type="qiyam"
        title="ТАКБИР"
        subTitle="Вступление в намаз"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        rakaat="4"
        type="qiraat"
        kind="sunnaX"
        title="ТАКБИР qiraat"
        subTitle="Вступление в намаз"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="ruku"
        title="ТАКБИР"
        subTitle="Вступление в намаз"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="straight-up"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="sadjda"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="sitting"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu niet"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu hands"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu mouth"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu nose"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu face"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu full-hands"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu head"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu ears-and-neck"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu leg-right"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu leg-left"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="wudu dua"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
    AppSection(title="2 РАКААТ" rakaat notFirst)
      Rukn(
        rakaat="2"
        type="qiyam"
        title="ТАКБИР qiyam"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
        first
      )
      Rukn(
        rakaat="3"
        rakaats="4"
        type="tashahhud"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="salam-right"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="salam-left"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="dua"
        next="/"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
      Rukn(
        type="qunoot"
        next="/"
        title="ТАКБИР qunoot"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        transcription="Аллаху Акбар!"
        translation="2"
        arabic="3"
        description="4"
      )
    section(v-if="$store.state.namaz === 'wudu'")
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

      Banner.namaz-detailed(
        type="namaz-detailed short"
        title="НАМАЗ: ПОДРОБНО"
        shortDesc="Детализированное обучение намазу"
        desc="Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам \
          понять принцип исполнения большинства намазов. Если Вы научитесь \
          читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!"
        descUpBorder
      )
        template(slot="buttons")
          AppButton(link="/dhuhr/fard" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
      data: {
        namaz: {},
      },
    };
  },
  watch: {
    $route() {
      this.getData();
    },
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
  },
  created() {
    this.getData();
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
