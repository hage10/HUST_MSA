<template>
  <!-- <the-container/> -->
  <router-view></router-view>
</template>

<script>
// import TheContainer from './components/layout/TheContainer.vue'
// import TheLogin from './components/layout/TheLogin.vue';
export default {
  name: 'App',
  components: {
    // TheContainer,
    // TheLogin
  },
}
</script>

<style>
* {
  font-family: "GoogleSans-Regular";
  font-size: 13px;
  
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
}
.icon-20{
  height: 20px;
  width: 20px;
}
.input-24{
width: 100%;
}
::placeholder {
    font-family: "GoogleSans-Italic";
    font-size: 13px;
}
.input-240{
width: 240px;
}
.input-350{
width: 350px;
}
.input-padding-right{
  padding-right: 32px !important;
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
    border: 1px solid #ffcb3e;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #b8bcc3;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #888888;
}

::-webkit-scrollbar:horizontal {
  height: 10px;
  background-color: #f1f1f1;
  z-index: 30000;
}

::-webkit-scrollbar-thumb:horizontal {
  background: #b8bcc3;
}

::-webkit-scrollbar-thumb:horizontal:hover {
  background: #888888;
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
