<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Quản lý tài khoản</div>
      <Button
        buttonText="Thêm mới tài khoản"
        buttonClass="button-primary"
        @Click="btnAddOnClick"
      />
    </div>
    <div class="manage-content">
      <div class="manage-toolbar">
        <div class="search-account">
          <input
            type="text"
            class="m-input input-240 input-padding-right"
            placeholder="Tìm tài khoản"
          />
          <font-awesome-icon icon="magnifying-glass" class="icon-search" />
        </div>
      </div>
      <div class="table-account">
        <TheTable
          :tableColumns="tableColumns"
          :tableDataList="tableDataList"
          @chooseAnEmployee="chooseAnEmployee"
        />
      </div>
    </div>
  </div>
  <AccountDetail v-if="isShowDialog" @closeForm="
        () => {
          isShowDialog = false;
        }
      "></AccountDetail>
</template>
  
  <script>
import TheTable from "../../components/base/Table.vue";
import { accountColumns } from "./AccountColumns.js";
import EmployeeApi from "../../api/entities/EmployeeApi";
import Button from "@/components/base/Button.vue";
// import { accountColumns } from "./accountColumns.js";
import AccountDetail from "@/components/base/AccountDetail.vue";
export default {
  name: "TheButton",
  components: {
    TheTable,
    Button,
    AccountDetail,
  },
  data() {
    return {
      myEmployeeId: "",
      employeeSelected: {},
      //-------------------------------
      // các mảng cột và hàng truyền vào cho table
      tableColumns: accountColumns,
      tableDataList: [],
      // các biến lưu dữ liệu của paging
      totalRecord: 0,
      currentPage: 1,
      pagingSize: 20,
      // các biến liên quan đến xử lí với dialog
      isShowDialog: false,
      dialogMode: "",
      isReOpenDialog: false,
      // lưu giá trị nhận được từ inputSearch
      searchTerms: "",
    };
  },
  methods: {
    /**
     * Ấn button thêm mới nhân viên
     * Author: TrungTQ
     */
    btnAddOnClick() {
      this.isShowDialog = true;
      // this.dialogMode = "add";
    },
    /**
     * Nhận sự kiện khi table chọn 1 nhân viên và truyền lên kèm theo id nhân viên => mở dilalog sửa
     * @param employeeId
     * Author TrungTQ
     */
    chooseAnEmployee(id) {
      this.isShowDialog = true;
      this.dialogMode = "edit";
      setTimeout(() => {
        this.isReOpenDialog = !this.isReOpenDialog;
      }, 100);
      this.myEmployeeId = id;
    },

    /**
     * Thay đổi pagingSize
     * @param newPagingSize
     * Author TrungTQ
     */
    changePagingSize(newPagingSize) {
      this.pagingSize = newPagingSize;
      this.load();
    },
    /**
     * Thay đổi currentPage
     * @param newCurentPage
     * Author TrungTQ
     */
    changeCurrentPage(newCurentPage) {
      this.currentPage = newCurentPage;
      this.load();
    },
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
    /**
     * Thực hiện tìm kiếm khi enter input search
     * Author TrungTQ
     * */
    enterSearch() {
      this.currentPage = 1;
      this.load();
    },
  },

  created() {
    this.emitter.on("btnEditOnClick", (id) => {
      this.isShowDialog = true;
      this.dialogMode = "edit";
      this.myEmployeeId = id;
    });

    this.load();
    this.emitter.on("load", () => {
      this.load();
    });
    this.emitter.on("hideDialog", () => {
      this.isShowDialog = false;
    });
    // lắng nghe sự kiện nhân bản nhân viên
    this.emitter.on("cloneEmployee", (employeeId) => {
      this.isShowDialog = true;
      this.dialogMode = "clone";
      this.myEmployeeId = employeeId;
    });
  },
};
</script>

  <style>
.manage-content {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search-account {
  display: flex;
  justify-content: end;
  width: 100%;
  height: 68px;
  padding: 16px 20px;
  box-sizing: border-box;
  position: relative;
}

.icon-search {
  position: absolute;
  right: 27px;
  top: 22px;
  color: #68686863;
  font-size: 19px;
}
.table-account {
  width: 100%;
  padding: 0 20px 20px 20px;
}
</style>