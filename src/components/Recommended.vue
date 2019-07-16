<template lang="pug">
  section.recommended
    AppSection(title="МАТЕРИАЛЫ О НАМАЗЕ")
      RecommendedDoc(:doc="mainPost" kind="main")
      section.grid
        RecommendedDoc(v-for="d in currentItems" :doc="d" :key="d.id")
      RecommendedDoc(:doc="mainVideo" kind="main")
      Pager(
        :itemsPerPage="itemsPerPage"
        :items="items.length"
        @page="currentPage = $event"
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
      mainPost: {},
      mainVideo: {},
      items: [],
      itemsPerPage: 6,
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
        this.mainPost = r.data.mainPost;
        this.mainVideo = r.data.mainVideo;
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
  margin-top: 37px;
  margin-bottom: 37px;
  @media (max-width: $mobile) {
    width: 100%;
    grid-gap: 20px;
    grid-template-columns: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.pager {
  margin-top: 30px;
}
</style>
