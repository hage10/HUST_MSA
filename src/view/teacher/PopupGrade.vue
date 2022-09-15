<template>
  <div class="popup">
    <div class="detail-grade">
        <TheTable
          :tableColumns="tableColumns"
          :tableDataList="tableDataListStudent"
          @chooseAnEmployee="chooseAnEmployee"
        />
    </div>
  </div>
</template>
<script>
    import TheTable from '@/components/base/Table.vue';
    import {gradeColumns} from './columGrade.js'
export default {
    components: {
        TheTable,
    },
    data() {
    return {
      myEmployeeId: "",
      employeeSelected: {},
      //-------------------------------
      // các mảng cột và hàng truyền vào cho table
      tableColumns: gradeColumns,
      tableDataListStudent: [],
      // các biến lưu dữ liệu của paging
      //   totalRecord: 0,
      currentPage: 1,
      pagingSize: 20,
    };
  },
};
</script>
<style>
.detail-grade {
  width: calc(100% - 258px);
  height: calc(100vh - 249px);
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  z-index: 34000;
  position: fixed;
  top: 227px;
  background-color: #fff;
  /* padding: 0 20px 20px; */
  overflow: auto;
}
</style>