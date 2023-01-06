<template lang="pug">
.mobile-general-provisions
  Banner(
    type="mobile-general-provisions ma-hiya"
    :shadow="$store.state.namaz === 'ma-hiya'"
    descStyleBlackBlue
    title="ЧТО ТАКОЕ НАМАЗ?"
    desc="Намаз – это персидское слово обозначает один из самых важных видов поклонения \
      Всевышнему Аллаху: определенные слова и движения, которые вместе составляют исламский \
      молитвенный обряд."
  )
    template(slot="buttons")
      AppButton(
        :link="`${routePrefix}/al-ahkaamul-aammah/ma-hiya`" blue :height="36"
      ) ЧИТАТЬ ДАЛЕЕ
  Banner(
    type="mobile-general-provisions aqsaam"
    :shadow="$store.state.namaz === 'aqsaam'"
    descStyleBlackBlue
    title="ВИДЫ НАМАЗОВ"
    desc="Намазы делятся на три вида: фард-намазы, совершение которых является обязанностью \
      каждого мусульманина, ваджиб-намазы, которые также обязательны, как и фарз-намазы..."
  )
    template(slot="buttons")
      AppButton(:link="`${routePrefix}/al-ahkaamul-aammah/aqsaam`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
  Banner(
    type="mobile-general-provisions shuruut"
    :shadow="$store.state.namaz === 'shuruut'"
    descStyleBlackBlue
    title="УСЛОВИЯ НАМАЗА"
    desc="Условия намаза – это требования, не считающиеся составной частью самого намаза, \
      выполнять которые, тем не менее, необходимо, чтобы намаз был совершен правильно..."
  )
    template(slot="buttons")
      AppButton(
        :link="`${routePrefix}/al-ahkaamul-aammah/shuruut`" blue :height="36"
      ) ЧИТАТЬ ДАЛЕЕ
  Banner(
    type="mobile-general-provisions azan-iqamat"
    :shadow="$store.state.namaz === 'azan-iqamat'"
    descStyleBlackBlue
    title="АЗАН И ИКАМАТ"
    desc="«Азан» – это арабское слово которое означает «объявление», «извещение». В применении \
      к намазу азан означает громкое объявление людям том, что настало время намаза."
  )
    template(slot="buttons")
      AppButton(
        :link="`${routePrefix}/al-ahkaamul-aammah/azan-iqamat`" blue :height="36"
      ) ЧИТАТЬ ДАЛЕЕ
  Banner(
    type="mobile-general-provisions aadaab"
    :shadow="$store.state.namaz === 'aadaab'"
    descStyleBlackBlue
    title="ЭТИКЕТ (АДАБЫ) НАМАЗА"
    desc="Намаз – это предстояние перед Всевышним Аллахом, прямое обращение к Нему и важнейший \
      вид поклонения. Поэтому человеку следует все время держа это в голове..."
  )
    template(slot="buttons")
      AppButton(:link="`${routePrefix}/al-ahkaamul-aammah/aadaab`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
  Banner(
    type="mobile-general-provisions fasaad"
    :shadow="$store.state.namaz === 'fasaad'"
    descStyleBlackBlue
    title="ЧТО НАРУШАЕТ НАМАЗ"
    desc="После того, как мы научились совершать намаз, нам необходимо также знать о том, \
      что нарушает его действительность, чтобы избегать этих вещей."
  )
    template(slot="buttons")
      AppButton(:link="`${routePrefix}/al-ahkaamul-aammah/fasaad`" blue :height="36") ЧИТАТЬ ДАЛЕЕ
</template>

<script>
import routePrefix from "@/mixins/routePrefix";
import Banner from "@/components/Banner.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    Banner,
    AppButton,
  },
  mixins: [routePrefix],
};
</script>

<style lang="scss" scoped>
.mobile-general-provisions {
  > * {
    margin-bottom: 20px;
  }
}
</style>
