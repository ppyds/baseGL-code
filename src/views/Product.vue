<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img
          :src="heroImage"
          alt="Product Hero Background"
          class="hero-image"
        />
        <div class="hero-overlay"></div>
      </div>

      <!-- Header -->
      <header class="header">
        <div class="header-logo">
          <img
            :src="logoImage"
            alt="Logo"
            class="logo"
          />
        </div>

        <nav class="header-nav">
          <a href="#" class="nav-link">Products</a>
          <a href="#" class="nav-link">Technology</a>
          <a href="#" class="nav-link">Customize</a>
          <a href="#" class="nav-link">US Local Service</a>
          <a href="#" class="nav-link">Why Caleaf</a>
        </nav>

        <div class="header-actions">
          <button class="search-btn" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L15.5 15.5M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="contact-btn">Contact</button>
        </div>
      </header>

      <!-- Hero Content -->
      <div class="hero-content">
        <h1 class="hero-title">EXTRO</h1>
        <p class="hero-subtitle">One puff to be a freak, it is the freaking best</p>
        <button class="learn-more-btn">
          Learn more
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Bottom Carousel Indicators -->
      <div class="carousel-indicators">
        <div v-for="(item, index) in carouselItems" :key="index" class="indicator-item">
          <div class="indicator-progress" :class="{ active: index === 0 }"></div>
          <span class="indicator-label">{{ item }}</span>
        </div>
      </div>
    </section>

    <!-- Innovation Section -->
    <section class="innovation-section">
      <div class="container">
        <h2 class="section-title">
          Innovative products:<br>
          The most advanced, the best fit.
        </h2>

        <!-- Product Categories -->
        <div class="product-categories">
          <span v-for="category in categories" :key="category" class="category-tag">
            {{ category }}
          </span>
        </div>

        <!-- Product Grid -->
        <div class="product-grid">
          <div v-for="(product, index) in products" :key="index" class="product-card">
            <div class="product-image-wrapper">
              <span class="new-badge">New</span>
              <img :src="product.image" :alt="product.title" class="product-image" />
            </div>
            <h3 class="product-title">{{ product.title }}</h3>
            <div class="product-footer">
              <span class="product-capacity">{{ product.capacity }}</span>
              <button class="product-learn-more">Learn more</button>
            </div>
          </div>
        </div>

        <!-- Carousel Progress Indicator -->
        <div class="carousel-progress">
          <div v-for="n in 4" :key="n" class="progress-dot" :class="{ active: n === 1 }"></div>
        </div>
      </div>
    </section>

    <!-- Technology Showcase Section -->
    <section class="technology-section">
      <div class="tech-content">
        <div class="tech-image-wrapper">
          <img :src="techImage" alt="UNICORE™ Technology" class="tech-image" />
        </div>
        <div class="tech-text">
          <span class="tech-badge">New</span>
          <h2 class="tech-title">UNICORE™ ceramic heating technology</h2>
          <p class="tech-description">
            Patented U-shape ceramic design<br>
            The golden standard for ROSIN
          </p>
          <button class="tech-learn-more">Learn more</button>
        </div>
      </div>
    </section>

    <!-- Customization Section -->
    <section class="customization-section">
      <div class="container">
        <h2 class="custom-title">Realize your unique design with CALEAF TECH</h2>

        <!-- 6 Cards Grid Layout -->
        <div class="custom-cards-grid">
          <div v-for="(card, index) in customizeCards" :key="index"
               class="custom-card"
               :class="`card-${index + 1}`">
            <img :src="card.image" :alt="card.label" class="card-image" />
            <div class="card-overlay">
              <span class="card-label">{{ card.label }}</span>
            </div>
          </div>
        </div>

        <div class="custom-process">
          <div v-for="(step, index) in customSteps" :key="index" class="process-step">
            <div class="step-number">{{ index + 1 }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section">
      <div class="container">
        <h2 class="news-title">The latest news and inspiring stories</h2>

        <div class="news-grid">
          <div v-for="(news, index) in newsItems" :key="index" class="news-card">
            <div class="news-image-wrapper">
              <img :src="news.image" :alt="news.title" class="news-image" />
            </div>
            <h3 class="news-card-title">{{ news.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Philosophy Section - Beyond Limits -->
    <section class="philosophy-section">
      <div class="philosophy-background">
        <img :src="beyondBgImage" alt="Beyond Limits" class="philosophy-bg-image" />
        <div class="philosophy-overlay"></div>
      </div>

      <div class="philosophy-content">
        <h2 class="philosophy-title">Beyond Limits</h2>
        <p class="philosophy-text">
          At Caleaf Tech, we don't settle for what others consider "good enough." We push the boundaries of what's possible, constantly seeking technological breakthroughs to deliver the absolute best. When others say "That's as far as we can go," we say "This is just the beginning." We're committed to making every puff not just delicious, but unforgettable, and every customer experience not just satisfactory, but exceptional.
        </p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h4 class="footer-heading">Products</h4>
            <ul class="footer-links">
              <li><a href="#">For Resin/Rosin</a></li>
              <li><a href="#">Pod System</a></li>
              <li><a href="#">Full Ceramic</a></li>
              <li><a href="#">D9 Distillate</a></li>
              <li><a href="#">US STOCK</a></li>
              <li><a href="#">Dab Pen</a></li>
              <li><a href="#">510 Cartridge</a></li>
              <li><a href="#">D8 Distillate</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-heading">Technology</h4>
            <ul class="footer-links">
              <li><a href="#">Product Support</a></li>
              <li><a href="#">Repair Service</a></li>
              <li><a href="#">After-Sales Policy</a></li>
              <li><a href="#">Care Service</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-heading">Customize</h4>
            <ul class="footer-links">
              <li><a href="#">Product Development</a></li>
              <li><a href="#">Design Services</a></li>
              <li><a href="#">Manufacturing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 图片资源 - 使用本地路径
const logoImage = ref('/images/logo/logo.png')
const heroImage = ref('/images/hero/hero-bg.jpg')
const techImage = ref('/images/tech/tech-showcase.png')
const beyondBgImage = ref('/images/beyond/beyond-bg.png')

// 定制服务区的6张卡片图片
const customizeCards = ref([
  { image: '/images/customize/card-1.png', label: 'PRODUCT DEVELOPMENT' },
  { image: '/images/customize/card-2.png', label: 'DESIGN SERVICES' },
  { image: '/images/customize/card-3.png', label: 'MANUFACTURING' },
  { image: '/images/customize/card-4.png', label: 'QUALITY CONTROL' },
  { image: '/images/customize/card-5.png', label: 'CUSTOMIZATION' },
  { image: '/images/customize/card-6.png', label: 'DELIVERY' }
])

// Carousel items
const carouselItems = ref([
  'DUKES User Manual',
  'DUKES User Manual',
  'DUKES User Manual',
  'DUKES User Manual',
  'DUKES User Manual'
])

// Product categories
const categories = ref([
  'For Resin/Rosin',
  'Pod System',
  'Full Ceramic',
  'D9 Distillate',
  'US Stock',
  'Dab Pen',
  '510 Cartridge',
  'D8 Distillate'
])

// Products
const products = ref([
  {
    image: '/images/products/product-1.png',
    title: 'UNIT UNICORE™ tech & large display',
    capacity: '1mL/2mL'
  },
  {
    image: '/images/products/product-2.png',
    title: 'UNIT UNICORE™ tech & large display',
    capacity: '1mL/2mL'
  },
  {
    image: '/images/products/product-3.png',
    title: 'UNIT UNICORE™ tech & large display',
    capacity: '1mL/2mL'
  },
  {
    image: '/images/products/product-4.png',
    title: 'UNIT UNICORE™ tech & large display',
    capacity: '1mL/2mL'
  }
])

// Customization steps
const customSteps = ref([
  {
    title: 'PRODUCT DEVELOPMENT',
    description: 'From concept to reality, we work with you to develop products that match your vision'
  },
  {
    title: 'PRODUCT DEVELOPMENT',
    description: 'Expert design and engineering services to bring your ideas to life'
  },
  {
    title: 'PRODUCT DEVELOPMENT',
    description: 'State-of-the-art manufacturing capabilities to produce at scale'
  }
])

// News items
const newsItems = ref([
  {
    image: '/images/news/news-1.png',
    title: 'CALEAF TECH x UAE Team: GO Ride with Pogačar'
  },
  {
    image: '/images/news/news-2.png',
    title: 'CALEAF TECH x UAE Team: GO Ride with Pogačar'
  }
])
</script>

<style lang="scss" scoped>
.product-page {
  width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
}

// 通用动画
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

// Hero Section
.hero {
  position: relative;
  width: 100%;
  height: 880px;
  overflow: hidden;

  @media (max-width: $breakpoint-mobile) {
    height: 100vh;
    min-height: 600px;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 139px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
}

// Header
.header {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 310px;

  @media (max-width: $breakpoint-tablet) {
    padding: 20px 40px;
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 20px 20px;
    flex-wrap: wrap;
  }
}

.header-logo {
  .logo {
    height: 30px;
    width: auto;
  }
}

.header-nav {
  display: flex;
  gap: 60px;

  @media (max-width: $breakpoint-tablet) {
    gap: 30px;
  }

  @media (max-width: $breakpoint-mobile) {
    display: none;
  }
}

.nav-link {
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 22px;
    height: 22px;
  }
}

.contact-btn {
  background: #1ce784;
  color: #222;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(28, 231, 132, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

// Hero Content
.hero-content {
  position: relative;
  z-index: 10;
  padding: 0 310px;
  margin-top: 257px;

  @media (max-width: $breakpoint-tablet) {
    padding: 0 40px;
    margin-top: 150px;
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 0 20px;
    margin-top: 100px;
  }
}

.hero-title {
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  font-weight: 900;
  color: white;
  margin: 0 0 $spacing-md 0;
  letter-spacing: 0;

  @media (max-width: $breakpoint-mobile) {
    font-size: 36px;
  }
}

.hero-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: 500;
  color: white;
  margin: 0 0 $spacing-lg 0;
  max-width: 678px;

  @media (max-width: $breakpoint-mobile) {
    font-size: 20px;
  }
}

.learn-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #1ce784;
  color: #222;
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(28, 231, 132, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

// Carousel Indicators
.carousel-indicators {
  position: absolute;
  bottom: 49px;
  left: 309px;
  right: 309px;
  z-index: 10;
  display: flex;
  gap: 13px;

  @media (max-width: $breakpoint-tablet) {
    left: 40px;
    right: 40px;
  }

  @media (max-width: $breakpoint-mobile) {
    left: 20px;
    right: 20px;
    flex-wrap: wrap;
  }
}

.indicator-item {
  flex: 1;
  min-width: 0;
}

.indicator-progress {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: white;
    border-radius: 5px;
    transition: width 0.3s;
  }

  &.active::before {
    width: 40%;
  }
}

.indicator-label {
  display: block;
  color: white;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: $breakpoint-mobile) {
    font-size: 14px;
  }
}

// Innovation Section
.innovation-section {
  padding: 80px 0 100px;
  background: white;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 310px;

  @media (max-width: 1920px) {
    padding: 0 150px;
  }

  @media (max-width: $breakpoint-tablet) {
    padding: 0 40px;
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 0 20px;
  }
}

.section-title {
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #000;
  line-height: 1.17;
  margin: 0 0 60px 0;

  @media (max-width: $breakpoint-mobile) {
    font-size: 28px;
    margin-bottom: 40px;
  }
}

// Product Categories
.product-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 60px;

  @media (max-width: $breakpoint-mobile) {
    gap: 12px;
    margin-bottom: 40px;
  }
}

.category-tag {
  padding: 12px 24px;
  background: #f5f5f5;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #1ce784;
    color: #222;
    transform: translateY(-2px);
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 10px 20px;
    font-size: 14px;
  }
}

