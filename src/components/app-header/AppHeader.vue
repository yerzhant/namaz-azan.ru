<template lang="pug">
  header.header
    .menu
    .container
      .gender Намаз:
        span.gender-item Для мужчин
      .madhhab
      .basmalah
      .language
      .tutoring
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 50px;
  background: url(./bg.png) no-repeat center / cover;
  border-bottom: 1px solid #a9b8cf;
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 58px;
  height: 49px;
  background: url(./menu.png) no-repeat center;

  @media (min-width: 1366px) {
    display: none;
  }
}

.container {
  max-width: 1366px;
  font-family: $pt-sans;
  font-size: 13px;
  color: #465d73;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
  }
}

.gender,
.madhhab,
.language,
.basmalah {
  border-left: 1px solid #bfcde1;
}
.gender,
.madhhab,
.language,
.tutoring {
  width: 162px;
}

.gender-item {
  color: #0a6e9c;
  margin-left: 3px;
}
</style>
