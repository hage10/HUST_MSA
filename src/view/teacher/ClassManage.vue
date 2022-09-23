<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Quản lý lớp</div>
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
          />
        </div>
        <div class="search-account">
          <input
            type="text"
            class="m-input input-240 input-padding-right"
            placeholder="Tìm sinh viên"
          />
          <font-awesome-icon icon="magnifying-glass" class="icon-search" />
        </div>
      </div>
      <div class="table-student">
        <TheTable
          :tableColumns="tableColumns"
          :tableDataList="tableDataListStudent"
          @chooseAnEmployee="chooseAnEmployee"
        />
        <div class="footer-manage">

          <Button
            buttonText="Thêm sinh viên vào lớp"
            buttonClass="button-primary"
            @Click="btnAddStudentOnClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/base/Button.vue";
import TheTable from "@/components/base/Table.vue";
import Dropdown from "primevue/dropdown";
import { studentColumns } from "./studentColumns";
import ClassApi from "@/api/entities/ClassApi";

export default {
  components: {
    Button,
    TheTable,
    Dropdown,
  },
  data() {
    return {
      myEmployeeId: "",
      employeeSelected: {},
      //-------------------------------
      // các mảng cột và hàng truyền vào cho table
      tableColumns: studentColumns,
      tableDataListStudent: [],
      // các biến lưu dữ liệu của paging
      //   totalRecord: 0,
      currentPage: 1,
      pagingSize: 20,
      selectedClass: "",
      cities: [],
    };
  },
  methods: {
    load() {
      this.emitter.emit("showLoader");
      ClassApi.getUserByClassId(1).then((res) => {
        this.tableDataListStudent = res.data;
        this.emitter.emit("hideLoader");
      });
    },

    btnAddStudentOnClick() {
      this.emitter.emit("showAddStudent");
    },
  },
  beforeCreate() {
    ClassApi.getAll().then((res) => {
      this.classes = res.data;
    });
  },
  created() {
    this.load();
    this.emitter.on("load", () => {
      this.load();
    });
  },
};
</script>
<style>
.teacher-toolbar {
  display: flex;
  z-index: 10001;
}
.choose-class {
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 100%;
}
.choose-class > span {
  font-weight: 600;
  margin-right: 12px;
}
.table-student {
  width: 100%;
  height: calc(100% - 68px);
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
}
.footer-manage {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}
.footer-manage > button {
  margin-left: 24px;
}
.p-dropdown {
  width: 14rem;
}
</style>