// Product Grid
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: $breakpoint-mobile) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: #f9f9f9;
  overflow: hidden;
}

.new-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #1ce784;
  color: #222;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  z-index: 2;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
}

.product-title {
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin: 20px 0 16px;
  padding: 0 20px;
  min-height: 48px;

  @media (max-width: $breakpoint-mobile) {
    font-size: 14px;
  }
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
}

.product-capacity {
  font-size: 16px;
  color: #666;
}

.product-learn-more {
  background: transparent;
  border: none;
  color: #1ce784;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
}

// Carousel Progress
.carousel-progress {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 60px;
}

.progress-dot {
  width: 50px;
  height: 3px;
  background: #d9d9d9;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;

  &.active {
    background: #000;
  }

  &:hover {
    background: #666;
  }
}

// Technology Section
.technology-section {
  padding: 100px 0;
  background: #f9f9f9;

  @media (max-width: $breakpoint-mobile) {
    padding: 60px 0;
  }
}

.tech-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 310px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: $breakpoint-tablet) {
    padding: 0 40px;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 0 20px;
  }
}

.tech-image-wrapper {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.tech-image {
  width: 100%;
  height: auto;
  display: block;
}

.tech-text {
  @media (max-width: $breakpoint-tablet) {
    text-align: center;
  }
}

.tech-badge {
  display: inline-block;
  background: #1ce784;
  color: #222;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
}

.tech-title {
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin: 0 0 24px 0;
  line-height: 1.3;

  @media (max-width: $breakpoint-mobile) {
    font-size: 28px;
  }
}

.tech-description {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 40px;

  @media (max-width: $breakpoint-mobile) {
    font-size: 16px;
  }
}

.tech-learn-more {
  background: #1ce784;
  color: #222;
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(28, 231, 132, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

// Customization Section
.customization-section {
  padding: 100px 0;
  background: white;

  @media (max-width: $breakpoint-mobile) {
    padding: 60px 0;
  }
}

.custom-title {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin: 0 0 80px 0;

  @media (max-width: $breakpoint-mobile) {
    font-size: 28px;
    margin-bottom: 40px;
  }
}

// Custom Cards Grid - 特殊的网格布局
.custom-cards-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 200px);
  gap: 20px;
  margin-bottom: 80px;

  @media (max-width: 1600px) {
    grid-template-rows: repeat(5, 160px);
  }

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 250px);
    gap: 16px;
  }

  @media (max-width: $breakpoint-mobile) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 16px;
    margin-bottom: 40px;
  }
}

