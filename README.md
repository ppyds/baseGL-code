# BaseGL - 高性能动效展示平台

基于 Vue 3 + Vite 构建的高性能动效展示项目，参考 Insta360 官网设计。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **包管理器**: pnpm
- **路由**: Vue Router 4
- **动画库**:
  - GSAP (免费版)
  - @vueuse/motion
- **工具库**: @vueuse/core
- **样式**: SCSS

## 功能特性

✅ 高性能GSAP动画系统
✅ 滚动触发动画
✅ 视差滚动效果
✅ CDN图片支持
✅ 图片懒加载
✅ 路由懒加载
✅ 代码分割优化
✅ GPU加速动画

## 快速开始

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm dev
```

### 生产构建
```bash
pnpm build
```

### 预览构建结果
```bash
pnpm preview
```

## 项目结构

```
baseGL-code/
├── public/              # 静态资源
├── src/
│   ├── components/      # 复用组件
│   │   └── CdnImage.vue # CDN图片组件
│   ├── composables/     # 组合式函数
│   │   └── useGsap.js   # GSAP动画封装
│   ├── router/          # 路由配置
│   ├── styles/          # 全局样式
│   │   ├── main.scss
│   │   └── variables.scss
│   ├── views/           # 页面组件
│   │   └── Home.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

## CDN配置

在 `CdnImage` 组件中使用CDN：

```vue
<CdnImage
  src="/images/product.jpg"
  cdn-url="https://your-cdn.com"
  :lazy="true"
  alt="产品图片"
/>
```

## GSAP使用示例

### 基础动画
```javascript
import { useGsap } from '@/composables/useGsap'

const { gsap } = useGsap()

onMounted(() => {
  gsap.to('.element', {
    x: 100,
    duration: 1,
    ease: 'power2.out'
  })
})
```

### 滚动触发动画
```javascript
import { useScrollAnimation } from '@/composables/useGsap'

useScrollAnimation('.element', {
  opacity: 1,
  y: 0,
  duration: 1
})
```

### 视差效果
```javascript
import { useParallax } from '@/composables/useGsap'

useParallax('.parallax-element', 0.5)
```

## 性能优化

- ✅ 使用 `transform` 和 `opacity` 实现GPU加速
- ✅ 图片懒加载 (IntersectionObserver)
- ✅ 路由懒加载 (动态import)
- ✅ 代码分割 (manualChunks)
- ✅ 生产环境移除console
- ✅ 防抖/节流滚动事件

## 许可证

MIT
