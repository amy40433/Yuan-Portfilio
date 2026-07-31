<template>
    <header>
        <div class="wrapper">
            <h1 class="logo">
                <img alt="logo" :src="logo">
            </h1>
            <div class="rwd-bar" :class="{ 'rwd-bar-on': menuOpen }" @click="toggleMneu">
                <i :class="['bar1', { 'bar1-on': menuOpen }]"></i>
                <i :class="['bar2', { 'bar2-on': menuOpen }]"></i>
                <i :class="['bar3', { 'bar3-on': menuOpen }]"></i>
                <span :class="['open', { 'open-on': menuOpen }]">MENU</span>
                <span :class="['close', { 'close-on': menuOpen }]">CLOSE</span>
            </div>

            <nav>
                <ul class="menu">
                    <li>
                        <router-link to="/" exact-active-class="menuActive">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about" exact-active-class="menuActive">About</router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio" exact-active-class="menuActive">Portfolio</router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/contacts" exact-active-class="menuActive">Contacts</router-link>
                    </li> -->
                </ul>
            </nav>

        </div>
        <nav class="menu2" v-show="menuOpen">
            <div>
                <h1 class="logo">
                    <img alt="logo" :src="logo">
                </h1>
                <ul class="sub">
                    <li>
                        <router-link to="/" 
                            exact-active-class="menuActive" @click="closeMenu"><span>Home</span><span>回首頁</span></router-link>
                    </li>
                    <li class="sub-menu">
                        <router-link to="/about" 
                            exact-active-class="menuActive" @click="closeMenu"><span>About</span><span>關於我</span></router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio" 
                            exact-active-class="menuActive" @click="closeMenu"><span>Portfolio</span><span>作品集</span></router-link>
                        <ul class="sub-sub">
                            <li><router-link to="/portfolio#illustration" exact-active-class="menuActive" @click="closeMenu">插畫設計</router-link></li>
                            <li><router-link to="/portfolio#graphic" exact-active-class="menuActive" @click="closeMenu">平面設計</router-link></li>
                            <li><router-link to="/portfolio#website" exact-active-class="menuActive" @click="closeMenu">網頁設計</router-link></li>
                            <li><router-link to="/portfolio#frontend" exact-active-class="menuActive" @click="closeMenu">程式設計</router-link></li>
                        </ul>
                    </li>
                    <!-- <li>
                        <router-link to="/contacts" 
                            exact-active-class="menuActive" @click="closeMenu"><span>Contacts</span><span>聯繫我</span></router-link>
                    </li> -->
                </ul>
            </div>

        </nav>
    </header>

</template>
<script setup>
import logo from '@/assets/images/logo.png'
import { ref, watch } from 'vue';
const menuOpen = ref(false);
function toggleMneu() {
    menuOpen.value = !menuOpen.value
}
const closeMenu = () => {
  menuOpen.value = false
}

watch(menuOpen, (isOpen) => {
    if (isOpen) {
        document.body.classList.add('menu-open')
    } else {
        document.body.classList.remove('menu-open')
    }
})


// function toggleMenuBar() {
//     let bar1 = document.getElementById("bar1");
//     bar1.classList.toggle("bar1-on")
//     let bar2 = document.getElementById("bar2");
//     bar2.classList.toggle("bar2-on")
//     let bar3 = document.getElementById("bar3");
//     bar3.classList.toggle("bar3-on")
// }


</script>

<style scoped lang="scss">
header {
    max-width: 100%;
    padding: 15px 0px;
    box-shadow: 0px 10px 10px -5px rgba(62, 58, 57, 0.1);
}

header h1 {
    font-size: 0;
    padding-left: 15px;
}

.wrapper {
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
}


.menu {
    position: relative;
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    list-style: none;
    padding-right: 15px;
}

.menu li {
    width: calc(100% / 4);
    margin-left: 75px;
    position: relative;
    padding: 0px 8px;
}

