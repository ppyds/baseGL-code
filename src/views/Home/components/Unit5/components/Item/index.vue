<script setup>
const props = defineProps({
  data:{
    type: Object
  }
})
</script>

<template>
<div class="w-[860px] h-[480px] rounded-[20px] flex-shrink-0 overflow-hidden relative">
  <img :src="data.img" alt="">
  <div class="titleBox">
    <div class="title">
      CALEAF TECH x UAE Team: GO Ride with Pogaěar
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.titleBox{
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 96px;
  &::after{
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 100%;
    flex-shrink: 0;
    border-radius: 0 0 20px 20px;
    opacity: 0.3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
  }
  .title{
    position: absolute;
    bottom: 0;
    z-index: 1;
    color: #FFF;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 49px;
    padding-left: 35px;
  }
}
</style>