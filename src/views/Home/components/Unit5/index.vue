<script setup>

import Item from "./components/Item/index.vue";
import {ref} from "vue";
import t1Icon from "@/assets/img/t1.png"
import {Swiper, SwiperSlide} from "swiper/vue";
const list = [
  {
    img:t1Icon
  },
  {
    img:t1Icon
  },
  {
    img:t1Icon
  },
  {
    img:t1Icon
  },
  {
    img:t1Icon
  }
]
const bannerCurrent = ref(0)
</script>

<template>
  <div class="mt-[69px]">
    <div class="w-[1300px] mx-auto">
      <div class="title text-center">
        The latest news and inspiring stories
      </div>
      <div class="mt-[50px] relative">
        <img class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2" src="@/assets/img/icon4.png" alt="">

          <div class="w-screen -ml-[calc((100vw-1300px)/2)]">
            <Swiper
                ref="swiperRef"
                :slidesPerView="'auto'"
                :space-between="0"
                :loop="false"
                :grab-cursor="true"
                :watch-slides-progress="true"
                :watch-slides-visibility="true"
                :auto-height="false"
                :free-mode="false"
                :auto-width="true"
            >
              <SwiperSlide :class="{
            'w-[calc(860px+35px+(100vw-1300px)/2)] pl-[calc((100vw-1300px)/2)] pr-[35px]':index ===0,
            'w-[calc(860px+35px)] pr-[35px]':index !==0,
            '!pr-0':index = list.length - 1
          }" v-for="(item, index) in list" :key="index">
                <Item :data="item" />
              </SwiperSlide>
            </Swiper>
          </div>
        <img class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2" src="@/assets/img/icon4_active.png" alt="">
      </div>
      <div class="flex justify-center gap-x-[10px] pt-[26px]">
        <div v-for="(item,index) in list" :class="{
          '!bg-black !w-[30px]':bannerCurrent === index
        }" class="dotItem"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}
.dotItem{
  width: 10px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #D9D9D9;
}
</style>