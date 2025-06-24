<template>
    <div class="home">
        <header class="header">
            <div class="comback" @click="comeBack">
                <van-icon name="arrow-left" size="20px" color="#333"></van-icon>
                <span>返回</span>
            </div>
            <div class="title">
                <span>量表测试</span>
            </div>
        </header>
        <div class="content">
            <div class="top-button">
                <van-button type="success" size="large" @click="toCognition">痴呆及认知障碍测试表</van-button>
            </div>
            <div class="bottom-button">
                <van-button type="success" size="large">评定表(试用)</van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const comeBack = () => {
    router.push('/home')
}
const toCognition = () => {
    router.push('/cognition')
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

    .content {
        margin-top: 6em;


        .top-button {
            width: 90%;
            margin: 0 auto;

        }
        .bottom-button {
            width: 90%;
            margin: 0 auto;
            margin-top: 2em;
        }
    }
   
    
    
}
</style>