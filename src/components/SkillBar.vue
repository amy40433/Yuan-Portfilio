<template>
    <div class="skill-bar">
        <div class="label">
            <!-- skill軟體名稱 -->
            <span>{{ label }}</span>
            <!-- %數 -->
            <span>{{ displayPercent }}%</span>

        </div>
    </div>
    <div class="bar">
        <div class="bar-full" :style="{ width: displayPercent + '%' }"></div>
    </div>
</template>
<script setup>

import { ref, onMounted } from 'vue';
const props = defineProps({
    label: String,
    percent: Number
})
const displayPercent = ref(0)
onMounted(() => {
    setTimeout(() => {
        const add = setInterval(() => {
            if (displayPercent.value < props.percent) {
                displayPercent.value++
            } else {
                clearInterval(add)
            }
        }, 15)// 每 15ms 加 1%，可自行調整速度
    }, 2000)

})

</script>
<style scoped lang="scss"></style>