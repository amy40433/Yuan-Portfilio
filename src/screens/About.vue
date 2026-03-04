<template>
    <div class="inside-bg about-bg">
        <div class="wrapper-1400">
            <div class="about-int">
                <div class="about-img">
                    <img :src="aboutImg" alt="">
                    <div class="int-icon-bg">
                        <div class="int-icon-inside">
                            <div class="int-icon01">
                                <img :src="intIconOne" alt="">
                            </div>
                            <div class="int-icon02">
                                <img :src="intIcon" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-text">
                    <div>
                        <div class="title">
                            <span class="icon"><img :src="education" alt=""></span>
                            <div>
                                <span>Education</span>
                                <span>學歷</span>
                            </div>
                        </div>
                        <hr>
                        <ul>
                            <li>
                                <div class="name">
                                    <span>廣告設計科</span>
                                    <span>鶯歌高職</span>
                                </div>
                                <div class="data">
                                    2008 - 2011
                                </div>
                            </li>
                            <li>
                                <div class="name">
                                    <span>數位媒體設計系</span>
                                    <span>嶺東科技大學</span>
                                </div>
                                <div class="data">
                                    2011 - 2015
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="title">
                            <span class="icon"><img :src="workExperience" alt=""></span>
                            <div>
                                <span>Work Experience</span>
                                <span>工作經歷</span>
                            </div>

                        </div>
                        <hr>
                        <ul>
                            <li>
                                <div class="name">
                                    <span>設計專員</span>
                                    <span>京漾生技事業股份有限公司</span>
                                </div>
                                <div class="data">
                                    2015/11 - 2017/05
                                </div>
                            </li>
                            <li>
                                <div class="name">
                                    <span>平面設計</span>
                                    <span>澄朗興業有限公司</span>
                                </div>
                                <div class="data">
                                    2018/03 - 2019/06
                                </div>
                            </li>
                            <li>
                                <div class="name">
                                    <span>網頁視覺設計師</span>
                                    <span>典範數位科技有限公司</span>
                                </div>
                                <div class="data">
                                    2020/03 - 2025/01
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="about-hr"></div>
        </div>
        <div class="wrapper">
            <div class="work-int">
                <ul>
                    <li>
                        <span>京漾生技事業股份有限公司</span>
                        <p>在此公司擔任設計專員，前期所負責的工作內容主要為協助代工客戶瓶器、包裝、DM設計；後期接觸規劃公司品牌商品包裝與印刷廠洽談、估價、網站優化及社群圖製作。</p>
                    </li>
                    <li>
                        <span>澄朗興業有限公司</span>
                        <p>在此公司擔任平面設計師。公司需要創立一個新品牌，從品牌名稱發想、LOGO設計、瓶器挑選及估價、包裝設計、網站設計、型錄設計等一系列設計，後期專注於投放廣告圖的設計。</p>
                    </li>
                    <li>
                        <span>典範數位科技有限公司</span>
                        <p>在此公司擔任網頁視覺設計師，主要負責的工作內容為客戶網站首頁、內頁、Banner設計、協助網站內頁編輯、網站拆板（html及css）、網站無障礙修改。</p>
                    </li>
                </ul>
                <hr>
                <p>在工作之餘偶爾也會接朋友介紹的設計案件增加設計經驗，或者畫畫可愛的插圖。</p>
            </div>
        </div>
    </div>

</template>

<script setup>
import intIcon from '@/assets/images/introduction_icon.png'
import intIconOne from '@/assets/images/introduction_icon-.png'
import aboutImg from '@/assets/images/about_img.png'
import education from '@/assets/images/about_icon01.png'
import workExperience from '@/assets/images/about_icon02.png'

</script>
<style scoped lang="scss"></style>
