<script setup>
import {Swiper,SwiperSlide, useSwiper} from "swiper/vue";
import { Autoplay } from 'swiper/modules';
import { ref, onMounted, watch, nextTick } from "vue";
const delay = 3000 // 设置自动播放间隔为 3 秒
const currentIndex = ref(-1)
const swiperRef = ref()

import img1 from "@/assets/img/banner1.png"

const list = ref([
  {
    title:"EXTRO",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO1",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO2",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO3",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO4",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  }
])

const changeEnd  =(e) =>{
  currentIndex.value = e.realIndex
}
const next = (e) =>{
  swiperRef.value?.slideNext()
}
const stop = ref(false)
</script>

<template>
  <div class="h-[880px] relative" :style="{
    '--delay':delay+'ms'
  }">
    <Swiper 
      :modules="[Autoplay]" 
      :autoplay="false" 
      :loop="true"
      @swiper="swiperRef= $event"
      @slideChange="(swiper) => { currentIndex = swiper.realIndex }"
      @slide-change-transition-end="changeEnd"
    >
      <SwiperSlide v-for="item in list">
        <div class="h-[880px] relative">
          <div class="absolute size-full left-0 top-0">
            <div class="w-[1300px] mx-auto flex flex-col justify-center h-full">
              <div class="title ">
                {{item.title}}
              </div>
              <div class="subTitle mt-[15px]">
                {{item.subTitle}}
              </div>
              <div class="btn mt-[32px] flex items-center justify-center gap-x-[11.5px]">
                <div class="btnText">Learn more</div>
                <img class="size-[20px]" src="@/assets/img/icon2.png" alt="">
              </div>
            </div>
          </div>
          <img class="size-full object-cover" :src="item.img"/>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="dot absolute bottom-0 left-0 flex justify-center z-10">
      <div @mouseover="stop = true" @mouseout="stop = false" class="w-[1300px] flex justify-between gap-x-[13px]">
        <div
          @mouseover="swiperRef?.slideTo(index)"
          v-for="(item, index) in list" 
          class="pt-[61px] flex-1 cursor-pointer transition-all duration-300 hover:opacity-80"
          @click="swiperRef.value?.slideTo(index)"
        >
          <div class="dotText text-center transition-colors duration-300"
               :class="{ 'text-[#1CE785]': currentIndex === index }">
            {{item.dotText}}
          </div>
          <div  class="h-[2px] w-full rounded-full bg-white/30 mt-[10px] overflow-hidden">
            <div 
              class="h-full w-0 rounded-full transition-all duration-500 ease-out bg-white"
              :class="{
                'widAnim': index===currentIndex
              }"
              :style="{
                'animation-play-state': stop ? 'paused' : 'running'
              }"
              @animationend="next"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #FFF;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: 59px;
}

.subTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
}

.btn {
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;

  .btnText {
    color: #222;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.dot {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
  width: 1920px;
  height: 139px;
  flex-shrink: 0;

  .dotText {
    color: #FFF;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
  }
}

@keyframes wid {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.widAnim {
  animation: wid var(--delay) ease-in-out;
}
</style>