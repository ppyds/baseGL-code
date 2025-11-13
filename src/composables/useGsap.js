import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册GSAP插件
gsap.registerPlugin(ScrollTrigger)

/**
 * GSAP动画组合式函数
 * @param {Object} options 动画配置
 * @returns {Object} GSAP实例和方法
 */
export function useGsap(options = {}) {
  let ctx

  onMounted(() => {
    // 创建GSAP上下文，便于统一管理和清理
    ctx = gsap.context(() => {
      // 在这里执行动画
      if (options.onInit) {
        options.onInit(gsap, ScrollTrigger)
      }
    })
  })

  onUnmounted(() => {
    // 清理动画，防止内存泄漏
    if (ctx) ctx.revert()
  })

  return {
    gsap,
    ScrollTrigger
  }
}

/**
 * 滚动触发动画
 * @param {String|Element} trigger 触发元素
 * @param {Object} animationProps 动画属性
 * @param {Object} scrollTriggerProps ScrollTrigger配置
 */
export function useScrollAnimation(trigger, animationProps, scrollTriggerProps = {}) {
  const { gsap } = useGsap()

  onMounted(() => {
    gsap.to(trigger, {
      ...animationProps,
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTriggerProps
      }
    })
  })
}

/**
 * 视差滚动效果
 * @param {String|Element} element 元素选择器
 * @param {Number} speed 速度（负值向上，正值向下）
 */
export function useParallax(element, speed = 0.5) {
  useGsap({
    onInit: (gsap, ScrollTrigger) => {
      gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }
  })
}
