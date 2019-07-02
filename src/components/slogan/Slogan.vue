<template lang="pug">
  section.slogan
    p.left Спешите к намазу! Спешите к успеху!
    a.link(href="https://azan.ru")
      img.image(src="./logo.png")
    p.right Специальный проект портала Azan.ru
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
  @media (max-width: $mobile) {
    display: block;
    height: initial;
    padding: 0 33px;
    background-color: #f4f8fb;
  }
  &::before,
  &::after {
    position: absolute;
    display: block;
    content: '';
    right: 0;
    left: 0;
    top: -8px;
    height: 8px;
    background: url(./shadow-top.png) no-repeat center;
    @media (max-width: $mobile) {
      background-image: url(./shadow-top-m.png);
      background-size: cover;
    }
  }
  &::after {
    bottom: -8px;
    top: initial;
    background-image: url(./shadow-bottom.png);
    @media (max-width: $mobile) {
      background-image: url(./shadow-bottom-m.png);
    }
  }
}
.link {
  margin-right: 40px;
  margin-left: 40px;
  @media (max-width: $mobile) {
    display: inline-block;
    margin-right: 10px;
    margin-left: 0;
    float: left;
    margin-top: 14px;
  }
}
.image {
  display: block;
}
@media (max-width: $mobile) {
  .left,
  .right {
    display: inline-block;
    vertical-align: middle;
  }
  .left {
    font-size: 13px;
    line-height: 1;
    margin-top: 30px;
    margin-bottom: 7px;
  }
  .right {
    font-size: 11px;
    line-height: 1;
    margin-bottom: 30px;
  }
}
</style>
