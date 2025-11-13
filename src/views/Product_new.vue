<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="hero">
      <img :src="heroImage" alt="Hero Background" class="hero-bg" />

      <!-- Gradient Overlay -->
      <div class="hero-gradient"></div>

      <!-- Header -->
      <header class="header">
        <img :src="logoImage" alt="Logo" class="logo" />

        <nav class="nav-menu">
          <a href="#" class="nav-item">Products</a>
          <a href="#" class="nav-item">Technology</a>
          <a href="#" class="nav-item">Customize</a>
          <a href="#" class="nav-item">US Local Service</a>
          <a href="#" class="nav-item">Why Caleaf</a>
        </nav>

        <div class="header-actions">
          <button class="search-icon" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="9.5" cy="9.5" r="8.5" stroke="white" stroke-width="2"/>
              <path d="M15.5 15.5L20 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="contact-btn">Contact</button>
        </div>
      </header>

      <!-- Hero Content -->
      <div class="hero-content">
        <h1 class="hero-title">EXTRO</h1>
        <p class="hero-subtitle">One puff to be a freak, it is the freaking best</p>
        <button class="cta-button">
          Learn more
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Bottom Indicators -->
      <div class="bottom-indicators">
        <div v-for="n in 5" :key="n" class="indicator">
          <div class="indicator-bar" :class="{ active: n === 1 }"></div>
          <span class="indicator-text">DUKES User Manual</span>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="products-section">
      <h2 class="products-title">Innovative products:<br>The most advanced, the best fit.</h2>

      <!-- Category Tabs -->
      <div class="category-tabs">
        <button v-for="cat in categories" :key="cat" class="category-tab">{{ cat }}</button>
      </div>

      <!-- Product Cards -->
      <div class="product-cards">
        <div v-for="(product, i) in products" :key="i" class="product-card">
          <div class="card-image">
            <img :src="product.image" :alt="product.title" />
            <span class="new-label">New</span>
          </div>
          <h3 class="card-title">{{ product.title }}</h3>
          <div class="card-footer">
            <span class="capacity">{{ product.capacity }}</span>
            <a href="#" class="learn-link">Learn more</a>
          </div>
        </div>
      </div>

      <!-- Carousel Progress -->
      <div class="carousel-progress">
        <div v-for="n in 4" :key="n" class="progress-bar" :class="{ active: n === 1 }"></div>
      </div>
    </section>

    <!-- Tech Showcase -->
    <section class="tech-section">
      <div class="tech-card">
        <div class="tech-image">
          <img :src="techImage" alt="UNICORE Technology" />
        </div>
        <div class="tech-content">
          <span class="tech-new">New</span>
          <h2 class="tech-title">UNICORE™ ceramic heating technology</h2>
          <p class="tech-desc">Patented U-shape ceramic design<br>The golden standard for ROSIN</p>
          <button class="tech-button">Learn more</button>
        </div>
      </div>
    </section>

    <!-- Customize Section -->
    <section class="customize-section">
      <h2 class="customize-title">Realize your unique design with CALEAF TECH</h2>

      <div class="customize-grid">
        <div
          v-for="(card, i) in customizeCards"
          :key="i"
          class="customize-card"
          :style="{ gridColumn: card.col, gridRow: card.row }"
        >
          <img :src="card.image" :alt="`Card ${i+1}`" class="card-bg" />
          <span class="card-label">{{ card.label }}</span>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news-section">
      <h2 class="news-title">The latest news and inspiring stories</h2>

      <div class="news-carousel">
        <button class="nav-btn nav-left" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="news-cards">
          <div v-for="(news, i) in newsItems" :key="i" class="news-card">
            <img :src="news.image" :alt="news.title" class="news-img" />
            <div class="news-footer">
              <h3 class="news-card-title">{{ news.title }}</h3>
            </div>
          </div>
        </div>

        <button class="nav-btn nav-right" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Beyond Limits -->
    <section class="beyond-section">
      <div class="beyond-card">
        <img :src="beyondBgImage" alt="Beyond Limits" class="beyond-bg" />
        <div class="beyond-content">
          <h2 class="beyond-title">Beyond Limits</h2>
          <p class="beyond-text">
            At Caleaf Tech, we don't settle for what others consider "good enough." We push the boundaries of what's possible, constantly seeking technological breakthroughs to deliver the absolute best. When others say "That's as far as we can go," we say "This is just the beginning." We're committed to making every puff not just delicious, but unforgettable, and every customer experience not just satisfactory, but exceptional.
          </p>
          <button class="play-button" aria-label="Play Video">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Images
