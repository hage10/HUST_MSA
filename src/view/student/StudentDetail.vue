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
          <div>MSSV:</div>
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
              <InputText type="text" class="m-input input-24" disabled/>
            </div>
            <div class="prop-item">
              <p>MASS</p>
              <InputText type="text" class="m-input input-24" disabled/>
            </div>
            <div class="prop-item">
              <p>Ngày sinh</p>
              <InputText type="text" class="m-input input-24" disabled/>
            </div>
            <div class="prop-item">
              <p>Lớp</p>
              <InputText type="text" class="m-input input-24" disabled/>
            </div>
            <div class="prop-item">
              <p>Email</p>
              <InputText type="email" class="m-input input-24" disabled/>
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
              <p>Mật Khẩu cũ</p>
              <span class="p-input-icon-right input-24">
                <i
                  class="pi pi-eye"
                  v-if="visibility == 'text'"
                  @click="hidePass1()"
                />
                <i
                  class="pi pi-eye-slash"
                  v-if="visibility == 'password'"
                  @click="showPass1()"
                />
                <InputText :type="visibility" v-model="oldPassword" />
              </span>
            </div>
            <div class="prop-item">
              <p>Mật Khẩu mới</p>
              <span class="p-input-icon-right input-24">
                <i
                  class="pi pi-eye"
                  v-if="visibility2 == 'text'"
                  @click="hidePass2()"
                />
                <i
                  class="pi pi-eye-slash"
                  v-if="visibility2 == 'password'"
                  @click="showPass2()"
                />
                <InputText :type="visibility2" v-model="neuPassword" />
              </span>
            </div>
            <div class="prop-item">
              <p>Nhập lại mật khẩu</p>
              <span class="p-input-icon-right input-24">
                <i
                  class="pi pi-eye"
                  v-if="visibility3 == 'text'"
                  @click="hidePass3()"
                />
                <i
                  class="pi pi-eye-slash"
                  v-if="visibility3 == 'password'"
                  @click="showPass3()"
                />
                <InputText :type="visibility3" v-model="repeatPassword" />
              </span>
            </div>
          </div>
          <div class="btn-wrapper">
            <Button label="Đổi mật khẩu" class="p-padding" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from "primevue/inputtext";

export default {
  name: "TheButton",
  components: {
    Button,
    InputText,
  },
  data() {
    return {
      visibility: "password",
      visibility2: "password",
      visibility3: "password",
    };
  },
  methods: {
    showPass1() {
      this.visibility = "text";
    },
    hidePass1() {
      this.visibility = "password";
    },
    showPass2() {
      this.visibility2 = "text";
    },
    hidePass2() {
      this.visibility2 = "password";
    },
    showPass3() {
      this.visibility3 = "text";
    },
    hidePass3() {
      this.visibility3 = "password";
    },
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
  margin-bottom: 5px;
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