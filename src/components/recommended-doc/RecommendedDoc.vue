<template lang="pug">
  section.recommended-doc
    a(:href="url" :class="type.id").image-link
      img(:src="doc.thumbImage" :alt="doc.title").image
    a.title(:href="url") {{ doc.title }}
    .authors {{ authors }}
    .description(v-html="type.description")
    .spacer
    .category {{ type.text }} | {{ type.category }}
</template>

<script>
export default {
  props: ['doc'],
  computed: {
    authors() {
      return this.doc.authors.map(a => a.title).join(', ');
    },
    url() {
      return this.doc.url.substring(4);
    },
    type() {
      switch (this.doc.type) {
        case 'frontend\\models\\Post':
          return {
            id: 'post',
            text: 'Статьи',
            category: this.doc.category.title,
            description: this.doc.description,
          };

        case 'frontend\\models\\Books':
          return {
            id: 'book',
            text: 'Книги',
            category: this.doc.categories[0].title,
            description: this.doc.text,
          };

        case 'frontend\\models\\Video':
          return {
            id: 'video',
            text: 'Видео',
          };

        case 'frontend\\models\\Audio':
          return {
            id: 'audio',
            text: 'Аудио',
          };

        default:
          return {
            id: 'unknown',
            text: '???',
          };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recommended-doc {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border: 1px solid #dce6eb;
  padding: 15px;
}
.image {
  display: block;
  width: 100%;
  &-link {
    display: block;
    &.book {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 186px;
      background-image: radial-gradient(circle at center, #f7fcff 61%, #d4e4ed 100%);
      .image {
        width: 100px;
      }
    }
  }
}
.title {
  display: inline-block;
  font-size: 15px;
  line-height: 19px;
  color: #1a1a1a;
  font-family: $roboto;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 7px;
}
.authors {
  font-size: 12px;
  line-height: 18px;
  color: #898989;
  font-family: $roboto;
  font-weight: 400;
}
.description {
  margin-top: 16px;
  padding-top: 18px;
  border-top: 1px solid #dce6eb;
  font-size: 13px;
  line-height: 19px;
  color: #1a1a1a;
  font-family: $roboto;
  font-weight: 300;
  max-height: 80px;
  overflow: hidden;
}
.spacer {
  flex-grow: 1;
}
.category {
  font-size: 10px;
  line-height: 26px;
  color: #a8a8a8;
  font-family: $roboto;
  background: url('./articles.png') no-repeat left;
  background-size: 12.7px 14.7px;
  padding-left: 20px;
  margin-top: 10px;
}
</style>
