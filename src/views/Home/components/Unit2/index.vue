<script setup>
import Tabs from "@/components/Tabs/index.vue"
import {ref, onMounted} from "vue";
import Item from "./components/Item/index.vue"
const tabsCurrent = ref(0)
const tabsList = [
  "For Resin/Rosin",
  "Pod System",
  "Full Ceramic",
  "D9 Distillate",
  "US Stock",
  "Dab Pen",
  "510 Cartridge",
  "D8 Distillate"
]
import icon3 from "@/assets/img/icon3.png"
import icon5 from "@/assets/img/icon5.png"
import icon6 from "@/assets/img/icon6.png"
import icon7 from "@/assets/img/icon7.png"
import {Swiper,SwiperSlide} from "swiper/vue";
import "swiper/css";
const list = [
  {
    img:icon3
  },
  {
    img:icon5
  },
  {
    img:icon6
  },
  {
    img:icon7
  }
]
const swiperRef = ref(null)
const bannerCurrent = ref(0)
const currentIndex = ref(0)

// 处理幻灯片切换结束事件
const changeEnd = (swiper) => {
  bannerCurrent.value = swiper.realIndex
};

// 切换到上一张
const slidePrev = () => {
  swiperRef.value?.slidePrev();
};

// 切换到下一张
const slideNext = () => {
  swiperRef.value?.slideNext();
};

// 组件挂载后初始化
onMounted(() => {
  // 确保初始状态正确
  bannerCurrent.value = 0;
});
</script>

<template>
  <div class="">
    <div class="w-[1300px] mx-auto pt-[80px]">
      <div class="title">
        Innovative products:<br/>
        The most advanced, the best fit.
      </div>
      <Tabs class="mt-[44px]" :list="tabsList" v-model="tabsCurrent"></Tabs>

      <div class="mt-[50px] relative">
        <img class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2" src="@/assets/img/icon4.png" alt="" @click="slidePrev">
        <div class="w-[100vw] -ml-[calc((100vw-1300px)/2)]">
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
              @slide-change-transition-end="changeEnd"
          >
          <SwiperSlide :class="{
            'w-[calc(410px+35px+(100vw-1300px)/2)] pl-[calc((100vw-1300px)/2)] pr-[35px]':index ===0,
            'w-[calc(410px+35px)] pr-[35px]':index !==0,
            '!pr-0':index = list.length - 1
          }" v-for="(item, index) in list" :key="index">
            <Item :data="item" />
          </SwiperSlide>
        </Swiper>
        </div>
        <img class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2" src="@/assets/img/icon4_active.png" alt="" @click="slideNext">
      </div>
      <div class="flex justify-center gap-x-[10px] pt-[26px]">
        <div v-for="(item,index) in list" :class="{
          '!bg-black':bannerCurrent === index
        }" class="dotItem"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(94px / 2);
}
.dotItem{
  width: 20px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #D9D9D9;
}
</style>