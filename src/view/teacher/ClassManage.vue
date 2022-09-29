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
            @change="showClass"
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
        <DataTable :value="tableDataListStudent" responsiveLayout="scroll">
          <Column field="fullName" header="HỌ TÊN"></Column>
          <Column field="mssv" header="MSSV"></Column>
          <Column field="email" header="EMAIL"></Column>
          <Column field="phoneNumber" header="SỐ ĐIỆN THOẠI"></Column>
          <Column field="id" header="Chức năng">
            <template #body="slotProps">
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger mb-2"
                @click="btnDelete(slotProps.data.id)"
              />
            </template>
          </Column>
        </DataTable>
        <div class="footer-manage">
          <Button
            v-if="selectedClass"
            label="Thêm sinh viên vào lớp"
            icon="pi pi-plus"
            @click="openBasic"
            class="p-button-lg"
          />
        </div>
      </div>
    </div>
  </div>
  <Dialog
    header="Thêm sinh viên"
    v-model:visible="displayBasic"
    :breakpoints="{ '960px': '55vw', '640px': '40vw' }"
    :style="{ width: '35vw' }"
  >
    <AutoComplete
      v-model="useModels"
      :suggestions="filteredUser"
      @complete="searchUser($event)"
      :dropdown="true"
      optionLabel="fullName"
      placeholder="Nhập tên hoặc mã số sinh viên"
      forceSelection
    >
      <template #item="slotProps">
        <div class="country-item">
          <div class="ml-2">
            {{ slotProps.item.mssv }} - {{ slotProps.item.fullName }}
          </div>
        </div>
      </template>
    </AutoComplete>
    <template #footer>
      <Button label="Yes" icon="pi pi-check" @click="addStudent" autofocus />
    </template>
  </Dialog>
</template>
<script>
import Dropdown from "primevue/dropdown";
import ClassApi from "@/api/entities/ClassApi";
import UserApi from "@/api/entities/UserApi";
import Dialog from "primevue/dialog";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
export default {
  components: {
    Button,
    Dropdown,
    Dialog,
    AutoComplete,
    DataTable,
    Column,
  },
  data() {
    return {
      displayBasic: false,
      tableDataListStudent: [],
      currentPage: 1,
      pagingSize: 20,
      selectedClass: null,
      cities: [],
      users: {},
      filteredUser: [],
      useModels: null,
    };
  },
  methods: {
    searchUser(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredUser = [...this.users];
        } else {
          this.filteredUser = this.users.filter((country) => {
            return (
              country.fullName
                .toLowerCase()
                .includes(event.query.toLowerCase()) ||
              (country.mssv &&
                country.mssv.toLowerCase().includes(event.query.toLowerCase()))
            );
          });
        }
      }, 200);
    },
    showClass() {
      this.load(this.selectedClass.classId);
    },
    getQueryStringFilter() {
      var paramStrs = `PageNumber=${this.currentPage}&PageSize=${this.pagingSize}`;
      if (this.searchTerms !== undefined && this.searchTerms !== "") {
        paramStrs += `&searchTerms=${this.searchTerms}`;
      }
      return paramStrs;
    },
    loadUser() {
      UserApi.getFilterPaging(this.getQueryStringFilter()).then((res) => {
        console.log(res);
        this.users = res.data;
      });
    },
    load(idClass) {
      this.emitter.emit("showLoader");
      ClassApi.getUserByClassId(idClass).then((res) => {
        this.tableDataListStudent = res.data;
        this.emitter.emit("hideLoader");
      });
    },
    openBasic() {
      this.displayBasic = true;
    },
    addStudent() {
      console.log(this.useModels.id);
      ClassApi.addStudentsToClass(this.selectedClass.classId, this.useModels.id)
        .then((res) => {
          this.displayBasic = false;
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "SUCCESS!",
            detail: "Thêm sinh viên thành công!",
            life: 3000,
          });
          this.load(this.selectedClass.classId);
        })
        .catch((err) => {
          console.log(err);
          this.displayBasic = false;
          this.$toast.add({
            severity: "error",
            summary: "ERROR!",
            detail: "Sinh viên đã có trong lớp!",
            life: 3000,
          });
        });
    },
    btnDelete(idUser) {
      this.$confirm.require({
        message: `Bạn có thực sự muốn xóa sinh viên này không`,
        header: "Xác nhận",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          ClassApi.removeStudentsToClass(this.selectedClass.classId, idUser)
            .then((res) => {
              console.log(res);
              this.$toast.add({
                severity: "success",
                summary: "SUCCESS!",
                detail: "Xóa sinh viên thành công!",
                life: 3000,
              });
              this.load(this.selectedClass.classId);
            })
            .catch((err) => {
              console.log(err);
              this.$toast.add({
                severity: "error",
                summary: "ERROR!",
                detail: "Xóa thất bại!",
                life: 3000,
              });
            });
        },
        reject: () => {
          //callback to execute when user rejects the action
          this.$confirm.close();
        },
        onHide: () => {
          //Callback to execute when dialog is hidden
          this.$confirm.close();
        },
      });
    },
  },
  beforeCreate() {
    ClassApi.getAll().then((res) => {
      this.classes = res.data;
    });
  },
  created() {
    ClassApi.getAll().then((res) => {
      this.classes = res.data;
    });
    this.load(98); 
    // this.loadUser();
  },
};
</script>
<style>
.p-autocomplete.p-component.p-inputwrapper.p-autocomplete-dd {
  width: 100%;
}
.teacher-toolbar {
  display: flex;
  z-index: 10001;
}
.choose-class {
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
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

.p-datatable .p-column-header-content {
  justify-content: center;
}
.p-datatable .p-datatable-tbody > tr > td {
  text-align: center !important;
}
td:last-child {
    align-items: center;
}
</style>