<template lang="pug">
  section.tour
    .content
      .section-slide(v-show="type === 'section'")
        .title {{ data.title }}
        .short-desc {{ data.shortDesc }}
        img.moon(src="./moon.png")
        AppButton ДАЛЕЕ
      .rukn-slide(v-show="type === 'rukn'")
        .prev
        Rukn(
          tour
          type="niet"
          title="ТАКБИР"
          subTitle="Вступление в намаз"
          number="1"
          content4="Аллаху Акбар!"
        )
        .next
    .progress-bar
      .to-main На главную
      .left.item(@click="slideProgressLeft")
      .items-viewport
        .items(:style="{left: `${progressPosition}px`}")
          .item(v-for="item in items" :class="[item.type, $store.state.gender]")
            .title(v-if="item.title") {{ item.title }}
            .sub-title {{ item.subTitle }}
      .right.item(@click="slideProgressRight")
</template>

<script>
import Rukn from '@/components/rukn/Rukn.vue';
import AppButton from '@/components/AppButton.vue';
import items from './items';

export default {
  data() {
    return {
      index: 1,
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
  methods: {
    slideProgressLeft() {
      this.progressPosition += 50;
      if (this.progressPosition > 0) this.progressPosition = 0;
    },
    slideProgressRight() {
      const diff = -65 * 28 + document.querySelector('.items-viewport').offsetWidth;
      this.progressPosition -= 50;
      if (this.progressPosition < diff) this.progressPosition = diff;
    },
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
}
.content {
  flex-grow: 1;
}
.progress-bar {
  display: flex;
  height: 65px;
  border-top: 1px solid #cdd5db;
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
  &.section {
    flex-direction: column;
    font-size: 13px;
    color: #fff;
    background-color: #2b9ace;
    .title {
      font-size: 16px;
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
    .title {
      z-index: 1;
      font-weight: bold;
      font-size: 24px;
      color: #2b87ce;
    }
    &:hover {
      &::before,
      .title {
        display: none;
      }
    }
    &.gusl {
      background-image: url(./gusl.jpg);
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
}
.right {
  background: url(./right.png) no-repeat center;
  background-color: #142b4f;
  &:hover {
    background-image: url(./right-active.png);
  }
}
.items-viewport {
  width: calc(100% - 134px - 65px * 2);
  overflow: hidden;
}
.items {
  position: relative;
  display: flex;
  width: 134px + 65px * 30;
  height: 100%;
}
.section-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
    width: 650px;
  }
  .moon {
    margin-top: 23px;
    margin-bottom: 32px;
  }
}
.rukn-slide {
  display: flex;
  align-items: center;
  height: 100%;
}
.prev {
  flex-grow: 1;
  height: 100%;
  cursor: pointer;
  background: url(./prev.png) no-repeat center;
}
.next {
  flex-grow: 1;
  height: 100%;
  cursor: pointer;
  background: url(./next.png) no-repeat center;
}
</style>
