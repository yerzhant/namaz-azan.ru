<template lang="pug">
section.recommended-doc(:class="kind")
  .image-block
    a(:href="type.url" :class="type.id").image-link
      img(:src="type.image" :alt="doc.title").image
    AppPlayer.player(type="file" v-if="type.id === 'audio'" :file="type.file")
  .text-block
    a.title(:href="type.url") {{ doc.title }}
    .authors {{ type.authors }}
    .description(v-html="type.description")
    a.download(v-if="type.id === 'audio'" download :href="type.file") Скачать
    AppButton(v-if="kind === 'main'" :url="type.url" blue).read-more ЧИТАТЬ ДАЛЕЕ
    .spacer
    .category(:class="type.id") {{ type.text }} | {{ type.category }}
</template>

<script>
import AppPlayer from "@/components/app-player/AppPlayer.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  props: ["doc", "kind"],
  computed: {
    type() {
      switch (this.doc.type) {
        case "frontend\\models\\Post":
          return {
            id: "post",
            text: "Статьи",
            category: this.doc.category.title,
            description: this.doc.description,
            authors: this.authors(),
            url: this.doc.url.substring(4),
            image: this.kind === "main" ? this.doc.image : this.doc.thumbImage,
          };

        case "frontend\\models\\Books":
          return {
            id: "book",
            text: "Книги",
            category: this.doc.categories[0].title,
            description: this.doc.text,
            authors: this.authors(),
            url: this.doc.url.substring(4),
            image: this.doc.thumbImage,
          };

        case "frontend\\models\\Video":
          return {
            id: "video",
            text: "Видео",
            category: this.doc.category.title,
            description: this.doc.description,
            authors: this.doc.author.title,
            url: this.doc.url.substring(4),
            image: this.kind === "main" ? this.doc.image : this.doc.thumbImage,
          };

        case "frontend\\models\\Audio":
          return {
            id: "audio",
            text: "Аудио",
            category: this.doc.playlist.category.title,
            authors: this.doc.playlist.author.title,
            url: this.doc.playlist.url.substring(4),
            image: this.doc.playlist.image,
            file: this.doc.audioFile.substring(4),
          };

        default:
          return {
            id: "unknown",
            text: "???",
          };
      }
    },
  },
  methods: {
    authors() {
      return this.doc.authors.map((a) => a.title).join(", ");
    },
  },
  components: {
    AppPlayer,
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.recommended-doc {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #dce6eb;
  padding: 15px;

  &.main {
    flex-direction: row;

    @media (max-width: $mobile) {
      flex-direction: column;
      border-top: none;
      border-right: none;
      border-left: none;
      padding: 0;
      padding-bottom: 15px;
      margin-right: -20px;
      margin-left: -20px;
    }

    > * {
      flex-basis: 50%;

      @media (max-width: $mobile) {
        flex-basis: initial;
      }
    }

    .image-block {
      padding-right: 10px;

      @media (max-width: $mobile) {
        padding: 0;
      }
    }

    .text-block {
      padding: 0 50px;

      @media (max-width: $mobile) {
        padding: 0 20px;
      }

      .title {
        font-size: 18px;
        line-height: 1.3;
        color: #3a3a3a;
        font-family: $pt-sans;
        text-transform: uppercase;
      }

      .description {
        font-size: 14px;
        line-height: 22px;
        color: #2a2a2a;
        max-height: 85px;

        @media (max-width: $mobile) {
          max-height: 150px;
        }
      }
    }
  }
}

.text-block {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
      background-image: radial-gradient(
        circle at center,
        #f7fcff 61%,
        #d4e4ed 100%
      );

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
  background: url("./article.png") no-repeat left;
  background-size: 12.7px 14.7px;

  &.book {
    background-image: url("./book.png");
    background-size: 14.3px 15px;
  }

  &.video {
    background-image: url("./video.png");
    background-size: 6.3px 12px;
    padding-left: 15px;
  }

  &.audio {
    background-image: url("./audio.png");
    background-size: 11.7px 11.3px;
    padding-left: 18px;
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

.read-more {
  margin-top: 25px;

  @media (max-width: $mobile) {
    display: none;
  }
}
</style>
