<template>
  <div class="grid">
    <table>
      <colgroup>
        <col
          v-for="column in tableColumns"
          :key="column.fieldName"
          :style="column.width"
        />
      </colgroup>
      <thead style="z-index: 10000">
        <th
          v-for="column in tableColumns"
          :key="column.fieldName"
          :style="column.style"
        >
          <p style="text-align: center">
            {{ column.displayName }}
          </p>
        </th>
        <th
          style="
            position: sticky;
            right: 0;
            z-index: 10000;
            background-color: #eceef1;
          "
        >
          <p
            style="
              border-right: 0;
              border-left: 1px solid #c7c7c7;
              line-height: 34px;
            "
          >
            CHỨC NĂNG
          </p>
        </th>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in tableDataList"
          :key="index"
          @dblclick="trOnDbClick(item.id)"
        >
          <td
            v-for="column in tableColumns"
            :key="column.fieldName"
            :style="column.style"
            :title="item[column.fieldName]"
          >
            <p v-if="column.formatType == 'ddmmyyyy'"></p>
            <p v-else>{{ item[column.fieldName] }}</p>
          </td>
          <td
            style="
              position: sticky;
              right: 0;
              z-index: 900;
              background-color: #fff;
            "
          >
            <p
              style="
                border-right: 0;
                border-left: 1px dotted #c7c7c7;
                line-height: 44px;
              "
            >
              <FunctionTool
                @showFunctionList="showFunctionList"
                @hideFunctionList="hideFunctionList"
                :toolId="item.id"
                :toolCode="item.employeeCode"
                @btnEditOnClick="btnEditOnClick"
              />
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <slot name="pagingbar"></slot>
    <FunctionToolList />
  </div>
</template>

<script>

export default {
  name: "TheTable",
  components: {
  },
  props: {
    tableColumns: Array,
    tableDataList: Array,
  },
};
</script>

<style >
.grid {
  width: 100%;
  height: calc(100% - 410px);
  overflow-y: scroll;
  background-color: #fff;
  box-sizing: border-box;
  float: left;
  /* border-left: 20px solid #fff */
  /* border-right: 20px solid #fff; */
  border-bottom: 1px solid #c7c7c7;
}

table {
  border-collapse: collapse;
  width: auto;
  height: auto;
  display: table;
}

thead {
  width: auto;
  height: auto;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-sizing: border-box;
}

tbody {
  height: auto;
  width: 100%;
}

td,
th {
  overflow: hidden !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
}

th {
  font-size: 13px;
  position: sticky;
  top: 0;
  z-index: 300;
  background-color: #eceef1;
  height: 34px;
  box-shadow: inset 0 -1px 0 #c7c7c7;
  padding-bottom: 1px 0;
}

th p {
  display: block;
  margin: 0;
  border-right: 1px solid #c7c7c7;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 34px;
}

td {
  height: 44px;
  box-sizing: border-box;
}

td p {
  height: 44px;
  display: block;
  margin: 0;
  border-right: 1px dotted #c7c7c7;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 44px;
  overflow: hidden !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
}

tbody tr {
  border-bottom: 1px solid #c7c7c7;
}

tbody tr:hover {
  background-color: #f3f8f8 !important;
}

tbody tr:hover td {
  background-color: #f3f8f8 !important;
}
</style>