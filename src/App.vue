<template>
  <!-- <the-container/> -->
  <TheLogin></TheLogin>
</template>

<script>
// import TheContainer from './components/layout/TheContainer.vue'
import TheLogin from './components/layout/TheLogin.vue';
export default {
  name: 'App',
  components: {
    // TheContainer,
    TheLogin
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
}
.input-350{
width: 350px;
}
.m-input {
    height: 32px;
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
