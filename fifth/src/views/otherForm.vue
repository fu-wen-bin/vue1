<template>
    <div class="home">
        <header class="header">
            <div class="comback" @click="comeBack">
                <van-icon name="arrow-left" size="20px" color="#333"></van-icon>
                <span>返回</span>
            </div>
            <div class="title">
                <span>其他情况评估表</span>
            </div>
        </header>
        <section class="home-body">
            <van-button>社会功能缺陷筛查表(SDSS)</van-button>
            <van-button @click="toSociety">社会功能活动问卷(FAQ)</van-button>
            <van-button @click="toMmse">汉密尔顿焦虑量表(HAMA)</van-button>
            <van-button>汉密尔顿抑郁量表3月(HAMD)</van-button>
            <van-button>匹兹堡睡眠质量指数表(PSQI)</van-button>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const comeBack = () => {
    router.push('/cognition')
}
const toOther = () => {
    router.push('/otherForm')
}
const toSociety=()=>{
    router.push('/society')

}
const toMmse=()=>{
    router.push('/mmse')
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
    .home-body {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 3em);

        .van-button {
            margin: 10px 0;
            width: 90%;
            max-width: 300px;
            background-color: rgb(79, 147, 230);
        }
    }
    
}
</style>