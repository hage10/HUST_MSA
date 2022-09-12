<template>
    <div class="popup">
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="add-class-body">
          <div class="add-content">
            <span>MSSV</span>
            <input type="text" class="m-input input-350" placeholder="Nhập mã số sinh viên" />
          </div>
          <div class="add-class-footer">
            <Button buttonText="Hủy" buttonClass="button-secondary" @click="btnCancleAddStudent"/>
            <Button buttonText="Thêm" buttonClass="button-primary" />
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Button from "./Button.vue";
  export default {
    components: {
      Button,
    },
    props:{
      isShowAddStudent:{
          type:Boolean,
          default: false,
      },
    },
    methods:{
      btnCancleAddStudent(){
          this.$emit("hideAddStudent");
      }
    }
  };
  </script>
  <style>

  </style>