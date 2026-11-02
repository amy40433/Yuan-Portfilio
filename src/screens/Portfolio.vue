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
                <div class="left-menu">
                    <ul>
                        <li v-for="(leftMenu, index) in leftMenu" :key="index" :class="{ active: currentTab === index }"
                            @click="currentTab = index">
                            <a href="javascript:;">
                                <img :src="leftMenu.src" :alt="leftMenu.title">
                                <span>{{ leftMenu.title }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="portfolio-gallery">
                    <div class="title">
                        <img :src="portfolioTitle" alt="portfolio title">
                        <img :src="portfolioTitleRwd" alt="portfolio title">
                        <p v-html="titleWithBreaks"></p>
                    </div>
                    <!-- 插畫設計 -->
                    <div class="gallery-tab tab-0" v-show="currentTab === 0">
                        <div class="grid-sizer"></div>
                        <div class="grid-item" v-for="(item, index) in illustration" :key="index"
                            :class="`grid-four-item${index + 1}`">
                            <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                <img :src="item.src" :alt="item.alt">
                                <span>{{ item.alt }}</span>
                            </a>
                        </div>
                    </div>
                    <!-- 平面設計 -->
                    <div class="gallery-tab tab-1" v-show="currentTab === 1">
                        <div class="menu3">
                            <ul>
                                <li v-for="(menu, index) in menu3" :key="index"
                                    :class="{ active1: currentTabMenu3 === index }" @click="currentTabMenu3 = index">
                                    <a href="javascript:;">
                                        <span>{{ menu.title }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- logo -->
                        <div class="subtab-0" v-show="currentTabMenu3 === 0">
                            <div class="grid-sizer"></div>
                            <div class="grid-item" v-for="(item, index) in logo" :key="index"
                                :class="`grid-two-item${index + 1}`">
                                <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                    <img :src="item.src" :alt="item.alt">
                                    <span>{{ item.alt }}</span>
                                </a>
                            </div>
                        </div>
                        <!-- packages -->
                        <div class="subtab-1" v-show="currentTabMenu3 === 1">
                            <div class="grid-sizer"></div>
                            <div class="grid-item" v-for="(item, index) in packages" :key="index"
                                :class="`grid-three-item${index + 1}`">
                                <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                    <img :src="item.src" :alt="item.alt">
                                    <span>{{ item.alt }}</span>
                                </a>
                            </div>
                        </div>
                        <!-- poster -->
                        <div class="subtab-2" v-show="currentTabMenu3 === 2">
                            <div class="grid-sizer"></div>
                            <div class="grid-item" v-for="(item, index) in poster" :key="index"
                                :class="`grid-one-item${index + 1}`">
                                <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                    <img :src="item.src" :alt="item.alt">
                                    <span>{{ item.alt }}</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <!-- 網頁設計 -->
                    <div class="gallery-tab tab-2" v-show="currentTab === 2">
                        <div class="grid-sizer"></div>
                        <div class="grid-item grid-five-item" v-for="(item, index) in website" :key="index">
                            <a :href="item.src" :data-pswp-width="item.width" :data-pswp-height="item.height">
                                <img :src="item.src" :alt="item.alt">
                                <span>{{ item.alt }}</span>
                            </a>
                        </div>
                    </div>
                    <!-- 前端程式 -->
                    <div class="gallery-tab tab-3" v-show="currentTab === 3">
                        <div class="grid-sizer"></div>
                        <div class="grid-item font-end " v-for="(item, index) in frontEnd" :key="index">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer">
                                <img :src="item.src" :alt="item.alt">
                                <span>{{ item.alt }}</span>
                                <small>{{ item.resolution }}</small>
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
import portfolioTitleRwd from '@/assets/images/portfolio_title-.png'
import { illustration, graphic, logo, packages, poster, website, frontEnd } from '@/portfolioImage'
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

const currentTab = ref(0)
const route = useRoute()
const currentTabMenu3 = ref(0)
const leftMenu = [
    { title: '插畫設計', src: new URL('@/assets/images/skill01.png', import.meta.url).href },
    { title: '平面設計', src: new URL('@/assets/images/skill02.png', import.meta.url).href },
    { title: '網頁設計', src: new URL('@/assets/images/skill03.png', import.meta.url).href },
    { title: '前端程式', src: new URL('@/assets/images/skill04.png', import.meta.url).href },
]

const menu3 = [
    { title: 'LOGO & 型錄設計', item: logo },
    { title: '包裝設計', item: packages },
    { title: '平面設計', item: poster },
]
const titleWithBreaks = computed(() => {
    return leftMenu[currentTab.value].title.split('').join('<br>')
})
let lightbox;

onMounted(() => {
    nextTick(() => {
        initMasonry()
        initLightbox()
    })
})

watch(
    () => route.hash,
    () => {
        setTabFromHash()
    },
    {
        immediate: true
    }
)


watch([currentTab, currentTabMenu3], () => {
    nextTick(() => {
        lightbox?.destroy();
        setTimeout(() => {
            initMasonry();
            initLightbox()
        }, 100)

    });
});

function setTabFromHash() {
    const tabMap = {
        '#illustration': 0,
        '#graphic': 1,
        '#website': 2,
        '#frontend': 3
    }

    if (tabMap[route.hash] !== undefined) {
        currentTab.value = tabMap[route.hash]
    } else {
        currentTab.value = 0
    }
}



function initMasonry() {
    let grid;
    if (currentTab.value === 1) {
        grid = document.querySelector(`.subtab-${currentTabMenu3.value}`)
    } else {
        grid = document.querySelector(`.tab-${currentTab.value}`)
    }
    // console.log('初始化 Masonry 的 DOM 是：', grid)
    if (!grid) return;
    imagesLoaded(grid, () => {
        new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            gutter: 15
        });
    });

}
function initLightbox() {
    let gallerySelector;
    if (currentTab.value === 1) {
        gallerySelector = `.subtab-${currentTabMenu3.value}`
    } else {
        gallerySelector = `.tab-${currentTab.value}`
    }

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
