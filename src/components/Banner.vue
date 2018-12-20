<template lang="pug">
  section.banner(:class="[type, {reverse: reverse}]")
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
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;

  &.reverse {
    .top {
      flex-direction: row-reverse;
    }

    .desc .action-desc {
      margin-left: 0;
    }
  }
}

.top {
  display: flex;
  flex-grow: 1;

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
  background-position: center;
}

.first-namaz {
  background-image: url(../views/app-main/first-namaz-bg.jpg);
  height: 610px;

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
    background-position: bottom right;
  }
}
</style>
