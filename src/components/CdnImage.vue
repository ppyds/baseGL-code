<template>
  <img
    ref="imgRef"
    :src="currentSrc"
    :alt="alt"
    :class="['cdn-image', { 'is-loading': isLoading, 'is-loaded': isLoaded }]"
    @load="handleLoad"
    @error="handleError"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  // 图片路径（支持本地或CDN路径）
  src: {
    type: String,
    required: true
  },
  // CDN域名（可选）
  cdnUrl: {
    type: String,
    default: ''
  },
  // 占位图
  placeholder: {
    type: String,
    default: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23eee" width="400" height="300"/%3E%3C/svg%3E'
  },
  alt: {
    type: String,
    default: ''
  },
  // 是否启用懒加载
  lazy: {
    type: Boolean,
    default: true
  }
})

const imgRef = ref(null)
const isLoading = ref(true)
const isLoaded = ref(false)
const shouldLoad = ref(!props.lazy) // 如果不懒加载，直接加载

// 计算最终的图片URL
const currentSrc = computed(() => {
  if (!shouldLoad.value) {
    return props.placeholder
  }

  // 如果提供了CDN域名，拼接完整URL
  if (props.cdnUrl && !props.src.startsWith('http')) {
    return `${props.cdnUrl}${props.src}`
  }

  return props.src
})

// 懒加载逻辑
if (props.lazy) {
  onMounted(() => {
    const { stop } = useIntersectionObserver(
      imgRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          shouldLoad.value = true
          stop() // 停止观察
        }
      },
      {
        rootMargin: '50px' // 提前50px开始加载
      }
    )
  })
}

const handleLoad = () => {
  isLoading.value = false
  isLoaded.value = true
}

const handleError = () => {
  isLoading.value = false
  console.error(`图片加载失败: ${props.src}`)
}
</script>

<style lang="scss" scoped>
.cdn-image {
  display: block;
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;

  &.is-loading {
    opacity: 0.5;
  }

  &.is-loaded {
    opacity: 1;
  }
}
</style>
