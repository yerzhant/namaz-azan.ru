<template lang="pug">
  section.socials
    a.fb(href="#")
    a.yt(href="#")
    a.vk(href="#")
    a.tg(href="#")
</template>

<style lang="scss" scoped>
.socials {
  display: inline-block;

  > a {
    display: inline-block;
    width: 31px;
    height: 31px;
    border: 1px solid #67758b;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}
.fb {
  background-image: url(./fb.png);
}
.yt {
  background-image: url(./yt.png);
}
.vk {
  background-image: url(./vk.png);
}
.tg {
  background-image: url(./tg.png);
}
</style>
