<template>
    <div class="portfolio-bg">
        <div class="decorate">
            <div>
                <img :src="decorate" alt="decorate">
                <img :src="decorateOne" alt="decorate">
                <img :src="decorate" alt="decorate">
                <img :src="decorateOne" alt="decorate">
            </div>
        </div>
        <div class="wrapper-1400">
            <div class="portfolio">
                <!-- 頁籤botton -->
                <div class="menu2">
                    <ul>
                        <li v-for="(menu, index) in menu2" :key="index" :class="{ active: currentTab === index }"
                            @click="currentTab = index">
                            <a href="javascript:;">
                                <img :src="menu.src" alt="menu.title">
                                <span>{{ menu.title }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="portfolio-gallery">
                    <div class="title">
                        <img :src="portfolioTitle" alt="portfolio title">
                        <p v-html="titleWithBreaks"></p>
                        <!-- <p>Portfolio</p> -->
                    </div>
                    <div class="gallery-tab">
                        <div class="grid-sizer"></div>
                        <div class="grid-item" v-for="(item, index) in illustration" :key="index"
                            :class="`grid-item${index + 1}`">
                            <a href="">
                                <img :src="item.src" :alt="item.alt">
                            </a>
                        </div>
                    </div>
                    <!-- <div class="gallery-tab">
                        <div class="item" :class="`item${index + 1}`" v-for="(item, index) in illustration"
                            :key="index">
                            <a href="">
                                <img :src="item.src" :alt="item.alt">
                            </a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import decorate from '@/assets/images/decorate.png'
import decorateOne from '@/assets/images/decorate01.png'
import portfolioTitle from '@/assets/images/portfolio_title.png'
import { portfolioImages, illustration, graphic, website, frontEnd } from '@/portfolioImage'
import { ref, computed, onMounted } from 'vue'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

const currentTab = ref(0)
const menu2 = [
    { title: '插畫設計', src: new URL('@/assets/images/skill01.png', import.meta.url).href },
    { title: '平面設計', src: new URL('@/assets/images/skill02.png', import.meta.url).href },
    { title: '網頁設計', src: new URL('@/assets/images/skill03.png', import.meta.url).href },
    { title: '前端程式', src: new URL('@/assets/images/skill04.png', import.meta.url).href },
]
const titleWithBreaks = computed(() => {
    return menu2[currentTab.value].title.split('').join('<br>')
})
onMounted(() => {
    const grid = document.querySelector('.gallery-tab')
    imagesLoaded(grid, () => {
        new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            gutter: 15
        });
    })

})

</script>
<style scoped lang="scss">
/* .portfolio .title {
  font-size: 120px;
  font-family: 'Consola';
  color: #dcdddd;
  transform: rotate(90deg);
  transform-origin: bottom left;
} */

/* .gallery-tab {
  width: 90%;
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 150px);
  gap: 17px
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.portfolio-gallery {
    display: flex;
}

.gallery-tab {
    width: 100%;
    margin: 0 auto;
}


.grid-sizer {
    width: calc(100% / 4 - 15px);
}

/* 需要與.grid-sizer一樣 */
.grid-item {
    width: calc(100% / 4 - 15px);
    margin: 0px 15px 15px 0;
}

.grid-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.grid-item1 {
    height: 450px;
}

.grid-item2,
.grid-item3,
.grid-item4 {
    height: 300px;
}

.grid-item5 {
    width: 50%;
    height: 300px;
}
</style>