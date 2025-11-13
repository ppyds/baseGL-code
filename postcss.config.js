export default {
  plugins: {
    tailwindcss: {},
    'postcss-pxtorem': {
      rootValue: 10, // 基准值：10px = 1rem
      propList: ['*'], // 对所有属性进行转换
      selectorBlackList: [], // 不排除任何选择器
      replace: true, // 替换原始值
      mediaQuery: false, // 不在媒体查询中转换
      minPixelValue: 0, // 转换所有像素值
      exclude: /node_modules/i // 排除 node_modules
    },
    autoprefixer: {},
  },
}