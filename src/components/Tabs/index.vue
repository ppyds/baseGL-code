<script setup>
import {ref} from "vue";

const current = defineModel({
  type:Number
})
const props = defineProps({
  list:{
    type: Array,
  }
})
</script>

<template>
  <div class="w-full h-[60px] rounded-full bg-[#F8F9FD] justify-between p-[5px] flex">
    <div v-for="(item,index) in list" @click="current=index" :class="{
      '!bg-white':index===current
    }" class="px-[26px] transition-all rounded-full h-full text flex items-center justify-center cursor-pointer w-max">
      {{item}}
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  color: #444;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>