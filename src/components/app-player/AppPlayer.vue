<template lang="pug">
  .app-player
    .button(@click="play" :class="{paused: position !== '0' && !playing}")
    .info
      .time {{ time }}
      .progress(@click.stop="setPosition" ref="progress")
        .current(:style="{width: position}")
    a(:href="url" download).download
</template>

<script>
import 'soundmanager2';

const sm = window.soundManager;

sm.setup({
  url: '',
  debugMode: process.env.NODE_ENV !== 'production',
});
sm.beginDelayedInit();

let currentPlayer = null;

export default {
  props: {
    type: String,
  },
  data() {
    return {
      player: null,
      playing: false,
      time: '00:00',
      position: '0',
    };
  },
  computed: {
    url() {
      return `https://azan.ru/media/audio/namaz/${this.type}.mp3`;
    },
  },
  methods: {
    play() {
      if (currentPlayer && currentPlayer !== this) {
        currentPlayer.player.pause();
        currentPlayer.playing = false;
        currentPlayer = this;
      }

      if (this.player) {
        if (this.playing) {
          this.player.pause();
          this.playing = false;
          currentPlayer = null;
        } else {
          this.player.resume();
          this.playing = true;
          currentPlayer = this;
        }
        return;
      }

      this.player = sm.createSound({
        url: this.url,
        onfinish: () => {
          this.playing = false;
          this.player = null;
          this.time = '00:00';
          this.position = '0';
          currentPlayer = null;
        },
      });

      currentPlayer = this;
      const thiz = this;
      this.player.play({
        whileplaying() {
          thiz.time = thiz.getTimeAsString(this.position);
          thiz.position = `${(this.position / this.duration) * 100}%`;
        },
      });
      this.playing = true;
    },
    getTimeAsString(msec) {
      const dur = msec / 1000;
      let min = Math.floor(dur / 60);
      let sec = Math.floor(dur - min * 60) % 60;
      if (min < 10) min = `0${min}`;
      if (sec < 10) sec = `0${sec}`;
      return `${min}:${sec}`;
    },
    setPosition(e) {
      let pos = e.clientX - this.$refs.progress.getBoundingClientRect().left;
      pos = (pos / this.$refs.progress.offsetWidth) * this.player.duration;
      this.player.setPosition(pos);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-player {
  display: flex;
  height: 35px;
  background-color: #fbfeff;
  border: 1px solid #d5dde3;
}
.button {
  width: 35px;
  border-right: 1px solid #d5dde3;
  background: url(./play.png) no-repeat center;
  cursor: pointer;
  &.paused {
    background-image: url(./pause.png);
  }
}
.download {
  width: 35px;
  border-left: 1px solid #d5dde3;
  background: url(./download.png) no-repeat center;
  outline: none;
}
.info {
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex-grow: 1;
}
.progress {
  flex-grow: 1;
  height: 3px;
  background-color: #dadada;
  margin-left: 7px;
  cursor: pointer;
}
.current {
  height: 3px;
  background-color: #15a4e6;
}
.time {
  font-size: 11px;
  color: #717171;
}
</style>
