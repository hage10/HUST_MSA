<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Quản lý tài khoản</div>
    </div>
    <div class="manage-content">
      <div class="manage-toolbar">
        <div class="search-account">
          <input type="text" class="m-input input-240 input-padding-right" />
          <font-awesome-icon icon="magnifying-glass" class="icon-search" />
        </div>
      </div>
      <div class="main-manage">
        <!-- <TheTable/> -->
      </div>
    </div>
  </div>
</template>
  
  <script>
// import TheTable from '../../components/base/Table.vue'
export default {
  name: "TheButton",
  components: {
    // TheTable
  },
};
</script>
  <style>
.main-content {
  display: flex;
  flex-direction: column;
  background-color: #f4f5f8;
  width: 100%;
  height: calc(100% - 48px);
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
}
.manage-content {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 16px; */
}
.search-account {
  display: flex;
  justify-content: end;
  width: 100%;
  height: 68px;
  padding: 16px 20px;
  box-sizing: border-box;
  position: relative;
}

.icon-search {
    position: absolute;
    right: 27px;
    top: 22px;
    color: #68686863;
    font-size: 19px;
}
</style>