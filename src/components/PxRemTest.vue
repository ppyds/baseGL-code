<template>
  <div class="px-rem-test">
    <h2 class="test-title">px2rem 转换测试</h2>
    <div class="test-container">
      <div class="test-box size-20">20px = 2rem</div>
      <div class="test-box size-40">40px = 4rem</div>
      <div class="test-box size-60">60px = 6rem</div>
      <div class="test-box size-100">100px = 10rem</div>
    </div>
    
    <div class="typography-test">
      <h3>字体大小测试</h3>
      <p class="text-16">字体大小: 16px = 1.6rem</p>
      <p class="text-24">字体大小: 24px = 2.4rem</p>
      <p class="text-32">字体大小: 32px = 3.2rem</p>
    </div>
  </div>
</template>

<script setup>
// 这是一个简单的测试组件
</script>

<style lang="scss" scoped>
.px-rem-test {
  padding: 20px; // 应该转换为 2rem
  background: #f5f5f5;
}

.test-title {
  font-size: 24px; // 应该转换为 2.4rem
  margin-bottom: 20px; // 应该转换为 2rem
  color: #333;
}

.test-container {
  display: flex;
  gap: 20px; // 应该转换为 2rem
  flex-wrap: wrap;
  margin-bottom: 40px; // 应该转换为 4rem
}

.test-box {
  background: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px; // 应该转换为 0.8rem
  font-weight: bold;
}

.size-20 {
  width: 20px; // 应该转换为 2rem
  height: 20px; // 应该转换为 2rem
}

.size-40 {
  width: 40px; // 应该转换为 4rem
  height: 40px; // 应该转换为 4rem
}

.size-60 {
  width: 60px; // 应该转换为 6rem
  height: 60px; // 应该转换为 6rem
}

.size-100 {
  width: 100px; // 应该转换为 10rem
  height: 100px; // 应该转换为 10rem
}

.typography-test {
  h3 {
    font-size: 20px; // 应该转换为 2rem
    margin-bottom: 16px; // 应该转换为 1.6rem
  }
  
  p {
    margin-bottom: 12px; // 应该转换为 1.2rem
  }
}

.text-16 {
  font-size: 16px; // 应该转换为 1.6rem
}

.text-24 {
  font-size: 24px; // 应该转换为 2.4rem
}

.text-32 {
  font-size: 32px; // 应该转换为 3.2rem
}
</style>