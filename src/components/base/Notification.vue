<template>
  <div class="background-notification">
    <div class="notification">
      <div class="title-noti">Thông báo</div>
      <div class="notification-content"></div>
    </div>
  </div>
</template>
<script>
export default {
    name:"TheNotification",
    props:{
        isShowNoti:{
            type: Boolean,
            default:false,
        }
    }
};
</script>
<style>
.background-notification{
    position: fixed;
    left: 0;
    top: 48px;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.6;
    z-index: 500;
}
.notification {
    position: fixed;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 548px;
  right: 0px;
  background-color: #FFFFFF;
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 30%);
}
.title-noti{
    width: 100%;
    padding: 10px 20px;
    height: 52px;
    font-size: 24px;
}
</style>