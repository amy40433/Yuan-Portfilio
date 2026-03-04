<template>
    <header>
        <div class="wrapper">
            <h1 class="logo">
                <img alt="logo" :src="logo">
            </h1>
                <div class="rwd-bar" @click="toggleMneu">
                    <i :class="['bar1', { 'bar1-on': MenuOpen }]"></i>
                    <i :class="['bar2', { 'bar2-on': MenuOpen }]"></i>
                    <i :class="['bar3', { 'bar3-on': MenuOpen }]"></i>
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
                    <li>
                        <router-link to="/contacts" exact-active-class="menuActive">Contacts</router-link>
                    </li>
                </ul>
            </nav>

        </div>
        <ul class="menu2">
            <li>
                <router-link to="/" exact-active-class="menuActive">Home</router-link>
            </li>
            <li class="sub_menu">
            <li>
                <router-link to="/about" exact-active-class="menuActive">About</router-link>
            </li>
            <ul class="sub_sub">
                <li></li>
                <li><a href="#">第二層選單</a></li>
                <li><a href="#">第二層選單</a></li>
                <li><a href="#">第二層選單</a></li>
            </ul>
            </li>
            <li>
                <router-link to="/portfolio" exact-active-class="menuActive">Portfolio</router-link>
            </li>
            <li>
                <router-link to="/contacts" exact-active-class="menuActive">Contacts</router-link>
            </li>
        </ul>

    </header>

</template>
<script setup>
import logo from '@/assets/images/logo.png'
import { ref } from 'vue';
const MenuOpen = ref(false);
function toggleMneu() {
    MenuOpen.value = !MenuOpen.value
}

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
    width: 40px;
    height: 30px;
    transition: 0.2s;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 10px;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 0px;
    z-index: 999;
}

.rwd-bar i {
    width: 100%;
    height: 3px;
    position: absolute;
    background: #3e3a39;
    border-radius: 2px;
    transition: .2s;
}

.bar1 {
    width: 25px;
    top: 0;
    left: 0;
}

.bar2 {
    width: 25px;
    top: 13px;
    left: 0;
}

.bar3 {
    width: 25px;
    top: 26px;
    left: 0;
}

.bar1-on {
    width: 25px;
    transform: translateY(14px) rotate(45deg);
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
    position: absolute;
    top: 0px;
    z-index: 1;
    background: #ffc736;
    width: 100%;
    height: 100%;
    padding: 20px;
    display:none
}


.menu2 li>a {
    font-size: 16px;
    color: #3e3a39;
    word-break: keep-all;

}

@media (max-width:990px) {

    .b_main {
        display: block;
    }

    .rwd-bar {
        display: flex;
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
