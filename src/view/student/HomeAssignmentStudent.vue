<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Assignment</div>
    </div>
    <div class="manage-content">
      <div class="teacher-toolbar">
        <div class="choose-class">
          <span>Chọn lớp</span>
          <Dropdown
            v-model="selectedClass"
            :options="classes"
            optionLabel="name"
            placeholder="Select a class"
            @change="showAssignment"
          />
        </div>
      </div>
      <div class="popup-assgiment-body">
        <div
          class="assginment-list"
          v-for="assignment in assignmentList"
          :key="assignment.id"
          @click="goToAssignment(assignment.id)"
        >
          <div class="wrapper-asignment">
            <div class="assignment-popup-title">
              {{ assignment.title }}
            </div>
            <div class="assignment-popup-due">
              Due to: {{ assignment.dueTo }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    header="Chi tiết assignment"
    v-model:visible="displayResponsive"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
  >
    <div class="title mb-5">{{ this.assignmentModel.title }}</div>
    <div class="due-to mb-10">{{ this.assignmentModel.dueTo }}</div>
    <span class="span-style mb-5">Instructions</span>
    <div class="content mb-10">{{ this.assignmentModel.content }}</div>
    <span class="span-style mb-5">My work</span>
    <FileUpload name="demo[]" url="./upload" :multiple="true" />
    <div class="footer">
      <Button
        label="Turn in"
        icon="pi pi-paperclip"
        @click="turnInAssignment"
        autofocus
        class="p-button-lg"
      />
    </div>
  </Dialog>
</template>
<script>
import Dropdown from "primevue/dropdown";
import ClassApi from "@/api/entities/ClassApi";
import AssigmentApi from "@/api/entities/AssigmentApi";
import AssignmentApi from "@/api/entities/AssigmentApi";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
export default {
  components: {
    Dropdown,
    Dialog,
    Button,
    FileUpload,
  },
  data() {
    return {
      selectedClass: null,
      classes: "",
      assignmentList: "",
      assignmentId: "",
      displayBasic: false,
      assignmentModel: {},
      displayResponsive: false,
    };
  },
  methods: {
    loadClassByUser() {
      ClassApi.getClassByUser().then((res) => {
        this.classes = res.data;
      });
    },
    showAssignment() {
      AssignmentApi.getAssignmentByClassId(this.selectedClass.classId).then(
        (res) => {
          console.log(res);
          this.assignmentList = res.data;
        }
      );
    },
    goToAssignment(assignmentId) {
      this.assignmentId = assignmentId;
      console.log(assignmentId);
      this.displayResponsive = true;
      AssignmentApi.getById(assignmentId).then((res) => {
        this.assignmentModel = res.data;
      });
    },
    turnInAssignment() {
      alert(this.assignmentId);
      AssigmentApi.submit(this.assignmentId)
        .then((res) => {
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "SUCCESS",
            detail: "Nộp bài thành công!",
            life: 3000,
          });
        })
        .catch((err) => {
          console.log(err);
          this.$toast.add({
            severity: "error",
            summary: "ERROR",
            detail: "Nộp bài thất bại!",
            life: 3000,
          });
        });
        this.displayResponsive = false;
    },
  },
  beforeCreate() {},
  created() {
    this.loadClassByUser();
  },
};
</script>
<style>
.title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}
.due-to {
  font-style: italic;
}
.span-style {
  font-weight: 600;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-5 {
  margin-bottom: 5px;
}
.footer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>