<template lang="pug">
  section.section
    h1.title {{ title }}
    img.moon(src="./moon.png")
    slot
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background: url(./shadow.png) no-repeat top, url(./bg.png) no-repeat top;
}
.title {
  margin: 0;
  font-weight: 300;
  font-size: 36px;
  color: #002f56;
}
.moon {
  margin-top: 20px;
  margin-bottom: 80px;
}
</style>
