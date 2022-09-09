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
    toolCode: String,
  },
  data() {
    return {
      isHide: true,
      myEmployeeId: "",
      myEmployeeCode: "",
    };
  },
  methods: {
    /**
     * Sự kiên khi click vào btn sửa
     * Author TrungTQ
     * */
    btnDeleteOnClick() {
      this.isHide = true;
      this.emitter.emit(
        "showPopup",
        `Bạn có thực sự muốn xóa tài khoản không?###question###xw###delete`
      );
    },
  },
  created() {
    this.emitter.on("confirmToDelete", () => {
      EmployeeApi.delete(this.myEmployeeId)
        .then((res) => {
          console.log(res);
          this.emitter.emit("showMes", "Xóa thành công!###success");
          //   this.emitter.emit("load");
        })
        .catch((err) => {
          console.log(err);
          this.emitter.emit("showMes", "Xóa thất bại!###danger");
        });
    });
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

</style>