const logoImage = ref('/images/logo/logo.png')
const heroImage = ref('/images/hero/hero-bg.jpg')
const techImage = ref('/images/tech/tech-showcase.png')
const beyondBgImage = ref('/images/beyond/beyond-bg.png')

// Categories
const categories = ref([
  'For Resin/Rosin', 'Pod System', 'Full Ceramic', 'D9 Distillate',
  'US Stock', 'Dab Pen', '510 Cartridge', 'D8 Distillate'
])

// Products
const products = ref([
  { image: '/images/products/product-1.png', title: 'UNIT UNICORE™ tech & large display', capacity: '1mL/2mL' },
  { image: '/images/products/product-2.png', title: 'UNIT UNICORE™ tech & large display', capacity: '1mL/2mL' },
  { image: '/images/products/product-3.png', title: 'UNIT UNICORE™ tech & large display', capacity: '1mL/2mL' },
  { image: '/images/products/product-4.png', title: 'UNIT UNICORE™ tech & large display', capacity: '1mL/2mL' }
])

// Customize Cards
const customizeCards = ref([
  { image: '/images/customize/card-1.png', label: 'PRODUCT DEVELOPMENT', col: '1', row: '1' },
  { image: '/images/customize/card-2.png', label: 'PRODUCT DEVELOPMENT', col: '3', row: '1 / 4' },
  { image: '/images/customize/card-3.png', label: 'PRODUCT DEVELOPMENT', col: '5', row: '1' },
  { image: '/images/customize/card-4.png', label: 'PRODUCT DEVELOPMENT', col: '5', row: '3' },
  { image: '/images/customize/card-5.png', label: 'PRODUCT DEVELOPMENT', col: '1 / 3', row: '5' },
  { image: '/images/customize/card-6.png', label: 'PRODUCT DEVELOPMENT', col: '3 / 6', row: '5' }
])

// News
const newsItems = ref([
  { image: '/images/news/news-1.png', title: 'CALEAF TECH x UAE Team: GO Ride with Pogačar' },
  { image: '/images/news/news-2.png', title: 'CALEAF TECH x UAE Team: GO Ride with Pogačar' }
])
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Outfit:wght@400&display=swap');

// Color System
$primary-green: #1CE785;
$text-primary: #000000;
$text-secondary: #555555;
$text-dark: #222222;
$text-white: #FFFFFF;
$bg-light: #F8F9FD;
$bg-gray: #EBEEEF;

.product-page {
  width: 100%;
  background: white;
}

// ===== HERO SECTION =====
.hero {
  position: relative;
  width: 1920px;
  height: 880px;
  margin: 0 auto;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 139px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.header {
  position: absolute;
  top: 30px;
  left: 310px;
  right: 310px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.logo {
  width: 187.2px;
  height: 30px;
}

.nav-menu {
  display: flex;
  gap: 64px;
  margin-left: 59px;
}

.nav-item {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  color: $text-white;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
}

.search-icon {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
}

.contact-btn {
  width: 140px;
  height: 40px;
  background: $primary-green;
  border: none;
  border-radius: 50px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: $text-white;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
}

.hero-content {
  position: absolute;
  top: 352px;
  left: 310px;
  width: 678px;
  z-index: 10;
}

.hero-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 50px;
  line-height: 58.59px;
  color: $text-white;
  margin: 0 0 15px 0;
  letter-spacing: 0;
}

.hero-subtitle {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
  line-height: 35.16px;
  color: $text-white;
  margin: 0 0 32px 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: 170px;
  height: 50px;
  background: $primary-green;
  border: none;
  border-radius: 50px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  color: $text-dark;
  cursor: pointer;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
}

.bottom-indicators {
  position: absolute;
  bottom: 49px;
  left: 309px;
  right: 309px;
  display: flex;
  gap: 13px;
  z-index: 10;
}

.indicator {
  flex: 1;
}

.indicator-bar {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;

  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background: $text-white;
    border-radius: 5px;
  }
}

