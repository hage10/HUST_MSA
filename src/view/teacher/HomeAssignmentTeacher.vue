<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Assignment</div>
    </div>
    <!-- <router-view></router-view> -->
    <div class="assignment-content">
      <div class="tool-header">
        <Button
            buttonText="Tạo lớp"
            buttonClass="button-primary"
            @Click="btnAddClassOnClick"
          />
      </div>
      <div tag="main" name="card" class="body-content">
        <div class="classroom-group">
          <router-link
          to="/teacher/homeassignment/detailassignment"
            v-for="column in classList"
            :key="column.name"
            class="card-class"
            @click="goTodetail(column.classId)"
          >
            <div class="description">
              <span>{{ column.name }}</span>
            </div>
          <!-- </div> -->
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <PopupDetailClass :isShowPopupDetailClass="isShowPopupDetailClass" @goBack="
      () => {
        isShowPopupDetailClass = false;
      }
    "/>
</template>
<script>
  import ClassApi from "../../api/entities/ClassApi"
// import { classNames } from "./className";
import PopupDetailClass from "./PopupDetailClass.vue";
import Button from "@/components/base/Button.vue";
export default {
  components: {
    PopupDetailClass,
    Button
},
  data() {
    return {
      classList: "",
      isShowPopupDetailClass: false,
    };
  },
  methods:{
    goTodetail(classId){
      this.isShowPopupDetailClass = true;
      this.emitter.emit("chooseClass",classId);
    },
    btnAddClassOnClick() {
      this.emitter.emit("showAddClass");
    },
  },
  created(){
    ClassApi.getAll().then((res)=>{
      console.log(res);
      this.classList=res.data
    })
  }

};
</script>
<style>
.assignment-content {
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 154px);
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.tool-header{
  padding: 24px 0 20px 42px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
}
.classroom-group {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
}

.card-class {
  height: 150px;
  width: 394px;
  margin-left: 24px;
  transform: perspective(1000px) translate3d(0px, 0px, -250px) rotateX(0)
    scale(1.15, 1.1);
  border-radius: 20px;
  border: 4px solid #e6e6e6;
  box-shadow: 0 40px 40px -20px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out transform;
  cursor: pointer;
  background-color: #b2acf6;
}

.card-class:hover {
  transform: translate3d(0px, 0px, 0px);
}
.description {
  padding: 20px 0 0 20px;
}
.description > span {
  font-size: 18px;
  color: #fff;
}
@keyframes mouseOver {
  0% {
    top: 0;
  }
  100% {
    top: -5px;
  }
}

@keyframes mouseOut {
  0% {
    top: -5px;
  }
  100% {
    top: 0;
  }
}

@keyframes imageFadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>