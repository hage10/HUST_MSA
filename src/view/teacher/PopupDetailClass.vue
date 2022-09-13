<template>
  <div class="popup">
    <!-- <div class="assignment-modal"></div> -->
    <div
      :class="[
        'class-assignment',
        {
          'detail-show': isShowPopupDetailClass,
          'detail-hide': !isShowPopupDetailClass,
        },
      ]"
    >
      <div class="popup-assgiment-header">
        <font-awesome-icon icon="square-caret-left" class="icon-back" @click="goBackHomeAssignment"/>
        <div :class="['assignment-button',{
          'color-show': isShowPopupDetailClass,
          'color-hide': !isShowPopupDetailClass,
        }]">Assignment</div>
        <div class="grade-button">Grade</div>
      </div>
      <div class="popup-assgiment-body">
        <div
          class="assginment-list"
          v-for="assignment in assigmentList"
          :key="assignment.assignmentId"
        >
          <div class="wrapper-asignment">
            <div class="assignment-popup-title">
              {{ assignment.assignmentTitle }}
            </div>
            <div class="assignment-popup-due">
              {{ assignment.assignmentDue }}
            </div>
            <div class="assignment-popup-content">
              {{ assignment.assignmentContent }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      <script>
import { assignments } from "./assignmentName";
export default {
  data() {
    return {
      assigmentList: assignments,
    };
  },
  props: {
    isShowPopupDetailClass: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
    goBackHomeAssignment(){
      this.$emit("goBack");
    }
  }
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
  /* z-index: 20000;
  position: fixed;
  z-index: 34000;
  top: 132px;
  left: 5028px;
  right: 0;
  background-color: #000;
  padding: 32px;
 */
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
}
.detail-show {
  left: 228px;
  opacity: 1;
  transition: 0.7s;
  top: 132px;
}
/* .detail-hide {
  right: 5px;
  opacity: 0.5;
  transition: 0.7s;
} */
.popup-assgiment-header {
  display: flex;
  position: sticky;
  justify-content: center;
  top: 0;
  background: #fff;
  width: 100%;
  padding: 20px 0;
 /* position: relative; */
  line-height: 32px;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 10%);

}
.icon-back{
  position: fixed;
    top: 132px;
    left: 228px;
    font-size: 36px;
    color: #6558ef;
    margin: 20px 30px;
    cursor: pointer;
}
.icon-back:hover{
  color: #7d72f7;
}
.assignment-button,.grade-button{
  margin: 0 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: #5b5b5b;
}
.color-show {
  border-bottom: 3px solid;

  color: #6558ef;
}
.popup-assgiment-body {
  margin: 20px 0 0 10px;
  display: flex;
  flex-direction: column;
}
.assginment-list {
  display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    width: 100%;
    flex-wrap: wrap;
    min-height: 100px;
    margin-bottom: 20px;
    background-color: #f4f5f8;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 20px 20px;
}
.assginment-list:hover{
  box-shadow: 3px 3px 3px  rgba(0, 0, 0, 0.2);
}
.assignment-popup-title {
  font-size: 18px;
    font-weight: 600;
    margin-bottom: 3px;
}
.assignment-popup-due {
    margin-bottom: 5px;
}
</style>