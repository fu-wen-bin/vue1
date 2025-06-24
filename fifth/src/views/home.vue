<template>
  <div class="firstPage" style="width: 100%;">
    <header class="header">
      <div class="comback">
        <van-icon name="arrow-left" size="20px" color="#333"></van-icon>
        <span>返回</span>
      </div>

    </header>
    <h1 class="h1-title" style="width: 100%;">佰和护理中心</h1>
      <div class="firstPage-left">
        <van-button type="danger">
          客户中心
        </van-button>
        <van-button type="primary" style="background-color: blue;">
          情感聊天
        </van-button>
      </div>
      <div class="firstPage-center">
        <van-button type="primary" class="dataAnalysis" @click="assistantAI">
          AI辅助<br>数据分析
        </van-button>
      </div>
      <div class="firstPage-right">
        <van-button type="success" @click="toTest">
          量表测试
        </van-button>
        <van-button type="warning">
          休闲娱乐
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

const assistantAI = () => {
  router.push('/Aiassisted')
}
</script>

<style lang="less" scoped>
// 定义颜色变量
@primary-color: #667eea;
@secondary-color: #764ba2;
@accent-color: #f093fb;
@success-color: #4facfe;
@warning-color: #43e97b;
@danger-color: #fa709a;
@text-primary: #2d3748;
@text-secondary: #718096;
@white: #ffffff;
@shadow-light: 0 4px 20px rgba(102, 126, 234, 0.15);
@shadow-medium: 0 8px 30px rgba(102, 126, 234, 0.2);
@shadow-heavy: 0 15px 50px rgba(102, 126, 234, 0.25);

.content {
  display: flex;
  overflow: hidden;
  // 水平居中
  justify-content: center;
  // 垂直居中
  align-items: center;
}

.firstPage {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  padding: 0;

  // 添加动态背景粒子效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120vh;
    background-image: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
    animation: float 6s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    box-shadow: @shadow-light;
    z-index: 100;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .comback {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: @text-primary;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 8px 12px;
      border-radius: 12px;

      &:hover {
        background: rgba(102, 126, 234, 0.1);
        transform: translateX(-2px);
      }

      span {
        margin-left: 8px;
      }
    }

    .title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      font-weight: 600;
      color: @text-primary;
      background: linear-gradient(135deg, @primary-color, @secondary-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .h1-title {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: 700;
    color: @white;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 10;
    letter-spacing: 2px;
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, @accent-color, @success-color);
      border-radius: 2px;
      box-shadow: 0 2px 10px rgba(240, 147, 251, 0.5);
    }
  }

  .firstPage-left,
  .firstPage-center,
  .firstPage-right {
    position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
  }

  .firstPage-left {
    left: 0;
  }

  .firstPage-center {
    
    left: 33.33%;
        
    .dataAnalysis {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, @primary-color, @secondary-color);
      border: none;
      color: @white;
      font-size: 16px;
      font-weight: 600;
      box-shadow: @shadow-heavy;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s;
      }

      &:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);

        &::before {
          left: 100%;
        }
      }

      &:active {
        transform: translateY(-4px) scale(1.02);
      }
    }
  }

  .firstPage-right {
    right: 0;
  }

  // 统一按钮样式
  :deep(.van-button) {
    height: 60px;
    width: 140px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    box-shadow: @shadow-medium;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    &:hover {
      transform: translateY(-4px);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-2px);
    }

    // 不同类型按钮的特定样式
    &--danger {
      background: linear-gradient(135deg, @danger-color, #fe6b8b);
      color: @white;

      &:hover {
        box-shadow: 0 12px 40px rgba(250, 112, 154, 0.4);
      }
    }

    &--primary {
      background: linear-gradient(135deg, @primary-color, @secondary-color);
      color: @white;

      &:hover {
        box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
      }
    }

    &--success {
      background: linear-gradient(135deg, @success-color, #00f2fe);
      color: @white;

      &:hover {
        box-shadow: 0 12px 40px rgba(79, 172, 254, 0.4);
      }
    }

    &--warning {
      background: linear-gradient(135deg, @warning-color, #38f9d7);
      color: @white;

      &:hover {
        box-shadow: 0 12px 40px rgba(67, 233, 123, 0.4);
      }
    }
  }
}
</style>