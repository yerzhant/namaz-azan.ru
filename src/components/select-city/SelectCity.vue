<template lang="pug">
  .select-city(
    v-show="$store.state.selectCity"
    @click="$store.commit('toggleSelectCity')"
  )
    .dialog
      .header
        .title ВЫБОР ГОРОДА
        input.input(
          placeholder="Поиск города"
          v-model.trim="searchFilter"
          @keyup="search"
          @click.stop
        )
      .cities
        div(
          v-for="city in filtered"
          @click="setCity(city)"
          :class="{city: city.length > 1, \
                   letter: city.length === 1, \
                   active: city === $store.state.city}"
        ) {{ city }}
</template>

<script>
export default {
  data() {
    return {
      searchFilter: '',
      cities: [
        'А',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Алматы',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Б',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'New-York',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Taraz',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
        'Астана',
      ],
      filtered: null,
    };
  },
  methods: {
    search() {
      if (this.searchFilter === '') {
        this.filtered = this.cities;
        return;
      }
      this.filtered = [];
      this.cities
        .filter(c => c.length > 1)
        .filter(c => c.toUpperCase().startsWith(this.searchFilter.toUpperCase()))
        .forEach(c => this.filtered.push(c));
    },
    setCity(city) {
      this.$store.commit('setCity', city);
      this.filtered = this.cities;
      this.searchFilter = '';
    },
  },
  created() {
    this.filtered = this.cities;
  },
};
</script>

<style lang="scss" scoped>
.select-city {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 15000;
  padding-top: 40px;
}
.dialog {
  width: 1024px;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 45px 55px;
  background-color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  padding-bottom: 20px;
  margin-bottom: 35px;
  border-bottom: 1px solid #b7b7b7;
}
.input {
  width: 260px;
  border: none;
  background: url(./search.png) no-repeat 233px;
  background-color: #f1f1f1;
  color: #4a4a4a;
  padding: 8px 13px;
  &:hover {
    background-image: url(./search-active.png);
  }
  &::placeholder {
    color: #a4a4a4;
  }
}
.cities {
  padding: 0 30px;
  column-count: 5;
  column-gap: 60px;
  column-rule: 1px solid #dadada;
  .letter {
    font-weight: 600;
    color: #0d73c9;
    margin-top: 45px;
    margin-bottom: 17px;
    &:first-child {
      margin-top: 0;
    }
  }
  .city {
    margin-bottom: 15px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover,
    &.active {
      color: #0d73c9;
    }
  }
}
</style>
