<template lang="pug">
  section.recommended
    AppSection(title="МАТЕРИАЛЫ О НАМАЗЕ")
      section.grid
        RecommendedDoc(v-for="d in currentItems" :doc="d" :key="d.id")
      Pager(
        :itemsPerPage="itemsPerPage"
        :items="items.length"
        @page="console.log($event)"
      ).pager
</template>

<script>
import AppSection from '@/components/app-section/AppSection.vue';
import RecommendedDoc from '@/components/recommended-doc/RecommendedDoc.vue';
import Pager from '@/components/pager/Pager.vue';
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      itemsPerPage: 3,
      currentPage: 1,
      currentItems: [],
    };
  },
  methods: {
    syncCurrentItems() {
      this.currentItems = [];
      for (let i = 0; i < this.itemsPerPage; i++) {
        const offset = this.itemsPerPage * (this.currentPage - 1);
        if (offset + i >= this.items.length) {
          break;
        }
        this.currentItems.push(this.items[offset + i]);
      }
    },
    getData() {
      axios.get('/api/namaz/recommended').then(r => {
        r.data.docs.forEach(i => this.items.push(i));
        this.syncCurrentItems();
      });
    },
  },
  watch: {
    currentPage() {
      this.syncCurrentItems();
    },
  },
  created() {
    this.getData();
  },
  components: {
    AppSection,
    RecommendedDoc,
    Pager,
  },
};
</script>

<style lang="scss" scoped>
.recommended {
  background-color: #f7fcff;
}
.grid {
  display: grid;
  grid-gap: 37px;
  grid-template-columns: repeat(3, 334px);
  width: 1076px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: $mobile) {
    width: 100%;
    grid-gap: 20px;
    grid-template-columns: 100%;
  }
}
.pager {
  margin-top: 50px;
}
</style>
