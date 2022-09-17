<template>
  <div class="function-tool">
    <div class="remove-button" @click="btnDeleteOnClick">Xóa</div>
  </div>
</template>
  
  <script>
import EmployeeApi from "@/api/entities/EmployeeApi";

export default {
  name: "TheTool",
  props: {
    toolId: String,
    toolUser: String,
  },
  data() {
    return {
      isHide: true,
    };
  },
  methods: {
    /**
     * Sự kiên khi click vào btn sửa
     * Author TrungTQ
     * */
    btnDeleteOnClick() {
      // this.isHide = true;
      // this.emitter.emit(
      //   "showPopup",
      //   `Bạn có thực sự muốn xóa tài khoản không?###question###xw###delete`
      // );
      this.$confirm.require({
        message: `Bạn có thực sự muốn xóa tài khoản <${this.toolUser}> không`,
        header: "Xác nhận",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          EmployeeApi.delete(this.toolId)
            .then((res) => {
              console.log(res);
              this.$confirm.close();
              this.$toast.add({
                severity: "success",
                summary: "Xóa thành công!",
                detail: "vui lòng kiểm tra",
                life: 3000,
              });

              this.emitter.emit("load");
            })
            .catch((err) => {
              console.log(err);
              this.$confirm.close();
              this.$toast.add({
                severity: "error",
                summary: `Xóa thất bại!`,
                detail: "vui lòng kiểm tra lại",
                life: 3000,
              });
            });
        },
        reject: () => {
          //callback to execute when user rejects the action
          this.$confirm.close();
        },
        onHide: () => {
          //Callback to execute when dialog is hidden
          this.$confirm.close();
        },
      });
    },
  },
  created() {
    // this.emitter.on("confirmToDelete", () => {
    //   EmployeeApi.delete(this.myEmployeeId)
    //     .then((res) => {
    //       console.log(res);
    //       this.emitter.emit("showMes", "Xóa thành công!###success");
    //       //   this.emitter.emit("load");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.emitter.emit("showMes", "Xóa thất bại!###danger");
    //     });
    // });
  },
};
</script>
  
  
  <style scoped>
.function-tool {
  width: 80px;
  height: 36px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 4px;
  margin-left: 10px;
}

.remove-button {
  width: auto;
  height: 14px;
  line-height: 13px;
  font-size: 13px;
  color: #0075c0;
  margin-right: 9px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid transparent;
  font-weight: 600;
}

.remove-button:active {
  border: 1px solid #0075c0;
}
html .p-toast .p-toast-message {
  box-shadow: none;
}
</style>