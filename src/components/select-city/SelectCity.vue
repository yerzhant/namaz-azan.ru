<template lang="pug">
.select-city(
  v-show="store.selectCity"
  @click="store.toggleSelectCity()"
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
        @click="setCity(city.id, city.title)"
        :class="{city: city.id, letter: city.letter, active: city.title === store.city}"
      ) {{ city.letter || city.title }}
</template>

<script>
import axios from "axios";
import store from "../../store";

export default {
  data() {
    return {
      store: store(),
      searchFilter: "",
      cities: null,
      filtered: null,
    };
  },
  methods: {
    search() {
      if (this.searchFilter === "") {
        this.filtered = this.cities;
        return;
      }
      this.filtered = [];
      this.cities
        .filter((c) => c.title)
        .filter((c) =>
          c.title.toUpperCase().startsWith(this.searchFilter.toUpperCase())
        )
        .forEach((c) => this.filtered.push(c));
    },
    setCity(id, city) {
      if (!id) return;
      axios.get(`/api/asr/today-and-tomorrow/${id}`).then((r) => {
        localStorage.setItem("cityId", id);
        localStorage.setItem("city", city);
        this.store.setCity(city);
        this.store.setNamazTimes(r.data);
      });
      this.filtered = this.cities;
      this.searchFilter = "";
    },
  },
  created() {
    axios.get("/api/asr/cities-with-letters").then((r) => {
      this.cities = r.data;
      this.filtered = this.cities;
    });
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

  @media (max-width: $mobile) {
    padding-top: 0;
  }
}

.dialog {
  width: 1024px;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 45px 55px;
  background-color: #fff;

  @media (max-width: $mobile) {
    width: 100%;
    padding: 33px 20px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  padding-bottom: 20px;
  margin-bottom: 35px;
  border-bottom: 1px solid #b7b7b7;

  @media (max-width: $mobile) {
    display: block;
  }
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

  @media (max-width: $mobile) {
    margin-top: 10px;
  }
}

.cities {
  padding: 0 30px;
  column-count: 5;
  column-gap: 60px;
  column-rule: 1px solid #dadada;

  @media (max-width: $mobile) {
    padding: 0;
    column-count: 2;
    column-gap: 30px;
  }

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
