<template>
    <div class="society">
        <header class="header">
            <div class="comback" @click="comeBack">
                <van-icon name="arrow-left" size="20px" color="#333"></van-icon>
                <span>返回</span>
            </div>
            <div class="title">
                <span>社区功能活动问卷</span>
            </div>
        </header>
        <div class="content">
            <div class="question">
                <div class="question-title">
                    <span>{{ count+1 }}.</span>
                    <span>{{ questions[count].question }}</span>
                </div>
            </div>
            <div class="answer">
                <div 
                    class="answer-item" 
                    v-for="(optio, index) in questions[count].option" 
                    :key="index"
                >
                    <input 
                        type="radio" 
                        :value="optio.weight" 
                        :id="'radio' + index" 
                        v-model="selectedAnswer"
                        name="timu"
                        class="radio-input"
                    >
                    <label :for="'radio' + index" class="label" @click="addAnswer">
                        <div class="radio-custom" :class="{ 'checked': selectedAnswer === optio .weight }"></div>
                        <span>{{ optio.weight }}分:{{ optio.name }}</span>
                    </label>
                </div>
            </div>
            <div class="submit">
                    <input type="button" value="上一题" class="toLastQuestion" @click="toLastQuestion" v-if="count>0">
                    <input type="button" value="下一题" class="toNextQuestion" @click="toNextQuestion" v-if="count<questions.length-1">
                    <input type="button" value="提交问卷" class="toNextQuestion" @click="submitQuestion" v-if="count==questions.length-1">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { nodeAxios,javaAxios } from '../api/axios'
import { showToast } from 'vant';
import router from '../router';

javaAxios.get('/Faq/GetFaqs').then(res => { 
    questions.value = res.data;
})
const questions = ref([
    {
        question: "你对社区活动的满意度如何？",
    }
]);
const question = ref({});
// const questions = ref([
//     {
//         id: 1,
//         title: "你对社区活动的满意度如何？",
//         options: [
//             { score: '0', label: '非常满意' },
//             { score: '1', label: '比较满意' },
//             { score: '2', label: '一般' },
//             { score: '3', label: '不太满意' },
//         ]
//     },
//     {
//         id: 2,
//         title: "你对社区活动的满意度如何？",
//         options: [
//             { score: '0', label: '非常满意' },
//             { score: '1', label: '比较满意' },
//             { score: '2', label: '一般' },
//             { score: '3', label: '不太满意' },
//         ]
//     },
//     {
//         id: 3,
//         title: "你对社区活动的组织方式有何建议？",
//         options: [
//             { score: '0', label: '非常满意' },
//             { score: '1', label: '比较满意' },
//             { score: '2', label: '一般' },
//             { score: '3', label: '不太满意' },
//         ]
//     },
// ])

const count = ref(0)
const selectedAnswer = ref(null)
const answers = ref([])

const toLastQuestion = () => {
    if (count.value > 0) {
        // 先保存当前答案
        if (selectedAnswer.value !== null) {
            answers.value[count.value] = selectedAnswer.value;
            questions.value[count.value].optionIndex=selectedAnswer.value;
            console.log(questions.value)
        }else{
            questions.value[count.value].optionIndex=null;
        }
        --count.value;
        selectedAnswer.value = answers.value[count.value] || null;
    }
}

const toNextQuestion = () => {
    if (count.value < questions.value.length - 1) {
        // 先保存当前答案
        if (selectedAnswer.value !== null) {
            answers.value[count.value] = selectedAnswer.value;
            questions.value[count.value].optionIndex=selectedAnswer.value;
            console.log(questions.value)
        }else{
            questions.value[count.value].optionIndex=null;
        }
        ++count.value;
        selectedAnswer.value = answers.value[count.value] || null;
    }
}
const addAnswer = () => {
    answers.value[count.value] = selectedAnswer.value;
}

const comeBack = () => {
    history.back();
}

const result=ref()
const submitQuestion = () => {
    javaAxios.post('/Faq/submit',questions.value).then(res => {
        showToast('提交成功', { duration: 1000 })
        result.value=res.data
        console.log(result.value)
        router.push({path:'/surveyResult',query:{result:res.data}})
    })
}

</script>

<style lang="less" scoped>
// 定义颜色变量
@primary-bg: linear-gradient(135deg, #838efd 0%, #fad0c4 100%);
@secondary-bg: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
@particle-color: rgba(255, 255, 255, 0.5);
@animation-duration: 20s;
@primary-color: #1989fa;
@checked-color: #1989fa;

.society {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
        margin-top: 3em;
        flex: 1;
        width: 100%;
        padding: 20px 15px;
        box-sizing: border-box;

        .question {
            margin-bottom: 20px;
            font-weight: bold;
        }

        .answer {
            margin-left: 20%;

            .answer-item {
                height: 2em;
                margin-bottom: 1em;
                font-size: 14px;            
                position: relative;
                display: flex;
                align-items: center;

                .radio-input {
                    position: absolute;
                    opacity: 0;
                    width: 0;
                    height: 0;
                    
                    &:focus + .label .radio-custom {
                        box-shadow: 0 0 0 2px rgba(@primary-color, 0.3);
                    }
                }

                .label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                    padding-left: 25px;
                    position: relative;
                    height: 100%;
                    width: 100%;

                    &:hover .radio-custom {
                        border-color: @primary-color;
                    }
                }

                .radio-custom {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width:1em;
                    height: 1em;
                    border: 1px solid #333;
                    border-radius: 50%;
                    transition: all 0.2s;
                    
                    &::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 0.5em;
                        height: 0.5em;
                        border-radius: 50%;
                        background-color: transparent;
                        transition: all 0.2s;
                    }

                    &.checked {
                        border-color: @checked-color;
                        background-color: @checked-color;
                        
                        &::after {
                            background-color: white;
                        }
                    }
                }
            }
            
        }

        .submit{
            width: 100%;
            height: 2.5em;
            margin-top: 1em;

            .toLastQuestion, .toNextQuestion {
                width: 45%;
                height: 100%;
                background-color: @primary-bg;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                color:#333;
                font-weight: bold;
                background-color: #5ba6f0;
                border-radius: 5px;
                box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
            }
            .toLastQuestion{
                float: left;
            }
            .toNextQuestion{
                float: right;
            }
        }
    }
}
</style>