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
                        <!-- <div class="skill_image">
                <ul>
                    <li>
                        <img :src="skillOne" alt="Illustration Desgin">
                        <span>Illustration Desgin</span>
                    </li>
                    <li>
                        <img :src="skillTwo" alt="Graphic Desgin">
                        <span>Graphic Desgin</span>
                    </li>
                    <li>
                        <img :src="skillThree" alt="Web Desgin">
                        <span>Web Desgin</span>
                    </li>
                    <li>
                        <img :src="skillFour" alt="Front-End">
                        <span>Front-End</span>
                    </li>
                </ul>
            </div> -->
        </div>
    </div>
    <div class="portfolio_bg">
        <div class="wrapper">
            <div class="portfolio">
                <div class="title">My Portfolio</div>
                <!-- 最新消息 -->
                <div id="tab_group">
                    <ul class="tab_header">
                        <li id="n_tab0" class="tab_header-">
                            <a href="javascript:;">
                                <span>插畫設計</span>
                                <span>ILLUSTRATION</span>
                            </a>
                        </li>
                        <li id="n_tab1">
                            <a href="javascript:;">
                                <span>平面設計</span>
                                <span>GRAPHIC</span>
                            </a>
                        </li>
                        <li id="n_tab2">
                            <a href="javascript:;">
                                <span>網頁設計</span>
                                <span>WEBSITE</span>
                            </a>
                        </li>
                        <li id="n_tab3">
                            <a href="javascript:;">
                                <span>前端程式</span>
                                <span>FRONT-END</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="tab_list tab_list0">
                        <li>
                            <a href="">
                                <img :src="portfolioGraphic.src" :alt="portfolioGraphic.alt">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                        <li>
                            <a href="">
                                <img :src="portfolioGraphic.src" :alt="portfolioGraphic.alt">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                        <li>
                            <a href="">
                                <img :src="portfolioGraphic.src" :alt="portfolioGraphic.alt">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                    </ul>
                    <ul class="tab_list tab_list1" style=" display:none">
                        <li>
                            <a href="">
                                <img src="" alt="">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                    </ul>
                    <ul class="tab_list tab_list2" style=" display:none">
                        <li>
                            <a href="">
                                <img src="" alt="">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="">
                            </a>
                            <span>{{ portfolioGraphic.alt }}</span>
                        </li>
                    </ul>
                </div>
                <!-- 最新消息 -->
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

const portfolioGraphic = ref({ src: '', alt: '' })
const graphicImages = [
    {
        src: new URL('@/assets/portfolio/graphic/graphic01.png', import.meta.url).href,
        ali: '酪印-菜單DM',
    },
    {
        src: new URL('@/assets/portfolio/graphic/graphic02.png', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
    },
    {
        src: new URL('@/assets/portfolio/graphic/graphic03.png', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
    },
]

onMounted(() => {
    const randomImageG = Math.floor(Math.random() * graphicImages.length)
    portfolioGraphic.value = graphicImages[randomImageG]
    ////變數graphicImages內的Math亂數0,1,2
})
  
</script>
<style scoped lang="scss"></style>
