<template>
  <the-container/>
</template>

<script>
import TheContainer from './components/layout/TheContainer.vue'
export default {
  name: 'App',
  components: {
    TheContainer,
  },
}
</script>

<style>
* {
  font-family: "GoogleSans-Regular";
  font-size: 13px;
}
.icon-24{
  height: 24px;
  width: 24px;
}
.input-24{
width: 100%;
height: 32px;
}
.m-input {
    border: 1px solid #BBBBBB;
    border-radius: 2px;
    padding: 0 12px 0 10px;
    outline: none;
    font-size: 13px;
}

.m-input:focus {
    border: 1px solid #3f97e4;
}

@font-face {
  font-family: "GoogleSans-Bold";
  src: url("./assets/fonts/notosans-bold.3ede5aff.woff2") format("opentype");
}

@font-face {
  font-family: "GoogleSans-Thin";
  src: url("./assets/fonts/notosans-semibold.df3e6dc4.woff2") format("opentype");
}

@font-face {
  font-family: "GoogleSans-Italic";
  src: url("./assets/fonts/notosans-italic.1c1aaac9.woff2") format("opentype");
}

@font-face {
  font-family: "GoogleSans-Regular";
  src: url("./assets/fonts/notosans-regular.2cb88a13.woff2") format("opentype");
}
</style>
