<template>
  <div class="popup">
    <div
      :class="['class-assignment', { 'detail-show': isShowPopupDetailClass }]"
    >
      <router-link to="/teacher/homeassignment">
        <font-awesome-icon
          icon="square-caret-left"
          class="icon-back"
          @click="goBackHomeAssignment"
          style="z-index: 40000"
        />
      </router-link>
      <TabView>
        <TabPanel header="Assignments">
          <div class="popup-assgiment-body">
            <div
              class="assginment-list"
              v-for="assignment in assignmentList"
              :key="assignment.id"
              @dblclick="goToGrade"
            >
              <div class="wrapper-asignment">
                <div class="assignment-popup-title">
                  {{ assignment.title }}
                </div>
                <div class="assignment-popup-due">
                  Due to: {{ assignment.dueTo }}
                </div>
              </div>
              <div class="assignment-tool">
                <Button
                  label="Edit"
                  icon="pi pi-ellipsis-h"
                  class="p-button p-button-warning"
                  @click="btnEditAssignment(assignment.id)"
                />
                <Button
                  label="Delete"
                  icon="pi pi-trash"
                  class="p-button p-button-danger"
                  style="margin-left: 6px"
                  @click="btnDeleteAssignment(assignment.id)"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Create a new Assignment" @tab-click="resetModel($event)">
          <div class="assignment-content">
            <div class="main-assignment">
              <div class="form-wrapper">
                <div class="title-and-content">
                  <div class="form-assignment">
                    <span>Tiêu đề</span>
                    <input
                      type="text"
                      class="m-input"
                      v-model="assignmentModel.title"
                    />
                  </div>
                  <div class="form-assignment">
                    <span>Nội dung</span>
                    <textarea
                      name=""
                      id=""
                      rows="14"
                      class="m-textarea"
                      v-model="assignmentModel.content"
                    ></textarea>
                  </div>
                </div>
                <div class="due-and-file">
                  <div class="form-assignment">
                    <span>Thời hạn</span>
                    <Calendar v-model="assignmentModel.dueTo" />
                  </div>
                  <div class="form-assignment">
                    <span>File đính kèm</span>
                    <FileUpload
                      name="demo[]"
                      url="./upload.php"
                      @upload="onUpload"
                      :multiple="true"
                      :maxFileSize="1000000"
                      style="overflow: auto"
                    >
                      <template #empty>
                        <p>Drag and drop files to here to upload.</p>
                      </template>
                    </FileUpload>
                  </div>
                </div>
              </div>
              <div class="footer-assignment">
                <Button
                  label="Tạo Assignment"
                  icon="pi pi-plus"
                  class="p-button-lg"
                  @click="btnAddAssignment"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Grade">
          <div class="assignment-content">
            <div class="main-assignment flex-start">
              <div class="choose-assignment">
                <span>Chọn Assignment </span>
                <Dropdown
                  v-model="selectedAssignment"
                  :options="assignmentList"
                  optionLabel="title"
                  placeholder="Select a assignment"
                  @change="showClass"
                />
              </div>
              <DataTable :value="tableDataAssignment" responsiveLayout="scroll">
                <Column field="fullName" header="HỌ TÊN"></Column>
                <Column field="mssv" header="MSSV"></Column>
                <Column field="feedBack" header="FEEDBACK"></Column>
                <Column field="grade" header="GRADE">
                  <template #editor="{ data, field }">
                    <InputText v-model="data[field]" autofocus /> </template
                ></Column>
              </DataTable>
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  </div>
  <Dialog
    header="Chi tiết assignment"
    v-model:visible="displayBasic"
    :breakpoints="{ '960px': '55vw', '640px': '40vw' }"
    :style="{ width: '60vw' }"
  >
    <div class="form-wrapper">
      <div class="title-and-content">
        <div class="form-assignment">
          <span>Tiêu đề</span>
          <input type="text" class="m-input" v-model="assignmentModel.title" />
        </div>
        <div class="form-assignment">
          <span>Nội dung</span>
          <textarea
            name=""
            id=""
            rows="14"
            class="m-textarea"
            v-model="assignmentModel.content"
          ></textarea>
        </div>
      </div>
      <div class="due-and-file">
        <div class="form-assignment">
          <span>Thời hạn</span>
          <Calendar v-model="assignmentModel.dueTo" />
        </div>
        <div class="form-assignment">
          <span>File đính kèm</span>
          <FileUpload
            name="demo[]"
            url="./upload.php"
            @upload="onUpload"
            :multiple="true"
            :maxFileSize="1000000"
            style="overflow: auto"
          >
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>
        </div>
      </div>
    </div>
    <div class="form-assignment">
      <Button
        label="Lưu"
        icon="pi pi-save"
        class="p-button-lg"
        @click="btnSaveAssignment"
      />
    </div>
  </Dialog>
</template>
<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import AssignmentApi from "@/api/entities/AssigmentApi";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";

