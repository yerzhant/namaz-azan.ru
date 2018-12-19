<template lang="pug">
  section.banner(:class="{reverse: reverse}" :style="`background-image: url(${bgImage})`")
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
      img(:src="image")
</template>

<script>
import ActionDesc from '@/components/ActionDesc.vue';

export default {
  props: {
    type: String,
    image: String,
    bgImage: String,
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
  &.reverse {
    flex-direction: row-reverse;
    .desc .action-desc {
      margin-left: 0;
    }
    .image {
      img {
        float: right;
      }
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
  img {
    display: block;
  }
}
</style>
