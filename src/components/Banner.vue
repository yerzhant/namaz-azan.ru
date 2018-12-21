<template lang="pug">
  section.banner(:class="type")
    .top
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
    .bottom
      slot
</template>

<script>
import ActionDesc from '@/components/ActionDesc.vue';

export default {
  props: {
    type: String,
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
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
}

.top {
  display: flex;
  flex-grow: 1;
  width: 2 * 538px + 1px;
  margin-right: auto;
  margin-left: auto;

  > * {
    flex-basis: 50%;
  }
}
.bottom {
  width: 100%;
}

.desc {
  align-self: center;
}

.image {
  background-repeat: no-repeat;
  background-position: center;
}

.first-namaz {
  background-image: url(../views/app-main/first-namaz-bg.jpg);
  height: 610px;

  .top {
    flex-direction: row-reverse;
  }
  .image {
    background-image: url(../views/app-main/first-namaz.png);
    background-position: bottom right;
  }
}

.namaz-detailed {
  background-image: url(../views/app-main/namaz-detailed-bg.jpg);
  height: 1031px;

  .image {
    background-image: url(../views/app-main/namaz-detailed.png);
  }
}

.gusl {
  background-image: url(../views/app-main/gusl-bg.jpg);
  width: 1076px;
  height: 268px;
  border: 1px solid #d4dee8;

  .top {
    flex-direction: row-reverse;
  }
  .image {
    background-image: url(../views/app-main/gusl.png);
    background-position: bottom;
  }
}
</style>
