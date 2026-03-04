<template>
    <div class="portfolio-bg inside-bg">
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
                                <img :src="menu.src" :alt="menu.title">
                                <span>{{ menu.title }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="portfolio-gallery">
                    <div class="title">
                        <img :src="portfolioTitle" alt="portfolio title">
                        <p v-html="titleWithBreaks"></p>
                    </div>
                    <!-- 插畫設計 -->
                    <div class="gallery-tab tab-0" v-show="currentTab === 0">
                        <div class="grid-sizer"></div>
                        <div class="grid-item" v-for="(item, index) in illustration" :key="index"
                            :class="`grid-item${index + 1}`">
                            <div v-if="index===0" class="tab-title">Logo設計</div>
                            <div v-else-if="index===4" class="tab-title">包裝設計</div>
                            <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                <img :src="item.src" :alt="item.alt">
                                <span>{{ item.alt }}</span>
                            </a>
                            
                        </div>
                    </div>
                    <!-- 平面設計 -->
                    <div class="gallery-tab tab-1" v-show="currentTab === 1">
                        <div class="grid-sizer"></div>
                        <div class="grid-item" v-for="(item, index) in graphic" :key="index"
                            :class="`grid-item${index + 1}`">
                            <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                <img :src="item.src" :alt="item.alt">
                                <span>{{ item.alt }}</span>
                            </a>
                        </div>
                    </div>
                    <!-- 網頁設計 -->
                    <div class="gallery-tab tab-2" v-show="currentTab === 2">
                        <div class="grid-sizer"></div>
                        <div class="grid-item" v-for="(item, index) in website" :key="index"
                            :class="`grid-item${index + 1}`">
                            <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                <img :src="item.src" :alt="item.alt">
                                <span>{{ item.alt }}</span>
                            </a>
                        </div>
                    </div>
                    <!-- 前端程式 -->
                    <div class="gallery-tab tab-3" v-show="currentTab === 3">
                        <div class="grid-sizer"></div>
                        <div class="grid-item" v-for="(item, index) in frontEnd" :key="index"
                            :class="`grid-item${index + 1}`">
                            <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                <img :src="item.src" :alt="item.alt">
                                <span>{{ item.alt }}</span>
                            </a>
                        </div>
                    </div>
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
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

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
let lightbox;

onMounted(() => {
    initMasonry();
    initLightbox();
})

watch(currentTab, () => {
    nextTick(() => {
        lightbox?.destroy();
        initMasonry();
        initLightbox()
    });
});

function initMasonry() {
    const grid = document.querySelector(`.tab-${currentTab.value}`)
    imagesLoaded(grid, () => {
        new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: false,
            gutter: 15
        });
    });
}
function initLightbox() {
    const gallerySelector = `.tab-${currentTab.value}`
    lightbox = new PhotoSwipeLightbox({
        gallery: gallerySelector,
        children: 'a',
        pswpModule: () => import('photoswipe')
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        captionContent: (slide) => {
            return slide.data.element.querySelector('img').getAttribute('alt');
        },
        type: 'below',
    });

    lightbox.init();
}

</script>
<style scoped lang="scss"></style>




