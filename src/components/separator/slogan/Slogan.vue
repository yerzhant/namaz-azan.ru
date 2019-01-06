<template lang="pug">
  section.slogan
    p Спешите к намазу! Спешите к успеху!
    a.link(href="https://azan.ru")
      img.image(src="./logo.png")
    p Специальный проект портала Azan.ru
</template>

<style lang="scss" scoped>
.slogan {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 134px;
  font-family: $philosopher;
  font-size: 18px;

  &::before, &::after {
    position: absolute;
    display: block;
    content: '';
    right: 0;
    left: 0;
    top: -8px;
    height: 8px;
    background: url(./shadow-top.png) no-repeat center;
  }
  &::after {
    bottom: -8px;
    top: initial;
    background-image: url(./shadow-bottom.png);
  }
}
.link {
  margin-right: 40px;
  margin-left: 40px;
}
.image {
  display: block;
}
</style>
