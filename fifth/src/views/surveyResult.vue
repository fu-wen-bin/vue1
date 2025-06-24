<template>
    <div class="home">
        <header class="header">
            <div class="comback" @click="comeBack">
                <van-icon name="arrow-left" size="20px" color="#333"></van-icon>
                <span>返回</span>
            </div>
            <div class="title">
                <span>结果</span>
            </div>
        </header>
        <div class="result">
                <span>你的分数为:{{ result }}</span>
        </div>
    </div>
</template>

<script setup>
import { nodeAxios,javaAxios } from '../api/axios'
import { ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const route=useRoute()
const router=useRouter()
let result = ref(0)


onMounted(()=>{
    console.log(route.query);
    
    result.value=route.query.result;
})

const comeBack=()=>{
    router.go(-1)
}
</script>

<style lang="less" scoped>
// 定义颜色变量
@primary-bg: linear-gradient(135deg, #838efd 0%, #fad0c4 100%);
@secondary-bg: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
@particle-color: rgba(255, 255, 255, 0.5);
@animation-duration: 20s;

.home {
    min-height: 100vh;
    background: @primary-bg, @secondary-bg;
    background-blend-mode: overlay;
    position: relative;
    overflow: hidden;
    color: #333;
    display: flex;
    justify-content: center;


    .header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3em;
        background-color: transparent;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
        z-index: 100;
        box-sizing: border-box;
        padding: 0 15px;
        color: #333;

        .comback {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #333;
        }

        .title {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .result{
        margin-top: 7em;
        font-size: 20px;
        font-weight: bold;
    }
    
}
</style>