<template lang="pug">
  section.recommended
    AppSection(title="МАТЕРИАЛЫ О НАМАЗЕ")
      section.grid
        RecommendedDoc(v-for="d in data.items" :doc="d")
</template>

<script>
import AppSection from '@/components/app-section/AppSection.vue';
import RecommendedDoc from '@/components/recommended-doc/RecommendedDoc.vue';
import axios from 'axios';

export default {
  data() {
    return {
      data: {
        items: [],
      },
    };
  },
  methods: {
    getData() {
      axios.get('/api/namaz/recommended').then(r => {
        r.data.forEach(i => this.data.items.push(i));
      });
    },
  },
  created() {
    this.getData();
  },
  components: {
    AppSection,
    RecommendedDoc,
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
}
</style>
