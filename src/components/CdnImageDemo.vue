<template>
  <div class="cdn-image-demo p-6 bg-gray-50 rounded-lg">
    <h2 class="text-2xl font-bold mb-4">CdnImage 全局组件演示</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- 基础用法 -->
      <div class="demo-item">
        <h3 class="text-lg font-semibold mb-2">基础用法</h3>
        <CdnImage 
          src="/images/sample.jpg"
          alt="示例图片"
          class="w-full h-32 object-cover rounded"
        />
      </div>

      <!-- 懒加载 -->
      <div class="demo-item">
        <h3 class="text-lg font-semibold mb-2">懒加载</h3>
        <CdnImage 
          src="/images/lazy.jpg"
          alt="懒加载图片"
          :lazy="true"
          class="w-full h-32 object-cover rounded"
        />
      </div>

      <!-- 自定义占位图 -->
      <div class="demo-item">
        <h3 class="text-lg font-semibold mb-2">自定义占位图</h3>
        <CdnImage 
          src="/images/custom.jpg"
          alt="自定义占位图"
          :placeholder="customPlaceholder"
          class="w-full h-32 object-cover rounded"
        />
      </div>

      <!-- CDN 路径 -->
      <div class="demo-item">
        <h3 class="text-lg font-semibold mb-2">CDN 路径</h3>
        <CdnImage 
          src="/uploads/image.jpg"
          :cdn-url="'https://cdn.example.com'"
          alt="CDN 图片"
          class="w-full h-32 object-cover rounded"
        />
      </div>

      <!-- 错误处理 -->
      <div class="demo-item">
        <h3 class="text-lg font-semibold mb-2">错误处理</h3>
        <CdnImage 
          src="/images/non-existent.jpg"
          alt="不存在的图片"
          class="w-full h-32 object-cover rounded"
        />
      </div>
    </div>

    <!-- 代码示例 -->
    <div class="mt-6 bg-gray-100 p-4 rounded">
      <h3 class="text-lg font-semibold mb-2">使用示例</h3>
      <pre class="text-sm bg-gray-800 text-white p-3 rounded"><code>&lt;!-- 基础用法 --&gt;
&lt;CdnImage 
  src="/images/photo.jpg" 
  alt="图片描述"
/&gt;

&lt;!-- 懒加载 --&gt;
&lt;CdnImage 
  src="/images/large.jpg" 
  :lazy="true"
/&gt;

&lt;!-- CDN 路径 --&gt;
&lt;CdnImage 
  src="/uploads/image.jpg" 
  :cdn-url="'https://your-cdn.com'"
/&gt;</code></pre>
    </div>
  </div>
</template>

<script setup>
const customPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23666" font-family="sans-serif" font-size="20"%3E自定义占位图%3C/text%3E%3C/svg%3E'
</script>

<style scoped>
.demo-item {
  @apply bg-white p-4 rounded-lg shadow-sm;
}

.demo-item h3 {
  @apply text-gray-800;
}
</style>