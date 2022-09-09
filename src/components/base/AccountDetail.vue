<template>
  <div class="popup">
    <div class="popup-modal"></div>
    <div class="popup-content">
      <div class="header-popup">
        <p>Chi tiết tài khoản</p>
        <font-awesome-icon
          icon="xmark"
          class="close-icon"
          @click="btnCloseOnClick"
        />
      </div>

      <div class="popup-body">
        <div class="prop-item">
          <p>Tài khoản<font color="red">*</font></p>
          <input type="text" class="m-input input-24" />
        </div>
        <div class="prop-item">
          <p>Mật khẩu<font color="red">*</font></p>
          <input type="text" class="m-input input-24" />
        </div>
        <div class="prop-item">
          <p>Họ tên</p>
          <input type="text" class="m-input input-24" />
        </div>
        <div class="prop-item">
          <p>MSSV</p>
          <input type="text" class="m-input input-24" />
        </div>
        <div class="prop-item">
          <p>Số điện thoại</p>
          <input type="text" class="m-input input-24" />
        </div>
        <div class="prop-item">
          <p>Email</p>
          <input type="text" class="m-input input-24" />
        </div>
      </div>
      <div class="popup-footer">
        <div class="cancel-btn">
          <Button
            buttonText="Hủy"
            buttonClass="button-secondary"
            @Click="btnCancleOnClick"
          />
        </div>
        <div class="function-btn">
          <Button
            buttonText="Lưu"
            buttonClass="button-primary"
            @Click="btnUpdateOnClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "AccountDetail",
  components: {
    Button,
  },
  props: {
    isShowDialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    btnCloseOnClick() {
      this.$emit("closeForm");
    },
    btnCancleOnClick() {
      this.$emit("closeForm");
    },
  },
};
</script>
<style>
.popup .popup-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.4;
  z-index: 17999;
}
.popup .popup-content {
  z-index: 18000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 537px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
}
.header-popup {
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 5px;
  box-sizing: border-box;
  font-size: 20px !important;
}
.header-popup > p {
  font-size: 20px;
  font-weight: 600;
}
.header-popup .close-icon {
  font-size: 24px;
  opacity: 0.6;
  margin-right: 10px;
  margin-top: -10px;
  cursor: pointer;
}
.popup-body {
  display: flex;
  flex-direction: column;
  padding: 10px 20px 0 20px;
}
.prop-item {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
}
.prop-item > p {
  font-weight: 600;
  margin-bottom: 5px;
}
.popup-footer {
  margin: 10px 20px 0 20px;
  height: 75px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #e0e0e0;
}
.function-btn{
  margin-left: 16px;
}

</style>