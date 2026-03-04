<template>
    <div class="introduction_bg">
        <div class="wrapper">
            <div class="introduction">
                <div class="title">
                    <p>Hi! I’m Yuan</p>
                    <p>Web Designer</p>
                </div>
                <div class="content">
                    <p>我叫朱芫慧，擁有6年平面設計及4年網頁設計的經驗，並擁有html、css獨立拆版網站的能力，目前正積極學習前端程式。</p>
                    <p><span>E-mail:</span>amy40433@gmail.com</p>
                    <p><span>Tel:</span>0952887929</p>
                </div>
                <hr>
                <div class="bt">
                    <router-link to="/about">About</router-link>
                    <router-link to="/portfolio">Portfolio</router-link>
                </div>
            </div>
        </div>
        <div class="int_icon">
            <div class="int_icon01">
                <img :src="intIconOne" alt="">
            </div>
            <div class="int_icon02">
                <img :src="intIcon" alt="">
            </div>
        </div>
    </div>
    <div class="skill_bg">
        <div class="wrapper">
            <div class="skill">
                <div class="title">
                    <p>What My Design </p>
                    <p>Skills Included</p>
                </div>
                <div class="display_Percent">
                    <SkillBar label="PHOTOSHOP" :percent="80"></SkillBar>
                    <SkillBar label="ILLUSTRATOR" :percent="90"></SkillBar>
                    <SkillBar label="HTML / CSS" :percent="70"></SkillBar>
                    <SkillBar label="JAVASCRIPT" :percent="40"></SkillBar>
                    <SkillBar label="VUE" :percent="40"></SkillBar>
                </div>

            </div>
            <div class="skill_image">
                <ul class="left_col">
                    <li>
                        <img :src="skillOne" alt="Illustration Desgin">
                        <span>Illustration Desgin</span>
                    </li>
                    <li>
                        <img :src="skillThree" alt="Web Desgin">
                        <span>Web Desgin</span>
                    </li>
                </ul>
                <ul class="right-col">
                    <li>
                        <img :src="skillTwo" alt="Graphic Desgin">
                        <span>Graphic Desgin</span>
                    </li>
                    <li>
                        <img :src="skillFour" alt="Front-End">
                        <span>Front-End</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="portfolio_bg">
        <div class="wrapper">
            <div class="portfolio">
                <div class="title">My Portfolio</div>
                <!-- 頁籤 -->
                <div id="tab_group">
                    <ul class="tab_header">
                        <li v-for="(tab, index) in tabs" :key="index" :class="{ active: currentTab === index }" @click="currentTab =index">
                            <a href="javascript:;">
                                <span>{{ tab.title }}</span>
                                <span>{{ tab.titleEng }}</span>
                            </a>
                        </li>
                    </ul>
                    <!-- 插畫設計 -->
                    <ul class="tab_list" v-show="currentTab === 0">
                        <li v-for="(illustration, index) in illustration" :key="index">
                            <a href="">
                                <img :src="illustration.src" :alt="illustration.alt">
                            </a>
                            <span>{{ illustration.alt }}</span>
                        </li>
                    </ul>
                    <!-- 平面設計 -->
                    <ul class="tab_list" v-show="currentTab === 1">
                        <li v-for="(graphic, index) in graphic" :key="index">
                            <a href="">
                                <img :src="graphic.src" :alt="graphic.alt">
                            </a>
                            <span>{{ graphic.alt }}</span>
                        </li>
                    </ul>
                    <!-- 網頁設計 -->
                    <ul class="tab_list" v-show="currentTab === 2">
                        <li v-for="(portfolioGraphic, index) in portfolioGraphic" :key="index">
                            <a href="">
                                <img :src="portfolioGraphic.src" :alt="portfolioGraphic.alt">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                    </ul>
                    <!-- 前端程式 -->
                    <ul class="tab_list" v-show="currentTab === 3">
                        <li v-for="(portfolioGraphic, index) in portfolioGraphic" :key="index">
                            <a href="">
                                <img :src="portfolioGraphic.src" :alt="portfolioGraphic.alt">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                    </ul>
                </div>
                <!-- 最新消息 -->
                <div class="bt">
                    <router-link to="/portfolio">View All</router-link>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>
import SkillBar from '@/components/SkillBar.vue'
import skillOne from '@/assets/images/skill01.png'
import skillTwo from '@/assets/images/skill02.png'
import skillThree from '@/assets/images/skill03.png'
import skillFour from '@/assets/images/skill04.png'
import intIcon from '@/assets/images/introduction_icon.png'
import intIconOne from '@/assets/images/introduction_icon-.png'
import { ref, onMounted } from 'vue';

const currentTab = ref(0)

const tabs = [
    { title: '插畫設計', titleEng: 'ILLUSTRATION' },
    { title: '平面設計', titleEng: 'GRAPHIC' },
    { title: '網頁設計', titleEng: 'WEBSITE' },
    { title: '前端程式', titleEng: 'FRONT-END' },
]
// 插畫設計
const illustration = ref([])
const illustrationImages = [
    {
        src: new URL('@/assets/portfolio/illustration/illustration01.jpg', import.meta.url).href,
        alt: '酪印-菜單DM',
    },
    {
        src: new URL('@/assets/portfolio/illustration/illustration02.jpg', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
    },
    {
        src: new URL('@/assets/portfolio/illustration/illustration03.jpg', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
    },
]

function getIllustrationImages() {
    const randomIndex = [...illustrationImages].sort(() => Math.random() - 0.5)
    illustration.value = randomIndex.slice(0, 3)
}

onMounted(() => {
    getIllustrationImages()
})



</script>
<style scoped lang="scss"></style>
