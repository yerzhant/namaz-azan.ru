<template lang="pug">
  section.tour(:class="type")
    .content
      .section-slide(v-show="type === 'section'")
        .title {{ data.title }}
        .short-desc {{ data.shortDesc }}
        img.moon(src="./moon.png")
        img.moon-m(src="./moon-m.png")
        AppButton(@click="next") ДАЛЕЕ
      .rukn-slide(v-show="type === 'rukn'")
        .prev(@click="previous")
        Rukn(
          ref="rukn"
          tour
          :type="data.type"
          :title="data.title"
          :subTitle="data.subTitle"
          :number="items[index].title"
          :arabic="data.arabic"
          :transcription="data.transcription"
          :translation="data.translation"
          :description="data.description"
          :last="index === items.length - 1"
          @next="next"
        )
        .next(@click="next")
    .progress-bar
      .to-main(@click="$router.push('/')")
        span На главную
      .left.item(@click="slideProgressLeft")
      .items-viewport
        .items(:style="{left: `${progressPosition}px`}")
          .item(
            v-for="(item, i) in items"
            :key="i"
            :class="[item.type, $store.state.gender, {active: i === index}]"
            @click="index = i"
          )
            .title(v-if="item.title") {{ item.title }}
            .sub-title {{ item.subTitle }}
      .right.item(@click="slideProgressRight")
</template>

<script>
import Rukn from '@/components/rukn/Rukn.vue';
import AppButton from '@/components/AppButton.vue';
import items from './items';
import axios from 'axios';

