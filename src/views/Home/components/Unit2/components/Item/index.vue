<script setup>
const props = defineProps({
  data:{
    type: Object
  }
})
</script>

<template>
<div class="item pt-[30px] relative">
  <div class="tag">
    New
  </div>
  <div class="title mt-[5px]">
    UNIT
  </div>
  <div class="subTitle text-center">
    UNICORE™ tech & large display
  </div>
  <img class="size-[288px] mx-auto object-contain" :src="data.img" alt="">
  <div class="flex justify-between pl-[37px] pr-[30px] absolute bottom-[62px] w-full">
    <div class="moreTextBox">
      <div class="moreText">
        Learn more
      </div>
      <div class="h-[1px] bg-[#666] mt-[8.5px]"></div>
    </div>
    <div class="btn">
      1mL/2mL
    </div>

  </div>
</div>
</template>

<style scoped lang="scss">
.item{
  width: 410px;
  height: 560px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #F8F9FD;
  .tag{
    color: #1CE785;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
  }
  .title{
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 106.667% */
  }
  .subTitle{
    color: #555;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  .moreTextBox{
    .moreText{
      color: #666;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
    }

  }
  .btn{
    width: 130px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #1CE785;
    color: #000;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>