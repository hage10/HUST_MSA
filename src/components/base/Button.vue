<template>
    <button :class="['button', buttonClass]" @click="$emit('btnClick')">
      <p>
        {{ buttonText }}
      </p>
    </button>
  </template>
  
  <script>
  export default {
    name: 'TheButton',
    props: {
      buttonClass: String,
      buttonText: String,
    },
  };
  </script>
  
  <style scoped>
  .button {
    outline: 0;
    border: 0;
    cursor: pointer;
    height: 36px;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .button p {
    line-height: 36px;
    margin: 0;
    padding: 0;
    font-weight: 600;
  }
  
  .button-primary {
    border: 1px solid transparent;
    color: #fff;
    background-color: #6558ef;
  }
  
  .button-primary:hover {
    background-color: #7d72f7 !important;
  }
  
  .button-secondary {
      border: 1px solid #8d9096;
      color: #111;
      background-color: transparent;
  }
  .btn-120{
    width: 120px;
  }
  .btn-350{
    width: 350px;
  }
  .btn-50{
    width: 70px;
  }
  .button-secondary:hover {
    background-color: #d2d3d6 !important;
  }
  </style>