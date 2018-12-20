<template lang="pug">
  .info(:class="type")
    .number
    .details
      .title {{ title }}
      .desc {{ desc }}
      .time {{ time }}
    .namaz.n1(v-if="namaz1Count")
      .count {{ namaz1Count }}
      .type {{ namaz1Type }}
    .namaz.n2(v-if="namaz2Count")
      .count {{ namaz2Count }}
      .type {{ namaz2Type }}
    .namaz.n3(v-if="namaz3Count")
      .count {{ namaz3Count }}
      .type {{ namaz3Type }}
</template>

<script>
export default {
  props: {
    type: String,
    title: String,
    desc: String,
    startTime: String,
    endTime: String,
    namaz1Count: Number,
    namaz1Type: String,
    namaz2Count: Number,
    namaz2Type: String,
    namaz3Count: Number,
    namaz3Type: String,
  },
  computed: {
    time() {
      return `${this.startTime} - ${this.endTime}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  align-items: center;
  width: 540px;
  height: 132px;
  border-top: 1px solid #c7d2da;
  border-left: 1px solid #c7d2da;
  font-size: 13px;
}
.number {
  width: 20px;
}
.title {
  font-size: 18px;
  color: #3a3a3a;
}
.desc {
  color: #505d68;
}
.time {
  font-size: 11px;
  color: #005fa1;
  background: url(./clocks.png) no-repeat left;
  padding-left: 18px;
}
.namaz {
  .count {
    font-size: 20px;
    color: #989898;
  }
  .type {
    color: #898989;
  }
}
%fardNamaz {
  .count {
    color: #4c4c4c;
  }
  .type {
    color: #41474c;
  }
}
.fadjr {
  background-color: #f1fdfd;
  .n2 {
    @extend %fardNamaz;
  }
}
</style>
