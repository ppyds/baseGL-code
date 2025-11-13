<template>
  <div class="home">
    <section class="hero">
      <div
        class="hero-content"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
      >
        <h1>BaseGL</h1>
        <p>高性能动效展示平台</p>
      </div>
    </section>

    <section class="features">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="feature-card"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0 }"
        :delay="index * 100"
      >
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    title: 'GSAP动画',
    description: '使用业界领先的GSAP动画库，流畅的动效体验'
  },
  {
    title: 'CDN加速',
    description: '图片资源支持CDN加载，极速访问体验'
  },
  {
    title: '性能优化',
    description: 'GPU加速、懒加载、代码分割等多重优化'
  }
])
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  &-content {
    text-align: center;

    h1 {
      font-size: 4rem;
      margin: 0 0 1rem;
      font-weight: 700;
    }

    p {
      font-size: 1.5rem;
      opacity: 0.9;
    }
  }
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  h3 {
    margin: 0 0 1rem;
    color: #667eea;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}
</style>
