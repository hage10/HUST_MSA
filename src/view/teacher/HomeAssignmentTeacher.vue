<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Assignment</div>
    </div>
    <!-- <router-view></router-view> -->
    <div class="assignment-content">
      <div tag="main" name="card" class="body-content">
        <div class="classroom-group">
          <router-link
          to="/teacher/homeassignment/detailassignment"
            v-for="column in classList"
            :key="column.className"
            class="card"
            :style="column.color"
            @click="goTodetail"
          >
            <div class="description">
              <span>{{ column.className }}</span>
            </div>
          <!-- </div> -->
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <PopupDetailClass v-if="isShowPopupDetailClass" :isShowPopupDetailClass="isShowPopupDetailClass"     @goBack="
      () => {
        isShowPopupDetailClass = false;
      }
    "/>
</template>
<script>
import { classNames } from "./className";
import PopupDetailClass from "./PopupDetailClass.vue";
export default {
  components: {
    PopupDetailClass,
},
  data() {
    return {
      classList: classNames,
      isShowPopupDetailClass: '',
    };
  },
  methods:{
    goTodetail(){
      this.isShowPopupDetailClass=true;
    }
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

.classroom-group {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
}

.card {
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
}

.card:hover {
  transform: translate3d(0px, 0px, 0px);
}
.description {
  padding: 20px 0 0 20px;
}
.description > span {
  font-size: 18px;
  color: #000;
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