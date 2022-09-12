<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Bài tập</div>
    </div>
    <div class="assignment-content">
      <div class="form-assignment">
        <span>Chọn lớp</span>
        <combobox></combobox>
        <div class="line"></div>
      </div>
      <div class="main-assignment">
        <div class="form-wrapper">
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
            <input type="file" id="file-uploader" />
          </div>
        </div>
        <div class="form-wrapper">
          <div class="form-assignment">
            <span>Thời hạn</span>
            <input type="date" name="" id="" class="m-input" />
          </div>
        </div>
      </div>
      <div class="line"></div>

      <div class="assignment-footer">
        <Button buttonText="Tạo Assignment" buttonClass="button-primary" />
      </div>
    </div>
  </div>
</template>
<script>
import Combobox from "../../components/base/Combobox.vue";
import Button from "@/components/base/Button.vue";
export default {
  components: {
    Combobox,
    Button,
  },
};
</script>
<style>
/* .assignment-content {
  display: flex;
  height: 600px;
} */
.main-assignment {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 65%;
}
.line {
  height: 16px;
  border-bottom: 1px solid #ffcb3e;
  margin-bottom: -6px;
}
.form-wrapper {
  display: flex;
  width: 50%;
  flex-direction: column;
}
.form-wrapper:last-child {
  width: 45%;
}
.form-assignment {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
}
.form-assignment > span {
  font-weight: 600;
  margin-bottom: 5px;
}
.form-assignment > textarea {
  resize: none;
}
.content-input {
  height: 400px;
}
.header-assignment {
  display: flex;
}
.assignment-footer {
  height: 78px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>