.indicator-text {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: $text-white;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// ===== PRODUCTS SECTION =====
.products-section {
  width: 1920px;
  margin: 0 auto;
  padding: 80px 310px 99px;
}

.products-title {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
  line-height: 46.88px;
  color: $text-primary;
  margin: 0 0 44px 0;
}

.category-tabs {
  width: 1298px;
  height: 60px;
  background: $bg-light;
  border-radius: 50px;
  padding: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 50px;
}

.category-tab {
  height: 50px;
  padding: 0 26px;
  background: white;
  border: none;
  border-radius: 50px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  line-height: 21.09px;
  color: #111111;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    background: $primary-green;
    color: $text-dark;
  }
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(4, 410px);
  gap: 35px;
  margin-bottom: 60px;
}

.product-card {
  width: 410px;
  background: $bg-light;
  border-radius: 20px;
  padding: 30px 68px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-8px);
  }
}

.card-image {
  position: relative;
  width: 274px;
  height: 304px;
  margin: 0 auto 28px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.new-label {
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  color: $primary-green;
}

.card-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 32px;
  color: $text-primary;
  text-align: center;
  margin: 0 0 32px 0;
  min-height: 64px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.capacity {
  width: 130px;
  height: 40px;
  background: $primary-green;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  color: $text-primary;
}

.learn-link {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  color: $text-primary;
  text-decoration: underline;
  text-underline-offset: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.carousel-progress {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.progress-bar {
  width: 50px;
  height: 3px;
  background: #D9D9D9;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    background: $text-primary;
  }
}

// ===== TECH SECTION =====
.tech-section {
  width: 1920px;
  margin: 0 auto;
  padding: 0 310px 87px;
}

.tech-card {
  width: 1300px;
  height: 480px;
  background: $bg-gray;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
}

.tech-image {
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.tech-content {
  flex: 1;
  padding: 128.5px 118px;
  text-align: center;
}

.tech-new {
  display: inline-block;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  color: $primary-green;
  margin-bottom: 11px;
}

.tech-title {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  line-height: 35.16px;
  color: $text-primary;
  margin: 0 0 15px 0;
}

.tech-desc {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  color: $text-secondary;
  margin: 0 0 38px 0;
}

.tech-button {
  width: 160px;
  height: 40px;
  background: $primary-green;
  border: none;
  border-radius: 50px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  color: $text-primary;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
}

// ===== CUSTOMIZE SECTION =====
.customize-section {
  width: 1920px;
  margin: 0 auto;
  padding: 0 310px 100px;
}

.customize-title {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
  line-height: 46.88px;
  color: $text-primary;
  text-align: center;
  margin: 0 0 52px 0;
}

.customize-grid {
  width: 1324px;
  display: grid;
  grid-template-columns: 359px 10px 590px 10px 355px;
  grid-template-rows: 485px 11px 237px 11px 238px;
  gap: 0;
}

.customize-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.card-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-label {
  position: absolute;
  bottom: 27px;
  left: 27px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 24px;
  line-height: 28.13px;
  color: $text-white;
  text-transform: uppercase;
}

// ===== NEWS SECTION =====
.news-section {
  width: 1920px;
  margin: 0 auto;
  padding: 0 310px 16.5px;
}

.news-title {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
  line-height: 46.88px;
  color: $text-primary;
  text-align: center;
  margin: 0 0 49.5px 0;
}

.news-carousel {
  position: relative;
  width: 1300px;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  &.nav-left {
    left: -35px;
  }

  &.nav-right {
    right: -35px;
  }
}

.news-cards {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
}

.news-card {
  flex-shrink: 0;
  width: 860px;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 96px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  padding: 0 36px;
}

.news-card-title {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 28px;
  color: $text-white;
  margin: 0;
}

// ===== BEYOND SECTION =====
.beyond-section {
  width: 1920px;
  margin: 0 auto;
  padding: 0 310px 80px;
}

.beyond-card {
  width: 1300px;
  height: 560px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.beyond-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.beyond-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 122px 149.5px;
}

.beyond-title {
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 50px;
  line-height: 58.59px;
  color: $text-white;
  text-align: center;
  margin: 0 0 27.25px 0;
}

.beyond-text {
  width: 1001px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: $text-white;
  text-align: center;
  margin: 0 0 16px 0;
}

.play-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;

  svg {
    color: $text-dark;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