.menu li>a {
    font-size: 18px;
    font-weight: bold;
    color: #3e3a39;
    word-break: keep-all;
}

.menu li>a:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 15px;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 10px;
    background: #ffc736;
    transform: scaleY(0);
    transform-origin: 50% 100%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
}

.menu li>a:hover:before,
.menu li>a.menuActive::before {
    transform: scaleY(1);
}



/*rwd*/
.rwd-bar {
    display: none;
    position: absolute;
    top: -5px;
    right: 0px;
    width: 80px;
    height: 80px;
    transition: 0.2s;
    cursor: pointer;
    margin: 15px 0px;
    z-index: 999;
    background: #ffffff;
    border-radius: 75px 0 0 75px;
}

.rwd-bar-on {
    box-shadow: 3px 3px 0 1px rgba(227, 222, 199, 1);
}

.rwd-bar i {
    position: absolute;
    left: 28px;
    width: 35px;
    height: 3px;
    background: #ffc736;
    border-radius: 3px;
    transition: all .3s;
}

.rwd-bar .open {
    display: block;
    position: absolute;
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    top: 48px;
    right: 12px;
}

.rwd-bar .close {
    display: none;
    position: absolute;
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    top: 48px;
    right: 12px;
}

.rwd-bar .open-on {
    display: none;
}

.rwd-bar .close-on {
    display: block;
}

.bar1 {
    width: 25px;
    top: 20px;
    left: 0;
}

.bar2 {
    width: 25px;
    top: 30px;
    left: 0;
}

.bar3 {
    width: 25px;
    top: 40px;
    left: 0;
}

.bar1-on {
    width: 25px;
    transform: translateY(8px) rotate(45deg);
}

.bar3-on {
    width: 25px;
    transform: translateY(-12px) rotate(-45deg);
}

.bar2-on {
    width: 0;
    display: none;
}

nav {
    position: relative;
}

.menu2 {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    background: #ffc736;
    width: 100%;
    height: 100%;
    padding: 15px;
    transition: all 0.3s;
}

.menu2>div {
    background: #ffffff;
    width: 100%;
    height: 100%;
    padding: 30px 25px;
    border-radius: 15px;

}

.menu2 h1 {
    text-align: center;
}

.menu2 .sub {
    margin-top: 30px;
}

.menu2 .sub>li>a {
    background: #fbf9f3;
    font-size: 16px;
    word-break: keep-all;
    padding: 15px;
    margin-bottom: 10px;
    display: block;
    border-radius: 10px;
}

.menu2 .sub>li>a:hover {
    background: #2965b0;
    color: #ffffff;
}

.menu2 .sub>li>a span {
    color: #3e3a39;
    font-weight: bold;
}

.menu2 .sub>li>a span:nth-of-type(2) {
    color: #807674;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;
}

.menu2 .sub>li>a:hover span,
.menu2 .sub>li>a:hover span:nth-of-type(2) {
    color: #ffffff;
}

.menu2 .sub-sub {
    margin-left: 30px;
}

.menu2 .sub-sub li a {
    position: relative;
}

.menu2 .sub-sub li>a::before{
    content: "";
    display: block;
    width: 12px;
    height: 2px;
    position: absolute;
    background: #ffc736;
    top: 50%;
    left: -15px;
    z-index: 999;
}

.menu2 .sub-sub li>a {
    background: none;
    font-size: 14px;
    color: #807674;
    word-break: keep-all;
    padding: 5px;
    margin-bottom: 10px;
    display: block;
    border-radius: 10px;
}

.menu2 .sub-sub li>a:hover {
    color: #2965b0;
}


:global(body.menu-open) {
    overflow: hidden !important;
}


@media (max-width:990px) {
    .b_main {
        display: block;
    }

    .rwd-bar {
        display: block;

    }

    .bar-bg {
        background: #ffffff;
        padding: 15px;
    }

    .menu {
        display: none;
    }

    .wrapper {
        display: block;
    }
}
</style>
