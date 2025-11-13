# 使用指南

## 项目已成功初始化！ 🎉

您的Vue 3高性能动效项目已经准备就绪。开发服务器正在运行：**http://localhost:3000/**

## 核心功能演示

### 1. GSAP 动画使用

#### 基础动画示例
```vue
<script setup>
import { onMounted, ref } from 'vue'
import { useGsap } from '@/composables/useGsap'

const box = ref(null)
const { gsap } = useGsap()

onMounted(() => {
  gsap.to(box.value, {
    x: 200,
    rotation: 360,
    duration: 2,
    ease: 'power2.inOut'
  })
})
</script>

<template>
  <div ref="box" class="box">动画元素</div>
</template>
```

#### 滚动触发动画
```vue
<script setup>
import { useScrollAnimation } from '@/composables/useGsap'

// 元素滚动到视口时触发动画
useScrollAnimation('.fade-in', {
  opacity: 1,
  y: 0,
  duration: 1
}, {
  start: 'top 80%',  // 当元素顶部到达视口80%时开始
  toggleActions: 'play none none reverse'
})
</script>

<template>
  <div class="fade-in" style="opacity: 0; transform: translateY(50px)">
    滚动时淡入
  </div>
</template>
```

#### 视差滚动效果
```vue
<script setup>
import { useParallax } from '@/composables/useGsap'

// 创建视差效果，speed可以是负值（向上）或正值（向下）
useParallax('.parallax-bg', 0.5)
</script>

<template>
  <div class="parallax-bg">
    <img src="/images/background.jpg" alt="视差背景" />
  </div>
</template>
```

### 2. CDN图片组件

#### 基础使用
```vue
<template>
  <!-- 本地图片 -->
  <CdnImage
    src="/images/product.jpg"
    alt="产品图片"
  />

  <!-- CDN图片（需要配置cdn-url） -->
  <CdnImage
    src="/images/banner.jpg"
    cdn-url="https://your-cdn.com"
    alt="横幅图片"
  />

  <!-- 禁用懒加载（对于首屏关键图片） -->
  <CdnImage
    src="/images/hero.jpg"
    :lazy="false"
    alt="首屏图片"
  />
</template>

<script setup>
import CdnImage from '@/components/CdnImage.vue'
</script>
```

#### CDN配置建议
在 `.env` 文件中配置CDN域名：
```bash
VITE_CDN_URL=https://cdn.example.com
```

然后在组件中使用：
```vue
<CdnImage
  src="/images/product.jpg"
  :cdn-url="import.meta.env.VITE_CDN_URL"
/>
```

### 3. @vueuse/motion 声明式动画

#### 简单的进入动画
```vue
<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
  >
    内容淡入并上移
  </div>
</template>
```

#### 滚动触发动画
```vue
<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :visible="{ opacity: 1, scale: 1 }"
  >
    滚动到视口内时显示
  </div>
</template>
```

#### 列表动画
```vue
<template>
  <div
    v-for="(item, index) in items"
    :key="item.id"
    v-motion
    :initial="{ opacity: 0, x: -50 }"
    :enter="{ opacity: 1, x: 0 }"
    :delay="index * 100"
  >
    {{ item.title }}
  </div>
</template>
```

### 4. SCSS变量使用

全局变量已在 `src/styles/variables.scss` 中定义，可以直接在组件中使用：

```vue
<style lang="scss" scoped>
.my-component {
  // 使用预定义的颜色变量
  color: $primary-color;
  background: $secondary-color;

  // 使用间距变量
  padding: $spacing-md;
  margin-bottom: $spacing-lg;

  // 响应式断点
  @media (max-width: $breakpoint-mobile) {
    padding: $spacing-sm;
  }

  // 动画时长
  transition: all $transition-normal;
}
</style>
```

## 性能优化最佳实践

### 1. GPU加速动画
**优先使用** `transform` 和 `opacity` 属性：
```javascript
// ✅ 好的做法（GPU加速）
gsap.to('.element', {
  x: 100,           // transform: translateX(100px)
  y: 50,            // transform: translateY(50px)
  rotation: 45,     // transform: rotate(45deg)
  scale: 1.2,       // transform: scale(1.2)
  opacity: 0.5
})

// ❌ 避免（会触发重排）
gsap.to('.element', {
  width: '200px',
  height: '200px',
  left: '100px',
  top: '50px'
})
```

### 2. 懒加载最佳实践
```vue
<template>
  <!-- 首屏关键图片：禁用懒加载 -->
  <CdnImage src="/hero.jpg" :lazy="false" />

  <!-- 首屏以下内容：启用懒加载 -->
  <CdnImage src="/gallery-1.jpg" :lazy="true" />
</template>
```

### 3. 路由懒加载
```javascript
// router/index.js
const routes = [
  {
    path: '/products',
    component: () => import('@/views/Products.vue')  // 懒加载
  }
]
```

### 4. 防抖滚动事件
```vue
<script setup>
import { useDebounceFn } from '@vueuse/core'

const handleScroll = useDebounceFn(() => {
  console.log('滚动处理')
}, 100)  // 100ms防抖

window.addEventListener('scroll', handleScroll)
</script>
```

## 项目结构说明

```
src/
├── components/           # 可复用组件
│   └── CdnImage.vue     # CDN图片组件（支持懒加载）
├── composables/         # 组合式函数（Vue 3 Composition API）
│   └── useGsap.js       # GSAP封装（useGsap、useScrollAnimation、useParallax）
├── router/              # 路由配置
│   └── index.js
├── styles/              # 全局样式
│   ├── main.scss        # 主样式文件
│   └── variables.scss   # SCSS变量（颜色、间距、断点等）
├── views/               # 页面组件
│   └── Home.vue         # 首页（含演示动画）
├── App.vue              # 根组件
└── main.js              # 入口文件
```

## 下一步建议

1. **创建更多页面**：在 `src/views/` 添加新页面
2. **添加组件**：在 `src/components/` 创建可复用组件
3. **配置CDN**：设置环境变量 `VITE_CDN_URL`
4. **自定义主题**：修改 `src/styles/variables.scss` 中的变量
5. **添加更多动画**：参考 [GSAP文档](https://gsap.com/docs/v3/) 和 [@vueuse/motion文档](https://motion.vueuse.org/)

## 常用命令

```bash
# 开发模式
pnpm dev

# 生产构建
pnpm build

# 预览构建结果
pnpm preview

# 更新依赖
pnpm update
```

## 资源链接

- [Vue 3 文档](https://cn.vuejs.org/)
- [Vite 文档](https://cn.vitejs.dev/)
- [GSAP 文档](https://gsap.com/docs/v3/)
- [@vueuse/motion](https://motion.vueuse.org/)
- [@vueuse/core](https://vueuse.org/)
- [Vue Router](https://router.vuejs.org/zh/)

---

祝您开发愉快！ 🚀
