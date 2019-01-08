<template lang="pug">
  section.namaz
    NamazHeader(
      :type="$store.state.namaz"
      typeText="Утро"
      title="ЗУХР"
      subTitle="Обеденный намаз"
      shortDesc="Детальный обзор утреннего намаза “Фаджр”, состоящего из 2 ракаатов \
                 фарда. Фаджр является первым из пяти обязательных намазов."
      rakaats1="2"
      rakaats1Title="Сунны"
      rakaats2="2"
      rakaats2Title="Фарда"
      rakaats3="2"
      rakaats3Title="Фарда"
      button1="СУННА"
      button1Link="#"
      button2="ФАРД"
      button2Link="#"
      button2Blue
      button3="СУННА"
      button3Link="#"
      desc="Фаджр состоит из 2 ракаатов сунны и 2 ракаатов фарда. Время его совершения yачинается \
            с наступлением рассвета и заканчивается за несколько мгновений до восхода солнца. \
            Наилучшее время для совершения утреннего намаза: ближе к концу его времени, когда \
            становятся видны контуры предметов. Однако, не следует излишне откладывать фаджр, \
            что бы не выйти за пределы установленного для него временного промежутка. \
            У мусульманина должно быть достаточно времени для того, что бы подготовится к намазу \
            (совершить омовение, одеться и т.д.) и неторопливо прочитать Коран в обоих ракаатах \
            фаджра до того, как солнце выйдет из-за горизонта. В случае совершения фаджр-намаза \
            в одиночку, предпочительно выполнить его в самом начале времени.  "
    )
    NamazHeader(
      :type="$store.state.namaz"
      title="ФАДЖР: УТРЕННИЙ НАМАЗ"
      shortDesc="Вуду - это малое ритуальное омовение тела, которое является простым и \
                 доступным способом достичь состояния ритаульной чистоты, кроме тех \
                 случаев, когда требуется полное омовение - гусль."
      desc="Фаджр состоит из 2 ракаатов сунны и 2 ракаатов фарда. Время его совершения yачинается \
            с наступлением рассвета и заканчивается за несколько мгновений до восхода солнца. \
            Наилучшее время для совершения утреннего намаза: ближе к концу его времени, когда \
            становятся видны контуры предметов. Однако, не следует излишне откладывать фаджр, \
            что бы не выйти за пределы установленного для него временного промежутка. \
            У мусульманина должно быть достаточно времени для того, что бы подготовится к намазу \
            (совершить омовение, одеться и т.д.) и неторопливо прочитать Коран в обоих ракаатах \
            фаджра до того, как солнце выйдет из-за горизонта. В случае совершения фаджр-намаза \
            в одиночку, предпочительно выполнить его в самом начале времени.  "
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
        content4="Аллаху Акбар!"
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
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="После такбира молящийся складывает руки под пупком так, чтобы правая рука \
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
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
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
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="ruku"
        title="ТАКБИР"
        subTitle="Вступление в намаз"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="straight-up"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="sadjda"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="sitting"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu niet"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu hands"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu mouth"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu nose"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu face"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu full-hands"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu head"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu ears-and-neck"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu leg-right"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu leg-left"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="wudu dua"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
    AppSection(title="2 РАКААТ" rakaat notFirst)
      Rukn(
        rakaat="2"
        type="qiyam"
        title="ТАКБИР qiyam"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
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
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="salam-right"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="salam-left"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="dua"
        next="/"
        title="ТАКБИР"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
      )
      Rukn(
        type="qunoot"
        next="/"
        title="ТАКБИР qunoot"
        number="2"
        shortDesc="Повернувшись в направлении киблы, мусульманин поднимает ладони до уровня ушей \
                   и произносит первый такбир:"
        content1="Аллаху Акбар!"
        content2="2"
        content3="3"
        content4="4"
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

export default {
  methods: {
    getData() {
      const type = this.$route.params.type;
      const subType = this.$route.params.subType;
      this.$store.commit('setNamaz', type);
    },
  },
  created() {
    console.log('ttttttttttt');
    
    console.log(this.$route.params.type);
    this.getData();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$route.params.type);
    
    this.getData();
    next();
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
