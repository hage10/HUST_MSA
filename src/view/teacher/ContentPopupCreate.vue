<template>
      <div class="assignment-content">
        <div class="main-assignment">
          <div class="form-wrapper">
            <div class="title-and-content">
              <div class="form-assignment">
                <span>Tiêu đề</span>
                <input type="text" class="m-input" />
              </div>
              <div class="form-assignment">
                <span>Nội dung</span>
                <textarea name="" id="" rows="14" class="m-textarea"></textarea>
              </div>
            </div>
            <div class="due-and-file">
              <div class="form-assignment">
                <span>File đính kèm</span>
                <input type="file" id="file-uploader" />
              </div>
              <div class="form-assignment">
              <span>Thời hạn</span>
              <input type="date" name="" id="" class="m-input input-240" />
            </div>
            </div>
          </div>
          <div class="footer-assignment">
            <Button buttonText="Tạo Assignment" buttonClass="button-primary" />
          </div>
        </div>
      </div>
  </template>
  <script>
  import Button from "@/components/base/Button.vue";
  export default {
    components: {
      Button,
    },
  };
  </script>
  <style>
  .assignment-content {
    background-color: #fff;
    width: 100%;
    height: calc(100vh - 154px);
    display: flex;
    flex-direction: column;
  }
  .toolbar-header {
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    font-weight: 600;
  }
  .toolbar-header>span{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .main-assignment {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding: 10px 20px 20px 20px;
    height: 100%;
  }
  .form-wrapper {
    display: flex;
    height: 90%;
    justify-content: space-between;
  }
  .title-and-content,
  .due-and-file {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .title-and-content{
    width: 60%;
  }
  .due-and-file{
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