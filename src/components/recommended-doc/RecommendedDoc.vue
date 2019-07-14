<template lang="pug">
  section.recommended-doc
    a(:href="type.url" :class="type.id").image-link
      img(:src="type.image" :alt="doc.title").image
    AppPlayer.player(type="file" v-if="type.id === 'audio'" :file="type.file")
    a.title(:href="type.url") {{ doc.title }}
    .authors {{ type.authors }}
    .description(v-html="type.description")
    a.download(v-if="type.id === 'audio'" download :href="type.file") Скачать
    .spacer
    .category(:class="type.id") {{ type.text }} | {{ type.category }}
</template>

<script>
import AppPlayer from '@/components/app-player/AppPlayer.vue';

export default {
  props: ['doc'],
  computed: {
    type() {
      switch (this.doc.type) {
        case 'frontend\\models\\Post':
          return {
            id: 'post',
            text: 'Статьи',
            category: this.doc.category.title,
            description: this.doc.description,
            authors: this.authors(),
            url: this.doc.url.substring(4),
            image: this.doc.thumbImage,
          };

        case 'frontend\\models\\Books':
          return {
            id: 'book',
            text: 'Книги',
            category: this.doc.categories[0].title,
            description: this.doc.text,
            authors: this.authors(),
            url: this.doc.url.substring(4),
            image: this.doc.thumbImage,
          };

        case 'frontend\\models\\Video':
          return {
            id: 'video',
            text: 'Видео',
            category: this.doc.category.title,
            description: this.doc.description,
            authors: this.doc.author.title,
            url: this.doc.url.substring(4),
            image: this.doc.thumbImage,
          };

        case 'frontend\\models\\Audio':
          return {
            id: 'audio',
            text: 'Аудио',
            category: this.doc.playlist.category.title,
            authors: this.doc.playlist.author.title,
            url: this.doc.playlist.url.substring(4),
            image: this.doc.playlist.image,
            file: this.doc.audioFile.substring(4),
          };

        default:
          return {
            id: 'unknown',
            text: '???',
          };
      }
    },
  },
  methods: {
    authors() {
      return this.doc.authors.map(a => a.title).join(', ');
    },
  },
  components: {
    AppPlayer,
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
      height: 170px;
      background-image: radial-gradient(circle at center, #f7fcff 61%, #d4e4ed 100%);
      .image {
        width: 100px;
      }
    }
    &.audio {
      display: flex;
      justify-content: center;
      background-color: #000;
      .image {
        width: 135px;
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
  padding-left: 20px;
  margin-top: 10px;
  background: url('./article.png') no-repeat left;
  background-size: 12.7px 14.7px;
  &.book {
    background-image: url('./book.png');
  }
  &.video {
    background-image: url('./video.png');
  }
  &.audio {
    background-image: url('./audio.png');
  }
}
.download {
  font-size: 14px;
  color: #4a4a4a;
  font-family: $pt-sans;
  padding: 9px 14px;
  border: 1px solid #dce6eb;
  width: 77px;
}
</style>