export default {
  data() {
    return {
      index: 0,
      items,
      progressPosition: 0,
    };
  },
  computed: {
    type() {
      return this.items[this.index].type.split(' ')[0];
    },
    data() {
      return this.items[this.index].data;
    },
  },
  watch: {
    index() {
      this.$nextTick(() => {
        this.$refs.rukn.reset();
      });
    },
  },
  methods: {
    previous() {
      if (this.index > 0) this.index--;
      this.normalizeProgressPosition();
    },
    next() {
      if (this.index < this.items.length - 1) this.index++;
      this.normalizeProgressPosition();
      this.$scrollTo('body');
    },
    normalizeProgressPosition() {
      const max = this.getProgressMaxPosition();
      if (this.index < 5) this.progressPosition = 0;
      else if (this.index < 9) this.progressPosition = max / 5;
      else if (this.index < 14) this.progressPosition = (max / 5) * 2;
      else if (this.index < 19) this.progressPosition = (max / 5) * 3;
      else if (this.index < 23) this.progressPosition = (max / 5) * 4;
      else this.progressPosition = max;
    },
    slideProgressLeft() {
      this.progressPosition += 50;
      if (this.progressPosition > 0) this.progressPosition = 0;
    },
    slideProgressRight() {
      const diff = this.getProgressMaxPosition();
      this.progressPosition -= 50;
      if (this.progressPosition < diff) this.progressPosition = diff;
    },
    getProgressMaxPosition() {
      const itemWidth = document.querySelector('.tour .items-viewport .item').offsetWidth;

      return itemWidth * -28 + document.querySelector('.items-viewport').offsetWidth;
    },
    getData() {
      const { gender } = this.$store.state;

      axios.get(`/api/namaz/tour/${gender}`).then(r => {
        r.data.wudu.forEach((w, i) => {
          const { data } = this.items[i + 2];
          data.title = w.kindLabel.toUpperCase();
          data.description = w.text;
        });
      });

      axios.get(`/api/namaz/namaz/${gender}/fadjr/fard`).then(resp => {
        resp.data.rakaats.forEach((rakaat, ra) => {
          let offset = ra === 0 ? 7 : 17;
          rakaat.rukns.forEach((r, i) => {
            if (ra === 1 && i === 8) {
              offset++;
            } else {
              const { data } = this.items[i + offset];
              this.setData(data, r);
            }
          });
        });
      });
    },
    setData(data, rukn) {
      data.title = rukn.title;
      data.subTitle = rukn.subTitle;
      data.arabic = rukn.arabic;
      data.description = rukn.description;
      data.transcription = rukn.transcription;
      data.translation = rukn.translation;
    },
  },
  created() {
    this.getData();
    this.$store.commit('setMobileHeaderStatus', 'Мой первый намаз');
  },
  components: {
    Rukn,
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.tour {
  display: flex;
  flex-direction: column;
  background-color: #f7fcff;
  height: calc(100vh - 50px);
  @media (max-width: $mobile) {
    background-color: #fff;
    &.section {
      height: calc(100vh - 90px - 44px);
    }
    &.rukn {
      height: auto;
    }
  }
}
.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.progress-bar {
  display: flex;
  height: 65px;
  border-top: 1px solid #cdd5db;
  @media (max-width: $mobile) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 44px;
  }
}
.to-main {
  display: flex;
  align-items: center;
  width: 134px;
  height: 100%;
  font-size: 12px;
  color: #99aac6;
  padding-left: 45px;
  background: url(./to-main.png) no-repeat 15px;
  background-color: #21334f;
  cursor: pointer;
  @media (max-width: $mobile) {
    width: 44px;
    background-position: center;
    background-size: 15px;
    span {
      display: none;
    }
  }
  &:hover {
    color: #bac8df;
    background-image: url(./to-main-active.png);
    background-color: #14243d;
  }
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 100%;
  user-select: none;
  cursor: pointer;
  @media (max-width: $mobile) {
    width: 44px;
  }
  &.section {
    flex-direction: column;
    font-size: 13px;
    color: #fff;
    background-color: #2b9ace;
    @media (max-width: $mobile) {
      font-size: 9px;
    }
    .title {
      font-size: 16px;
      @media (max-width: $mobile) {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  &.rukn {
    position: relative;
    border-right: 1px solid #cdd5db;
    background-repeat: no-repeat;
    background-position: center;
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      content: '';
      background-color: rgba($color: #eff5f9, $alpha: 0.9);
    }
    @media (max-width: $mobile) {
      background-size: cover;
    }
    .title {
      z-index: 1;
      font-weight: bold;
      font-size: 24px;
      color: #2b87ce;
      @media (max-width: $mobile) {
        font-size: 20px;
      }
    }
    &.active,
    &:hover {
      &::before,
      .title {
        display: none;
      }
    }
    &.ghusl {
      background-image: url(./ghusl.jpg);
    }
    &.wudu-face {
      background-image: url(./wudu-face.jpg);
    }
    &.wudu-hands {
      background-image: url(./wudu-hands.jpg);
    }
    &.wudu-head {
      background-image: url(./wudu-head.jpg);
    }
    &.wudu-legs {
      background-image: url(./wudu-legs.jpg);
    }
    &.niet {
      background-image: url(./niet.jpg);
    }
    &.takbir {
      background-image: url(./takbir.jpg);
    }
    &.qiyam {
      background-image: url(./qiyam.jpg);
    }
    &.ruku {
      background-image: url(./ruku.jpg);
    }
    &.sadjda {
      background-image: url(./sadjda.jpg);
    }
    &.sitting {
      background-image: url(./sitting.jpg);
    }
    &.salam-right {
      background-image: url(./salam-right.jpg);
    }
    &.salam-left {
      background-image: url(./salam-left.jpg);
    }
    &.dua {
      background-image: url(./dua.jpg);
    }
    &.woman {
      &.niet {
        background-image: url(./niet-woman.jpg);
      }
      &.takbir {
        background-image: url(./takbir-woman.jpg);
      }
      &.qiyam {
        background-image: url(./qiyam-woman.jpg);
      }
      &.ruku {
        background-image: url(./ruku-woman.jpg);
      }
      &.sadjda {
        background-image: url(./sadjda-woman.jpg);
      }
      &.sitting {
        background-image: url(./sitting-woman.jpg);
      }
      &.salam-right {
        background-image: url(./salam-right-woman.jpg);
      }
      &.salam-left {
        background-image: url(./salam-left-woman.jpg);
      }
      &.dua {
        background-image: url(./dua-woman.jpg);
      }
    }
  }
}
.left {
  background: url(./left.png) no-repeat center;
  background-color: #142b4f;
  border-left: 1px solid #3d4d66;
  &:hover {
    background-image: url(./left-active.png);
  }
  @media (max-width: $mobile) {
    background-size: 6px;
  }
}
.right {
  background: url(./right.png) no-repeat center;
  background-color: #142b4f;
  &:hover {
    background-image: url(./right-active.png);
  }
  @media (max-width: $mobile) {
    background-size: 6px;
  }
}
.items-viewport {
  width: calc(100% - 134px - 65px * 2);
  overflow: hidden;
  @media (max-width: $mobile) {
    width: calc(100% - 44px * 3);
  }
}
.items {
  position: relative;
  display: flex;
  width: 134px + 65px * 30;
  height: 100%;
  @media (max-width: $mobile) {
    width: 44px * 31;
  }
}
.section-slide {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(./section-bg.png) no-repeat top;
  background-color: #ecf7fd;
  .title {
    font-size: 36px;
    color: #002f56;
    margin-bottom: 5px;
  }
  .short-desc {
    font-size: 15px;
    line-height: 24px;
    width: 635px;
    @media (max-width: $mobile) {
      width: 100%;
      padding: 0 20px;
      margin-top: 10px;
    }
  }
  .moon {
    margin-top: 23px;
    margin-bottom: 32px;
    @media (max-width: $mobile) {
      display: none;
    }
    &-m {
      width: 265px;
      margin-top: 23px;
      margin-bottom: 32px;
      display: none;
      @media (max-width: $mobile) {
        display: inline;
      }
    }
  }
}
.rukn-slide {
  flex-grow: 1;
  display: flex;
  align-items: center;
  @media (max-width: $mobile) {
    padding: 33px 20px;
    .prev,
    .next {
      display: none;
    }
  }
}
.prev {
  flex-grow: 1;
  height: 200px;
  cursor: pointer;
  background: url(./prev.png) no-repeat center;
}
.next {
  flex-grow: 1;
  height: 200px;
  cursor: pointer;
  background: url(./next.png) no-repeat center;
}
</style>
