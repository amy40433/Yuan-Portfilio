<template>
    <div class="introduction-bg">
        <div class="wrapper">
            <div class="introduction" data-aos="fade-right" data-aos-duration="2000">
                <div class="title">
                    <p>Hi! <br>I’m Yuan</p>
                    <p>Web <br>Designer</p>
                </div>
                <div class="introduction-bg-rwd">
                    <img :src="intBgRwd" alt="">
                </div>
                <div class="content-block">
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

        </div>
        <div class="int-icon">
            <div class="int-icon01">
                <img :src="intIconOne" alt="">
            </div>
            <div class="int-icon02">
                <img :src="intIcon" alt="">
            </div>
        </div>
    </div>
    <div class="skill-bg">
        <div class="wrapper">
            <div class="skill" data-aos="fade-right" data-aos-duration="2000">
                <div class="title">
                    <p>What My Design </p>
                    <p>Skills Included</p>
                </div>
                <div class="display-Percent">
                    <SkillBar label="PHOTOSHOP" :percent="80"></SkillBar>
                    <SkillBar label="ILLUSTRATOR" :percent="90"></SkillBar>
                    <SkillBar label="HTML / CSS" :percent="70"></SkillBar>
                    <SkillBar label="JAVASCRIPT" :percent="40"></SkillBar>
                    <SkillBar label="VUE" :percent="40"></SkillBar>
                </div>

            </div>
            <div class="skill-image" data-aos="fade-right" data-aos-duration="2000">
                <ul class="left-col">
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
    <div class="portfolio-home-bg">
        <div class="wrapper">
            <div class="portfolio-home" data-aos="fade-right" data-aos-duration="2000">
                <div class="title">My Portfolio</div>
                <!-- 頁籤 -->
                <div id="tab-group">
                    <ul class="tab-header">
                        <li v-for="(tab, index) in tabs" :key="index" :class="{ activehome: currentTab === index }"
                            @click="currentTab = index">
                            <a href="javascript:;">
                                <span>{{ tab.title }}</span>
                                <span>{{ tab.titleEng }}</span>
                            </a>
                        </li>
                    </ul>
                    <!-- 插畫設計 -->
                    <ul class="tab-list" v-show="currentTab === 0">
                        <li v-for="(item, index) in portfolio.illustration" :key="index">
                            <div>
                                <img :src="item.src" :alt="item.alt">
                            </div>
                            <span>{{ item.alt }}</span>
                        </li>
                    </ul>
                    <!-- 平面設計 -->
                    <ul class="tab-list" v-show="currentTab === 1">
                        <li v-for="(item, index) in portfolio.graphic" :key="index">
                            <div>
                                <img :src="item.src" :alt="item.alt">
                            </div>
                            <span>{{ item.alt }}</span>
                        </li>
                    </ul>
                    <!-- 網頁設計 -->
                    <ul class="tab-list" v-show="currentTab === 2">
                        <li v-for="(item, index) in portfolio.website" :key="index">
                            <div>
                                <img :src="item.src" :alt="item.alt">
                            </div>
                            <span>{{ item.alt }}</span>
                        </li>
                    </ul>
                    <!-- 前端程式 -->
                    <ul class="tab-list" v-show="currentTab === 3">
                        <li v-for="(item, index) in portfolio.frontEnd" :key="index">
                            <div>
                                <img :src="item.src" :alt="item.alt">
                            </div>
                            <span>{{ item.alt }}</span>
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
import intBgRwd from '@/assets/images/introduction_bg_rwd.png'
import intIcon from '@/assets/images/introduction_icon.png'
import intIconOne from '@/assets/images/introduction_icon-.png'
import { ref, onMounted } from 'vue';
import { portfolioImages, illustration, graphic, website, frontEnd } from '@/portfolioImage'


const currentTab = ref(0)
const tabs = [
    { title: '插畫設計', titleEng: 'ILLUSTRATION', item: illustration, key: 'illustration' },
    { title: '平面設計', titleEng: 'GRAPHIC', item: graphic, key: 'graphic' },
    { title: '網頁設計', titleEng: 'WEBSITE', item: website, key: 'website' },
    { title: '前端程式', titleEng: 'FRONT-END', item: frontEnd, key: 'frontEnd' },
]
const portfolio = ref({})

function getPortfolioImages() {
    for (let i = 0; i < tabs.length; i++) {
        const randomIndex = [...tabs[i].item].sort(() => Math.random() - 0.5)
        portfolio.value[tabs[i].key] = randomIndex.slice(0, 3)
    }

}
onMounted(() => {
    getPortfolioImages()
})


</script>
<style scoped lang="scss"></style>