.custom-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

    .card-overlay {
      opacity: 1;
    }
  }

  // 按照设计稿的网格布局定位每张卡片
  &.card-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  &.card-2 {
    grid-column: 2 / 4;
    grid-row: 1 / 4;
  }

  &.card-3 {
    grid-column: 4 / 6;
    grid-row: 1 / 3;
  }

  &.card-4 {
    grid-column: 4 / 6;
    grid-row: 3 / 5;
  }

  &.card-5 {
    grid-column: 1 / 3;
    grid-row: 3 / 6;
  }

  &.card-6 {
    grid-column: 3 / 6;
    grid-row: 4 / 6;
  }

  @media (max-width: $breakpoint-tablet) {
    &.card-1,
    &.card-2,
    &.card-3,
    &.card-4,
    &.card-5,
    &.card-6 {
      grid-column: auto;
      grid-row: auto;
    }
  }

  @media (max-width: $breakpoint-mobile) {
    min-height: 250px;
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s;

  @media (max-width: $breakpoint-mobile) {
    opacity: 1;
  }
}

.card-label {
  display: block;
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media (max-width: $breakpoint-mobile) {
    font-size: 14px;
  }
}

.custom-process {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.process-step {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1ce784;
  color: #222;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin: 0 0 16px 0;
}

.step-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

// News Section
.news-section {
  padding: 100px 0;
  background: #f9f9f9;

  @media (max-width: $breakpoint-mobile) {
    padding: 60px 0;
  }
}

.news-title {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin: 0 0 80px 0;

  @media (max-width: $breakpoint-mobile) {
    font-size: 28px;
    margin-bottom: 40px;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.news-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
}

.news-image-wrapper {
  width: 100%;
  position: relative;
  padding-bottom: 60%;
  overflow: hidden;
}

.news-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-card-title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
  padding: 30px;
  margin: 0;

  @media (max-width: $breakpoint-mobile) {
    font-size: 18px;
    padding: 20px;
  }
}

// Philosophy Section - Beyond Limits
.philosophy-section {
  position: relative;
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: $breakpoint-mobile) {
    min-height: 400px;
  }
}

.philosophy-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.philosophy-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.philosophy-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.philosophy-content {
  position: relative;
  z-index: 10;
  max-width: 1000px;
  width: 100%;
  padding: 100px 20px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: $breakpoint-tablet) {
    padding: 80px 40px;
  }

  @media (max-width: $breakpoint-mobile) {
    padding: 60px 20px;
  }
}

.philosophy-title {
  font-size: 48px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin: 0 0 40px 0;

  @media (max-width: $breakpoint-mobile) {
    font-size: 32px;
    margin-bottom: 24px;
  }
}

.philosophy-text {
  font-size: 18px;
  color: white;
  line-height: 1.8;
  text-align: center;
  margin: 0 auto;

  @media (max-width: $breakpoint-mobile) {
    font-size: 16px;
  }
}

// Footer
.footer {
  padding: 80px 0 40px;
  background: #222;
  color: white;

  @media (max-width: $breakpoint-mobile) {
    padding: 60px 0 30px;
  }
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;

  @media (max-width: $breakpoint-tablet) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.footer-column {
  h4 {
    margin: 0 0 24px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 16px;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }
}

.footer-heading {
  font-size: 18px;
  font-weight: 700;
  color: white;
}
</style>
