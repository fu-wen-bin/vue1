<template>
    <div class="home">
        <header class="header">
            <div class="comback" @click="comeBack">
                <van-icon name="arrow-left" size="20px" color="#333"></van-icon>
                <span>返回</span>
            </div>
            <div class="title">
                <span>认知功能及康复测试</span>
            </div>
        </header>
        <div class="home-left">
            <van-button class="button">
                客官心理评估表
            </van-button>
            <van-button class="button"> 
                (半)结构试问卷
            </van-button>
        </div>
        <div class="home-right">
            <van-button @click="toTest" class="button">
                知情者报告者表
            </van-button>
            <van-button class="button" @click="toOther">
                其他情况评估表
            </van-button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const toTest = () => {
    router.push('/Scaletest')
}
const comeBack = () => {
    router.push('/Scaletest')
}
const toOther = () => {
    router.push('/otherForm')
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

   
    .home-left,
    .home-right {
        position: absolute;
        top: 30%;
        transform: translateY(-50%);
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 100px;
        .button {
            font-size: 16px;
            color: #333;
            background-color: rgb(79, 147, 230);
            border: none;
        }
    }

    .home-left {
        left: 0;
    }
    .home-right {
        right: 0;
    }
    
}
</style>