<template>
  <div class="popup">
    <div class="dialog-modal"></div>
    <div class="dialog-content">
      <div class="add-class-body">
        <div class="add-content">
          <span>Tên lớp</span>
          <input type="text" class="m-input input-350" placeholder="Nhập tên lớp" v-model="classModel.name"/>
        </div>
        <div class="add-class-footer">
          <Button buttonText="Hủy" buttonClass="button-secondary" @click="btnCancleAddClass"/>
          <Button buttonText="Tạo" buttonClass="button-primary" @click="btnAddClass"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
import ClassApi from "@/api/entities/ClassApi";
export default {
  components: {
    Button,
  },
  data() {
    return {
      classModel: {},
    };
  },
  props:{
    isShowAddClass:{
        type:Boolean,
        default: false,
    },
  },
  methods:{
    btnCancleAddClass(){
        this.$emit("hideAddClass");
    },
    btnAddClass(){
      ClassApi.add(this.classModel)
          .then((res) => {
            console.log(res);
            this.$emit("hideAddClass");
            this.$toast.add({
              severity: "success",
              summary: "Thêm thành công!",
              detail: "vui lòng kiểm tra",
              life: 3000,
            });
            this.emitter.emit("load");
          })
          .catch((err) => {
            this.$emit("hideAddClass");
            this.errorMsg(err);
            this.$toast.add({
              severity: "error",
              summary: "Thêm thất bại!",
              detail: "vui lòng kiểm tra lại",
              life: 3000,
            });
          });
    }
  }
};
</script>
<style>
.dialog-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.4;
  z-index: 19999;
}

.dialog-content {
  z-index: 20000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 444px;
  height: auto;
  background-color: #fff;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 3px;
}
.add-class-body{
    display: flex;
    flex-direction: column;
}
.add-content{
    font-weight: 600;
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    align-items: center;
}
.add-content>span{
margin-right: 10px;
width: 14%;
}
.add-class-footer{
    width: 100%;
  height: 57px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #e0e0e0;

}
</style>