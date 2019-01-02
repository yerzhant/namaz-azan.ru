<template lang="pug">
  section.tahharah
    NamazHeader(
      :type="`tahharah ${$store.state.namaz}`"
      title="ФАДЖР: УТРЕННИЙ НАМАЗ"
      shortDesc="Вуду - это малое ритуальное омовение тела, которое является простым и \
                 доступным способом достичь состояния ритаульной чистоты, кроме тех \
                 случаев, когда требуется полное омовение - гусль."
    )

    section.admin-text
      section.section
        h2.header Когда ГУСЛЬ обязателен
        <div>
        <div>Действия и состояния, делающие обязательным совершение гусля:<br /> &nbsp;</div>

        <ol>
          <li>
          <div><strong>Оргазм. &nbsp;</strong>Оргазм и выделение спермы (у мужчины) делает обязательным совершение гусля как для мужчины, так и для женщины, даже если оргазм случился не в результате полового акта, а, например, при поллюции.<br /> &nbsp;</div>
          </li>
          <li>
          <div><strong>Половой акт. </strong>Даже если он не сопровождался оргазмом. Если быть более точным, делает обязательным совершение гусля уже само введение головки полового члена мужчины во влагалище женщины, даже если за этим ничего не последовало.<br /> &nbsp;</div>
          </li>
          <li>
          <div><strong>После завершения хайда </strong>(менструации) и нифаса (послеродового кровотечения) у женщины.<br /> &nbsp;</div>
          </li>
          <li>
          <div><strong>Смерть.&nbsp;</strong>Обязательно совершить полное омовение тела умершего мусульманина перед погребением. Это коллективная обязанность (фард кифая), возложенная Шариатом на общину мусульман местности, где скончался этот мусульманин.</div>
          </li>
        </ol>

        <div>&nbsp;</div>

        <div>
        <div class="azan--appendix">
        <div><strong>Тому</strong><strong>, кто принимает Ислам, обязательно совершить гусль, если до Ислама он совершал то, после чего необходим гусль.</strong></div>
        </div>
        </div>
        </div>

      section.section
        h2.header Когда ГУСЛЬ обязателен
        <ul>
          <li>перед пятничным намазом (джума);<br /> &nbsp;</li>
          <li>перед двумя праздничными намазами (Ураза-байрам и Курбан-байрам);<br /> &nbsp;</li>
          <li>перед входом в состояние ихрама для хаджа или умры;<br /> &nbsp;</li>
          <li>в день стояния на Арафа (9-го числа месяца Зуль-Хиджжа) после наступления времени дневного намаза (зухр).</li>
        </ul>

    .line
    AppSection(title="ДРУГИЕ ВИДЫ ОЧИЩЕНИЯ")
      .fards
        Banner(
          type="fard gusl blue"
          :shadow="$store.state.namaz === 'gusl'"
          descStyleBlackBlue
          descWithMargin2
          title="ГУСЛЬ"
          shortDesc="Полное омовение"
          desc="Полное ритуальное омовение водой всего тела целиком. По-арабски \
                полное омовение носит название “Гусль”."
        )
          template(slot="buttons")
            AppButton(link="/tahharah/gusl" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
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
        AppButton(link="/" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/fadjr" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/dhuhr" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/asr" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/maghrib" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ

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
            AppButton(link="/isha" blue :height="36") НАЧАТЬ ОБУЧЕНИЕ
</template>

<script>
import NamazHeader from '@/components/namaz-header/NamazHeader.vue';
import AppSection from '@/components/app-section/AppSection.vue';
import AppButton from '@/components/AppButton.vue';
import Rukn from '@/components/rukn/Rukn.vue';
import Banner from '@/components/Banner.vue';

export default {
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
}
.fards {
  > * {
    margin-bottom: 17px;
  }
}
.admin-text {
  font-family: $pt-sans;
  font-size: 16px;
  line-height: 24px;
  width: 1018px;
  margin: 30px auto 0;
  .section {
    margin-bottom: 50px;
    padding-bottom: 50px;
    border-bottom: 1px dashed #aab9c3;
    &:last-child {
      margin-bottom: 40px;
      border-bottom: none;
    }
  }
  .header {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }
  ol {
    font-weight: bold;
    padding-left: 16px;
    div {
      font-weight: initial;
    }
  }
  ul {
    list-style: none;
    li {
      padding-left: 14px;
      background: url(./list-item.png) no-repeat left 11px;
    }
  }
  .azan--appendix {
    font-weight: bold;
    border: 1px solid #ea7555;
    border-left-width: 7px;
    padding: 25px 13px;
    background-color: #fff;
    margin-top: 10px;
  }
}
</style>
