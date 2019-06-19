<template lang="pug">
  section.rukn(:id="`r${rakaat}-${type}`" :class="[type, {first: first}]")
    .header
      .header-text
        h3.title {{ title }}
        .sub-title(v-if="subTitle") {{ subTitle }}
      .number {{ number }}
    .short-desc(v-html="shortDesc")
    img.image(:src="`/namaz/images/namaz/mareed/${type}.png`")
</template>

<script>
export default {
  props: {
    rakaat: String,
    type: String,
    first: Boolean,
    title: String,
    subTitle: String,
    number: String,
    shortDesc: String,
  },
};
</script>

<style lang="scss" scoped>
.rukn {
  width: 100%;
  padding: 70px 35px;
  background: url(./bg-top.png) no-repeat top;
  &.first {
    background: none;
    padding-top: 86px;
  }
  @media (max-width: $mobile) {
    padding: 60px 0;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px 16px;
  margin-bottom: 17px;
  border-bottom: 1px solid #cbd3db;
  .title {
    font-weight: 500;
    font-size: 20px;
    color: #464747;
  }
  .sub-title {
    font-size: 13px;
    color: #3a73a3;
  }
  .number {
    font-weight: bold;
    font-size: 32px;
    color: #2b87ce;
  }
}
.short-desc {
  font-family: $pt-sans;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 52px;
  padding: 0 7px;
  @media (max-width: $mobile) {
    margin-bottom: 40px;
  }
}
.image {
  display: block;
  @media (max-width: $mobile) {
    width: 100%;
  }
}
</style>
