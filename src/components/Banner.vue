<template lang="pug">
  section.banner(:class="[type, {reverse: reverse}]")
    .desc
      ActionDesc.action-desc(
        :title="title"
        :shortDesc="shortDesc"
        :desc="desc"
        :descUpBorder="descUpBorder"
        :primaryTitle="primaryTitle"
        :primaryRed="primaryRed"
        :secondaryTitle="secondaryTitle"
      )
    .image
</template>

<script>
import ActionDesc from '@/components/ActionDesc.vue';

export default {
  props: {
    type: String,
    reverse: Boolean,
    title: String,
    shortDesc: String,
    desc: String,
    descUpBorder: Boolean,
    primaryTitle: String,
    primaryRed: Boolean,
    secondaryTitle: String,
  },
  components: {
    ActionDesc,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  background-repeat: no-repeat;

  &.reverse {
    flex-direction: row-reverse;
    .desc .action-desc {
      margin-left: 0;
    }
  }
  > * {
    flex-basis: 50%;
  }
}
.desc {
  align-self: center;
  .action-desc {
    margin-left: 60px;
  }
}
.image {
  background-repeat: no-repeat;
  background-position: bottom;
}
.first-namaz {
  background-image: url(../views/app-main/first-namaz-bg.jpg);
  background-position: -200px -49px;
  .image {
    background-image: url(../views/app-main/first-namaz-qari.png);
    background-position-x: right;
    height: 478px;
  }
}
</style>
