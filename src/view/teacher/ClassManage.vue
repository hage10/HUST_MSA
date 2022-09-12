<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Quản lý lớp</div>
    </div>
    <div class="manage-content">
      <div class="teacher-toolbar">
        <div class="choose-class">
          <span>Chọn lớp</span>
          <Combobox></Combobox>
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
          :tableDataList="tableDataList"
          @chooseAnEmployee="chooseAnEmployee"
        />
        <div class="footer-manage">
        <Button
          buttonText="Tạo lớp"
          buttonClass="button-primary"
          @Click="btnAddClassOnClick"
        />
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
import Combobox from "@/components/base/Combobox.vue";
import TheTable from "@/components/base/Table.vue";
import EmployeeApi from "../../api/entities/EmployeeApi";

import { studentColumns } from "./studentColumns";

export default {
  components: {
    Button,
    Combobox,
    TheTable,
  },
  data() {
    return {
      myEmployeeId: "",
      employeeSelected: {},
      //-------------------------------
      // các mảng cột và hàng truyền vào cho table
      tableColumns: studentColumns,
      tableDataList: [],
      // các biến lưu dữ liệu của paging
      //   totalRecord: 0,
      currentPage: 1,
      pagingSize: 100,
    };
  },
  methods: {
    /**
     * Từ searchTerms, pagingSize, currentPage => load ra query tương ứng để gọi api filter
     * Author TrungTQ
     * */
    getQueryStringFilter() {
      var paramStrs = `pageSize=${this.pagingSize}&pageNumber=${this.currentPage}`;
      if (this.searchTerms !== undefined && this.searchTerms !== "") {
        paramStrs += `&searchTerms=${this.searchTerms}`;
      }
      return paramStrs;
    },
    /**
     * Gọi api filter để thực hiện lấy dữ liệu đã được tìm kiếm và phân trang,
     * nhận res.data là list employee truyền cho Table và ToltalRecord để truyền cho pagingBar
     * Author TrungTQ
     * */
    load() {
      this.emitter.emit("showLoader");
      var vm = this;
      EmployeeApi.getFilterPaging(this.getQueryStringFilter()).then((res) => {
        console.log(res);
        vm.tableDataList = res.data.data.data;
        vm.totalRecord = res.data.data.totalRecord;
        this.emitter.emit("hideLoader");
      });
    },
    btnAddClassOnClick(){
      this.emitter.emit("showAddClass");
    },
    btnAddStudentOnClick(){
      this.emitter.emit("showAddStudent");
    }
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
.table-student{
    width: 100%;
  height: calc(100% - 68px);
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;

}
.footer-manage{
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
}
.footer-manage>button{
    margin-left: 24px;
}
</style>