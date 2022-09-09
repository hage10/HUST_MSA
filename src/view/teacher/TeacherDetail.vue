<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Thông tin cá nhân</div>
    </div>
    <div class="student-detail">
      <div class="avatar-area">
        <div class="avatar-img">
          <img src="../../assets/imgs/jpg.png" alt="" />
        </div>
        <div class="student-id">
          <div>MSGV:</div>
          <div class="id">20186666</div>
        </div>
      </div>
      <div class="info-area">
        <div class="your-info">
          <div class="header-info">
            <font-awesome-icon icon="circle-info" />
            <p>Thông tin</p>
          </div>
          <div class="main-info">
            <div class="prop-item">
              <p>Họ và tên</p>
              <input type="text" class="m-input input-24" />
            </div>
            <div class="prop-item">
              <p>Giới tính</p>
              <input type="text" class="m-input input-24" />
            </div>
            <div class="prop-item">
              <p>Ngày sinh</p>
              <input type="text" class="m-input input-24" />
            </div>
            <div class="prop-item">
              <p>Bộ môn</p>
              <input type="text" class="m-input input-24" />
            </div>
            <div class="prop-item">
              <p>Web</p>
              <input type="text" class="m-input input-24" />
            </div>
            <div class="prop-item">
              <p>Số điện thoại</p>
              <input type="text" class="m-input input-24" />
            </div>
            <div class="prop-item">
              <p>Email</p>
              <input type="email" class="m-input input-24" />
            </div>
          </div>
          
        </div>
        <div class="change-password">
          <div class="header-change-pass">
            <font-awesome-icon icon="key" />
            <p>Thay đổi mật khẩu</p>
          </div>
          <div class="main-change-pass">
            <div class="prop-item">
              <p>Mật khẩu cũ</p>
              <input type="password" class="m-input input-24" />
            </div>
            <div class="prop-item">
              <p>Mật Khẩu mới</p>
              <input type="password" class="m-input  input-24" />
            </div>
            <div class="prop-item">
              <p>Nhập lại mật khẩu</p>
              <input type="password" class="m-input input-24" />
            </div>
          </div>
          <div class="btn-wrapper">
            <Button
              buttonText="Cập nhật"
              buttonClass="button-primary btn-120"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/base/Button.vue";
export default {
  name: "TheButton",
  components: {
    Button,
  },
};
</script>
<style>
.student-detail {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.avatar-area {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar-img > img {
  width: 270px;
  height: 350px;
  border: 2px solid #eceef1;
  border-radius: 4px;
}
.student-id {
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
}
.student-id > div {
  font-size: 20px;
}
.info-area {
  display: flex;
  flex-direction: row;
  width: 70%;
  align-items: flex-start;
  margin-top: 50px;
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
  margin-bottom: 2px;
}
.your-info {
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 2px solid #eceef1;
  border-radius: 4px;
  margin-right: 20px;
}
.header-info,
.header-change-pass {
  display: flex;
  align-items: center;
  background-color: #eceef1;
  height: 30px;
  width: 100%;
  color: #000;
  padding-left: 10px;
}
.header-info > p,
.header-change-pass > p {
  font-size: 16px;
  padding-left: 6px;
  font-weight: 600;
}
.main-info {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.change-password {
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 2px solid #eceef1;
  border-radius: 4px;
  margin-right: 20px;
}

.main-change-pass {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
</style>