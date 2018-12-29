<template lang="pug">
  .info(:class="[type, {current: isCurrent}]")
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
  data() {
    return {
      isCurrent: false,
    };
  },
  computed: {
    time() {
      return `${this.startTime} - ${this.endTime}${this.isCurrent ? ' (текущий)' : ''}`;
    },
  },
  created() {
    if (this.type !== 'witr') {
      const c = new Date();
      const h = c.getHours();
      const m = c.getMinutes();
      const h1 = this.startTime.split(':')[0];
      const m1 = this.startTime.split(':')[1];
      const h2 = this.endTime.split(':')[0];
      const m2 = this.endTime.split(':')[1];
      if (h1 <= h2) {
        this.isCurrent = (h1 < h || (h1 === h && m1 <= m)) && (h < h2 || (h === h2 && m < m2));
      } else {
        this.isCurrent = h1 < h || (h1 === h && m1 <= m) || h < h2 || (h === h2 && m < m2);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  display: flex;
  align-items: center;
  width: 538px;
  height: 134px;
  border-top: 1px solid #c7d2da;
  border-left: 1px solid #c7d2da;
  font-size: 13px;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0;
    transition: opacity 1s ease;
  }
  &.current {
    &::before {
      opacity: 0.5;
    }
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
}
.number {
  width: 20px;
  height: 38px;
  background-repeat: no-repeat;
  background-position: right;
  margin-right: 20px;
  margin-left: 20px;
}
.details {
  flex-grow: 1;
}
.title {
  font-weight: 500;
  font-size: 18px;
  color: #3a3a3a;
}
.desc {
  color: #505d68;
  margin-top: 3px;
  margin-bottom: 5px;
}
.time {
  font-size: 11px;
  color: #005fa1;
  background: url(./clocks.png) no-repeat left;
  padding-left: 18px;
}
.namaz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 93px;
  text-align: center;
  border-left: 1px solid #c9e7e9;
  .count {
    font-weight: 500;
    font-size: 20px;
    color: #989898;
    margin-bottom: 3px;
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
  &::before {
    background-image: url(./fadjr-bg.jpg);
  }
  .number {
    background-image: url(./1.png);
  }
  .n2 {
    @extend %fardNamaz;
  }
}
.dhuhr {
  background-color: #f7fdf7;
  &::before {
    background-image: url(./dhuhr-bg.jpg);
  }
  .number {
    background-image: url(./2.png);
  }
  .namaz {
    border-color: #c9dee9;
  }
  .n2 {
    @extend %fardNamaz;
  }
}
.asr {
  background-color: #fef7f3;
  &::before {
    background-image: url(./asr-bg.jpg);
  }
  .number {
    background-image: url(./3.png);
  }
  .namaz {
    border-color: #e9dac9;
  }
  .n1 {
    @extend %fardNamaz;
  }
}
.maghrib {
  background-color: #fbf5ff;
  &::before {
    background-image: url(./maghrib-bg.jpg);
  }
  .number {
    background-image: url(./4.png);
  }
  .namaz {
    border-color: #d7dbe1;
  }
  .n1 {
    @extend %fardNamaz;
  }
}
.isha {
  background-color: #edebfd;
  &::before {
    background-image: url(./isha-bg.jpg);
  }
  .number {
    background-image: url(./5.png);
  }
  .namaz {
    border-color: #c4cae5;
  }
  .n1 {
    @extend %fardNamaz;
  }
}
.witr {
  background-color: #efeffd;
  &::before {
    background-image: url(./witr-bg.jpg);
  }
  .namaz {
    border-color: #d7cbe9;
  }
  .n1 {
    @extend %fardNamaz;
  }
}
</style>
