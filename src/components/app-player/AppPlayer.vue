<template lang="pug">
  .app-player
    .button(@click="play")
    .info
      .time {{ time }}
      .progress
        .current(:style="{width: position}")
    a(:href="`${baseUrl}audio/${type}.mp3`" download).download
</template>

<script>
import 'soundmanager2';

const sm = window.soundManager;

sm.setup({
  url: '',
  debugMode: process.env.NODE_ENV !== 'production',
});
sm.beginDelayedInit();

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
      baseUrl: process.env.BASE_URL,
    };
  },
  methods: {
    play() {
      if (this.player) {
        if (this.playing) {
          this.player.pause();
          this.playing = false;
        } else {
          this.player.resume();
        }
        return;
      }

      this.player = sm.createSound({
        url: `${this.baseUrl}audio/${this.type}.mp3`,
        onfinish: () => {
          this.playing = false;
          this.player = null;
          this.time = '00:00';
          this.position = '0';
        },
      });

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
