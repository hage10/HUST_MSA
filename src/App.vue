<template>
  <!-- <the-container/> -->
  <router-view></router-view>
  <DialogConfirm
    :popupListButton="listButton"
    :popupType="popupType"
    :popupText="popupText"
    v-if="isShowPopup"
    @popupOnConfirm="popupOnConfirm"
  />
  <ToastMessenger
    :mesType="mesType"
    :mesText="mesText"
    :isShowMes="isShowMes"
    :hideMes="hideMes"
  />
  <Loader :isShowLoader="isShowLoader" />
  <AddClass
    v-if="isShowAddClass"
    @hideAddClass="
      () => {
        isShowAddClass = false;
      }
    "
  />
  <PopupAddStudent
    v-if="isShowAddStudent"
    @hideAddStudent="
      () => {
        isShowAddStudent = false;
      }
    "
  />
</template>

<script>
import DialogConfirm from "./components/base/DialogConfirm.vue";
import ToastMessenger from "./components/base/ToastMessenger.vue";
import Loader from "./components/base/Loader.vue";
import AddClass from "./components/base/AddClass.vue";
import PopupAddStudent from "./components/base/PopupAddStudent.vue";
export default {
  name: "App",
  components: {
    DialogConfirm,
    ToastMessenger,
    Loader,
    AddClass,
    PopupAddStudent
  },
  data() {
    return {
      // các biến truyền vào cho popup
      isShowPopup: false,
      popupText: "",
      popupType: "",
      listButton: "",
      // giá trị ẩn hoặc hiện toastMessenger
      isShowMes: false,
      mesText: "",
      mesType: "",
      isShowLoader: false,
      isShowAddClass: false,
      isShowAddStudent:false,
    };
  },
  methods: {
    popupOnConfirm(btnClicked) {
      switch (btnClicked) {
        /*có*/
        case "x":
          if (this.modeForPopup == "delete") {
            this.emitter.emit("confirmToDelete");
            this.isShowPopup = false;
          }
          /*Không*/
          break;
        case "y":
          if (this.modeForPopup == "saveChange") {
            this.isShowPopup = false;
            this.emitter.emit("hideDialog");
          }
          break;
        /*Hủy*/
        case "z":
          if (this.modeForPopup == "saveChange") {
            this.isShowPopup = false;
          }
          break;
        /*Đóng*/
        case "t":
          if (this.modeForPopup == "messenger") {
            this.isShowPopup = false;
          }
          break;
        /*Không*/
        case "w":
          if (this.modeForPopup == "delete") {
            this.isShowPopup = false;
          }
          break;
        /*Đồng ý*/
        case "u":
          if (this.modeForPopup == "messenger") {
            this.isShowPopup = false;
          }
          break;
        default:
          break;
      }
    },
    hideMes() {
      this.isShowMes = false;
    },
  },
  created() {
    this.emitter.on("showPopup", (a) => {
      console.log(a.split("###")[0]);
      console.log(a.split("###")[1]);
      console.log(a.split("###")[2]);
      this.isShowPopup = true;
      this.popupText = a.split("###")[0];
      this.popupType = a.split("###")[1];
      this.listButton = a.split("###")[2];
      this.modeForPopup = a.split("###")[3];
    });
    this.emitter.on("showMes", (b) => {
      this.mesText = b.split("###")[0];
      this.mesType = b.split("###")[1];
      this.isShowMes = true;
    });
    this.emitter.on("hideMes", () => {
      this.isShowMes = false;
    });
    this.emitter.on("showLoader", () => {
      this.isShowLoader = true;
    });
    this.emitter.on("hideLoader", () => {
      this.isShowLoader = false;
    });
    this.emitter.on("showAddClass", () => {
      this.isShowAddClass = true;
    });
    this.emitter.on("showAddStudent", () => {
      this.isShowAddStudent = true;
    });
  },
};
</script>

<style>
* {
  font-family: "GoogleSans-Regular";
  font-size: 13px;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: none;
}
.icon-20 {
  height: 20px;
  width: 20px;
}
.input-24 {
  width: 100%;
}
::placeholder {
  font-family: "GoogleSans-Italic";
  font-size: 13px;
}
.input-240 {
  width: 240px;
}
.input-350 {
  width: 350px;
}
.input-padding-right {
  padding-right: 32px !important;
}
.m-input {
  height: 32px;
  border: 1px solid #bbbbbb;
  border-radius: 2px;
  padding: 0 12px 0 10px;
  outline: none;
  font-size: 13px;
}

.m-input:focus {
  border: 1px solid #6558ef;
}
.m-textarea {
  height: auto;
  border: 1px solid #bbbbbb;
  border-radius: 2px;
  padding: 10px;
  outline: none;
  font-size: 13px;
}
.m-textarea:focus {
  border: 1px solid #ffcb3e;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #b8bcc3;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #888888;
}

::-webkit-scrollbar:horizontal {
  height: 10px;
  background-color: #f1f1f1;
  z-index: 30000;
}

::-webkit-scrollbar-thumb:horizontal {
  background: #b8bcc3;
}

::-webkit-scrollbar-thumb:horizontal:hover {
  background: #888888;
}

@font-face {
  font-family: "GoogleSans-Bold";
  src: url("./assets/fonts/notosans-bold.3ede5aff.woff2") format("opentype");
}

@font-face {
  font-family: "GoogleSans-Thin";
  src: url("./assets/fonts/notosans-semibold.df3e6dc4.woff2") format("opentype");
}

@font-face {
  font-family: "GoogleSans-Italic";
  src: url("./assets/fonts/notosans-italic.1c1aaac9.woff2") format("opentype");
}

@font-face {
  font-family: "GoogleSans-Regular";
  src: url("./assets/fonts/notosans-regular.2cb88a13.woff2") format("opentype");
}

</style>
