<template>
  <div class="header">
    <div class="title-header">
      <img src="../../assets/imgs/logo.png" alt="">
      <p>HỆ THỐNG QUẢN LÝ SINH VIÊN HUST MSA
      </p>
    </div>
    <div class="user">
      <div class="icon-rell" >
        <font-awesome-icon class="icon-20" icon="bell" @btnClick="btnNotiOnClick"/>
      </div>
      <div class="user-icon">
        <font-awesome-icon class="icon-20" icon="user" @click="logOut"/>
      </div>
      <div class="user-name">{{this.fullName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  components: {
  },
  data() {
    return {
      isShowNoti: false,
      fullName:""
    };
  },
  methods: {
    btnNotiOnClick() {
      this.isShowNoti = true;
    },
    logOut(){
      sessionStorage.setItem("token", '');
    }
  },
  created(){
    this.fullName=sessionStorage.getItem("fullName");
  }
};
</script>

<style>
.area-content .header {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 8px 20px;
  height: 48px;
}
.title-header{
  display: flex;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
}
.title-header>img{
  height: 15px;
    margin-left: -10px;
    margin-right: 5px;
    opacity: 0.7;

}
.title-header>p{
  font-size: 14px;
  padding-left: 10px;
}
.header .user {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
}
.user-icon, .icon-rell {
  margin-left: 10px;
  margin-right: 10px;
}

</style>