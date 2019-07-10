<template lang="pug">
  section.recommended-doc
    a(:href="url").image-link
      img(:src="doc.thumbImage" :alt="doc.title").image
    a.title(:href="url") {{ doc.title }}
    .authors {{ authors }}
    .description {{ doc.description }}
    .spacer
    .category {{ category }}
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
    category() {
      return `Статьи | ${this.doc.category.title}`;
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
