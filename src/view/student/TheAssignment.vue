<template>
  <div class="main-content">
    <div class="header-content">
      <div class="title-content">Bài tập</div>
    </div>
    <div class="assignment-content">
      <div class="title-assignment">
        Thí nghiệm 1. Phần mềm nhúng giao tiếp GPIO trên Raspberry Pi
      </div>
      <div class="date-assignment">Due June 4, 2022 5:30 PM</div>
      <div class="instruction-assignment">
        Instructions
        <div class="content-instruction">
          Nộp báo cáo thí nghiệm theo từng cá nhân (Đặt tên file [Mã lớp
          TN]_NhomX_TN1_Hovaten.docx)
        </div>
      </div>
      <div class="content-assignment">
        My work
        <div class="file-assignment"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Button from '@/components/base/Button.vue';
export default {
  name: "TheButton",
  components: {
    // Button
  },
};
</script>
<style>

.assignment-content {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

</style>