export default {
  data() {
    return {
      assignmentList: "",
      assignmentModel: {},
      selectedAssignment: null,
      displayBasic: false,
      assignmentId: "",
    };
  },
  components: {
    TabView,
    TabPanel,
    Button,
    FileUpload,
    Calendar,
    Dropdown,
    DataTable,
    Column,
    Dialog,
  },
  props: {
    isShowPopupDetailClass: {
      type: Boolean,
      default: false,
    },
    idClass: Number,
  },
  methods: {
    resetModel(){
      alert(123)
      // this.assignmentModel=""
    },
    goBackHomeAssignment() {
      this.$emit("goBack");
      alert(this.idClass);
    },
    btnDeleteAssignment(assignmentId) {
      this.$confirm.require({
        target: event.currentTarget,
        message: "Do you want to delete this record?",
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: () => {
          AssignmentApi.delete(assignmentId)
            .then((res) => {
              console.log(res);
              this.$toast.add({
                severity: "success",
                summary: "SUCCESS",
                detail: "Xóa assignment thành công",
                life: 3000,
              });
              this.getListClass();
            })
            .catch((err) => {
              console.log(err);
              this.$toast.add({
                severity: "error",
                summary: "ERROR!",
                detail: "Xóa assignment thất bại",
                life: 3000,
              });
            });
        },
        reject: () => {},
      });
    },
    btnEditAssignment(assignmentId) {
      this.assignmentId = assignmentId;
      AssignmentApi.getById(assignmentId).then((res) => {
        this.assignmentModel = res.data;
      });
      this.displayBasic = true;
    },
    btnSaveAssignment() {
      AssignmentApi.update(this.assignmentId, this.assignmentModel)
        .then(async (res) => {
          this.displayBasic = false;
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "SUCCESS",
            detail: "Cập nhật thành công!",
            life: 3000,
          });
          this.loadAssignmentByClassId();
        })
        .catch((err) => {
          this.errorMsg(err);
          this.displayBasic = false;
          this.$toast.add({
            severity: "success",
            summary: "Cập nhật thất bại!",
            detail: "vui lòng kiểm tra lại",
            life: 3000,
          });
        });
    },
    btnAddAssignment() {
      alert(this.idClass);
      this.assignmentModel.classId = this.idClass;
      AssignmentApi.add(this.assignmentModel)
        .then((res) => {
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "SUCCESS!",
            detail: "Thêm thành công",
            life: 3000,
          });
          this.loadAssignmentByClassId();
        })
        .catch((err) => {
          console.log(err);
          this.$toast.add({
            severity: "error",
            summary: "ERROR!",
            detail: "Thêm thất bại",
            life: 3000,
          });
        });
    },
    loadAssignmentByClassId() {
      AssignmentApi.getAssignmentByClassId(this.idClass).then((res) => {
        console.log(res);
        console.log(this.idClass);
        this.assignmentList = res.data;
      });
    },
  },
  created() {
    this.loadAssignmentByClassId();
  },
  watch: {
    idClass() {
      AssignmentApi.getAssignmentByClassId(this.idClass).then((res) => {
        console.log(res);
        console.log(this.idClass);
        this.assignmentList = res.data;
      });
    },
  },
};
</script>
      <style>
.class-assignment {
  width: calc(100% - 258px);
  height: calc(100vh - 154px);
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  z-index: 34000;
  position: fixed;
  top: 10px;
  background-color: #fff;
  overflow: auto;
  margin-top: 122px;
  margin-left: 20px;
  transform: translate(110%, 0);
  transition: 0.8s;
}

.detail-show {
  transform: translate(0, 0);
  transition: 0.8s;
}

.popup-assgiment-header {
  display: flex;
  position: sticky;
  justify-content: center;
  top: 0;
  background: #fff;
  width: 100%;
  padding: 20px 0;
  line-height: 32px;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 10%);
  box-sizing: border-box;
}
.icon-back {
  position: fixed;
  top: 0px;
  left: 0px;
  font-size: 36px;
  color: #2196f3;
  margin: 20px 30px;
  cursor: pointer;
}
.icon-back:hover {
  color: #0d89ec;
}

.p-tabview .p-tabview-nav {
  border: none !important;
  justify-content: center;
  height: 41px;
}
.assginment-list {
  display: flex;
  margin-top: 10px;
  align-items: center;
  width: 85%;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 100px;
  margin-bottom: 20px;
  background-color: #f4f5f8;
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
.popup-assgiment-body {
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.assignment-content {
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 221px);
  display: flex;
  flex-direction: column;
}
.toolbar-header {
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  font-weight: 600;
}
.toolbar-header > span {
  font-size: 16px;
  margin-bottom: 5px;
}
.main-assignment {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 20px 20px;
  height: 100%;
}
.flex-start {
  align-items: flex-start !important;
  justify-content: flex-start !important;
}
.form-wrapper {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.title-and-content,
.due-and-file {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.title-and-content {
  width: 60%;
}
.due-and-file {
  width: 35%;
}
.footer-assignment {
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: flex-end;
}
.form-assignment {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin-top: 24px;
}
.form-assignment > textarea {
  resize: none;
}
.form-assignment > span {
  resize: none;
  margin-bottom: 6px;
  font-size: 14px;
}
</style>