<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Bài tập</div>
    </div>
    <div class="assignment-content">
      <div class="form-assignment">
          <span>Chọn lớp</span>
          <combobox></combobox>
      </div>

      <div class="form-assignment">
          <span>Tiêu đề</span>
          <input type="text" class="m-input" />
      </div>
      <div class="form-assignment">
          <span>Nội dung</span>
          <textarea name="" id="" rows="10" class="m-textarea"></textarea>
      </div>
      <div class="form-assignment">
          <span>File đính kèm</span>
          <input type="file" id="file-uploader">
      </div>
    </div>
  </div>
</template>
<script>
import Combobox from "../../components/base/Combobox.vue";
export default {
  components: {
    Combobox,
  },
};
</script>
<style>
.assignment-content {
  display: flex;
  height: 600px;
}

.form-assignment {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-bottom: 10px;

}
.form-assignment>span{
    font-weight: 600;
    margin-bottom: 5px;
}
.form-assignment>textarea{
    resize: none;
}
.content-input {
  height: 400px;
}
</style>