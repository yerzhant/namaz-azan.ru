<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
.pager
  .prev.item(@click="prev")
  .item(v-for="n in pages" :class="{active: n === currentPage}" @click="nth(n)") {{ n }}
  .next.item(@click="next")
</template>

<script>
export default {
  props: {
    itemsPerPage: Number,
    items: Number,
  },
  computed: {
    pages() {
      return Math.ceil(this.items / this.itemsPerPage);
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {
    currentPage() {
      this.$emit("page", this.currentPage);
    },
  },
  methods: {
    prev() {
      if (this.currentPage > 1) this.currentPage--;
    },
    next() {
      if (this.currentPage < this.pages) this.currentPage++;
    },
    nth(n) {
      this.currentPage = n;
    },
  },
};
</script>

<style lang="scss" scoped>
.pager {
  display: flex;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border: 1px solid #dce6eb;
  font-size: 14px;
  color: #717171;
  font-family: $roboto;
  cursor: pointer;

  &:hover,
  &.active {
    color: #fff;
    background-color: #3fa3d2;
    border-color: #3fa3d2;
  }

  &.active {
    cursor: initial;
  }
}

.prev {
  background: url("./prev.png") no-repeat center;

  &:hover {
    background-image: url("./prev-a.png");
  }
}

.next {
  background: url("./next.png") no-repeat center;

  &:hover {
    background-image: url("./next-a.png");
  }
}
</style>
