<template>
  <div class="popup">
    <!-- <div class="assignment-modal"></div> -->
    <div
      :class="['class-assignment', { 'detail-show': isShowPopupDetailClass }]"
    >
      <div class="popup-assgiment-header">
        <router-link to="/teacher/homeassignment">
          <font-awesome-icon
            icon="square-caret-left"
            class="icon-back"
            @click="goBackHomeAssignment"
          />
        </router-link>
        <router-link
          to="/teacher/homeassignment/detailassignment"
          class="button-header"
          >Assignments</router-link
        >
        <router-link
          to="/teacher/homeassignment/createassignment"
          class="button-header"
          >Create a new Assignment</router-link
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
      <script>
export default {
  props: {
    isShowPopupDetailClass: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBackHomeAssignment() {
      this.$emit("goBack");
    },
  },
};
</script>
      <style>
/* .assignment-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0;
  z-index: 19999;
} */
.class-assignment {
  width: calc(100% - 258px);
  height: calc(100vh - 154px);
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  z-index: 34000;
  position: fixed;
  top: 10px;
  background-color: #fff;
  /* padding: 0 20px 20px; */
  overflow: auto;
  margin-top: 122px;
  margin-left: 20px;
  transform: translate(110%, 0);
  transition: 0.8s;
}

.detail-show {
  transform: translate(0, 0);
  transition: 0.8s;
}

.popup-assgiment-header {
  display: flex;
  position: sticky;
  justify-content: center;
  top: 0;
  background: #fff;
  width: 100%;
  padding: 20px 0;
  line-height: 32px;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 10%);
  box-sizing: border-box;
}
.icon-back {
  position: fixed;
  top: 0px;
  left: 0px;
  font-size: 36px;
  color: #6558ef;
  margin: 20px 30px;
  cursor: pointer;
}
.icon-back:hover {
  color: #7d72f7;
}

.button-header {
  margin: 0 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  color: #5b5b5b !important;
  border-bottom: 3px solid #fff;
}
.button-header:hover {
  color: #6558ef !important;
  border-bottom: 3px solid;
}
.popup-assgiment-header .router-link-active {
  color: #6558ef !important;
  border-bottom: 3px solid;
}
/* .color-show {
  border-bottom: 3px solid;

  color: #6558ef;
} */
</style>