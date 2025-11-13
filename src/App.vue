<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import 'swiper/css';
// App级别的逻辑可以在这里添加
</script>

<style lang="scss">
// Tailwind CSS 导入
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  width: 100%;
  min-height: 100vh;
    font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

// 路由切换动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
