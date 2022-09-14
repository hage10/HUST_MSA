<template>
  <div class="popup-assgiment-body">
    <div
      class="assginment-list"
      v-for="assignment in assigmentList"
      :key="assignment.assignmentId"
    >
      <div class="wrapper-asignment">
        <div class="assignment-popup-title">
          {{ assignment.assignmentTitle }}
        </div>
        <div class="assignment-popup-due">
          Due to: {{ assignment.assignmentDue }}
        </div>
      </div>
      <div class="assignment-tool">
        <Button buttonText="Edit" buttonClass="button-primary" />

      </div>
    </div>
  </div>
</template>
<script>
import { assignments } from "./assignmentName";
import Button from "@/components/base/Button.vue";
export default {
  data() {
    return {
      assigmentList: assignments,
    };
  },
  components:{
    Button
  }
};
</script>
<style>
.popup-assgiment-body {
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.assginment-list {
    display: flex;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 100px;
    margin-bottom: 20px;
    background-color: #f4f5f8;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px 20px 20px;
}
.assginment-list:hover {
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.assignment-popup-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 3px;
}
.assignment-popup-due {
  margin-bottom: 5px;
}
</style>