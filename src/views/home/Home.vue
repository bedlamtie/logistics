<script setup lang="ts">
import { useElementSize } from '@vueuse/core'

const bannerList = ['./banner1.jpg', './banner2.jpg']

const carousel = ref()
const { width } = useElementSize(carousel)
const bannerHeight = computed(() => width.value * 0.445)
</script>

<template>
  <div class="flex-col justify-center mb-12">
    <div ref="carousel" class="w-full">
      <el-carousel :height="`${bannerHeight}px`" motion-blur>
        <el-carousel-item v-for="item in bannerList" :key="item" height="100%">
          <img class="w-full h-full object-cover" :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="middle-container">
      <div class="h-60 flex flex-col items-center justify-center">
        <em class="text-6xl font-bold tracking-widest">
          <span class="primary-bg-color">翼包裹</span>
          <span>集运</span>
        </em>
        <div class="mt-2 tracking-widest text-lg color-black text-op-40">
          <span>WEPARCEL</span>
          <span class="pl-10">LOGISTICS</span>
        </div>
      </div>
      <div class="card-container pb-16">
        <div class="card  bg-white flex flex-col">
          <img class="card-img" src="/download/04.png" alt="" width="100%">
          <div class="card-content">
            <p>最快三天，带你转运全球！</p>
            <p>所在国偏远? 跨境速度慢? 包装重量多?</p>
            <p>
              翼包裹支持全球集运转运服务，全球最快3天达!
              翼包裹提供拆包装箱服务，为你每一笔运费精打细算!
            </p>
          </div>
          <div class="flex-shrink-0 text-center mt-auto mb-6">
            <router-link to="/help2">
              <el-button type="primary" round class="card-btn">
                <span class="primary-color">快速集运</span>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="card  bg-white flex flex-col">
          <img class="card-img" src="/download/05.png" alt="" width="100%">
          <div class="card-content">
            <p>专线服务</p>
            <p>货物特殊，时效不够快？想要迅速发货？</p>
            <p>
              翼包裹集运 欧、美、澳专线告诉你什么是更快，更广，更安全稳定!
            </p>
          </div>
          <div class="flex-shrink-0 text-center mt-auto mb-6">
            <router-link to="/distribution-details">
              <el-button type="primary" round class="card-btn">
                <span class="primary-color">了解专线</span>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="card  bg-white flex flex-col">
          <img class="card-img" src="/download/06.png" alt="" width="100%">
          <div class="card-content">
            <p>24小时响应</p>
            <p>经常影响沟通？咨询无法快速回复？</p>
            <p>
              翼包裹客服24小时快速响应，让你我再无时差
            </p>
          </div>
          <div class="flex-shrink-0 text-center mt-auto mb-6">
            <router-link to="/help3">
              <el-button type="primary" round class="card-btn">
                <span class="primary-color">联系客服</span>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="card  bg-white flex flex-col">
          <img class="card-img" src="/download/07.png" alt="" width="100%">
          <div class="card-content">
            <p>优惠不断</p>
            <p>购物节快递特价？节假日拼团打折？<br>在这里全都有</p>
            <p>
              关注翼包裹公众号，更多优惠送不停
            </p>
          </div>
          <div class="flex-shrink-0 text-center mt-auto mb-6">
            <el-popover placement="top" :width="200" trigger="click">
              <template #reference>
                <el-button type="primary" round class="card-btn">
                  <span class="primary-color">关注翼包裹</span>
                </el-button>
              </template>
              <img src="/download/08.jpg" width="180" height="180" alt="">
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <div class="new-list pt-6">
      <div class="mt-8">
        <div class="w-70 text-2xl font-bold pb-1" un-border-b="8px solid [var(--primary-bg-color)]">
          集运海外解决方案
        </div>
        <div class="text-right text-size-base py-8 cursor-pointer">
          <!--          查看更多资讯 > -->
        </div>
        <div class="flex">
          <div
            class="detail-item-row"
            style="width: 100%; justify-content: space-between; padding-bottom: 70px; flex-wrap: wrap;"
          >
            <div class="detail-item-row-item way-box">
              <div class="way-img"><img src="/download/wayone.png" width="260" height="205" draggable="false"></div>
              <div class="way-tit">淘宝集运海外</div>
              <div class="way-sub">把淘宝网的包裹通过邮多多集运至海外</div>
            </div>
            <div class="detail-item-row-item way-box">
              <div class="way-img"><img src="/download/waytwo.png" width="260" height="205" draggable="false"></div>
              <div class="way-tit">京东集运海外</div>
              <div class="way-sub">京东包裹集运转运至海外全球</div>
            </div>
            <div class="detail-item-row-item way-box">
              <div class="way-img"><img src="/download/waythree.png" width="260" height="205" draggable="false"></div>
              <div class="way-tit">小商品运海外</div>
              <div class="way-sub">拼多多的包裹集运转运至海外</div>
            </div>
            <div class="detail-item-row-item way-box">
              <div class="way-img"><img src="/download/wayfour.png" width="260" height="205" draggable="false"></div>
              <div class="way-tit">亲友寄包裹</div>
              <div class="way-sub">国内亲友,邮寄国内包裹到海外</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div class="w-70 text-2xl font-bold pb-1" un-border-b="8px solid [var(--primary-bg-color)]">
          翼包裹邮寄物品展示
        </div>
        <div class="text-right text-size-base py-8 cursor-pointer">
          <!--          查看更多资讯 > -->
        </div>
        <div class="flex">
          <div class="goods-show-row" style="width: 100%; flex-wrap: wrap; display: flex;">
            <div class="goods-img-wrap">
              <div class="goods-pic"> <img src="/download/goods1.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">服装/鞋子</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods2.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">零食</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods3.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">化妆品</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods4.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">图书</div>
            </div>

            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods5.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">手机</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods6.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">手机配件</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods7.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">小家电</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods8.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">药品</div>
            </div>

            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods9.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">碗筷</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods10.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">调料</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods11.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">建材</div>
            </div>
            <div class="goods-img-wrap">
              <div class="goods-pic"><img src="/download/goods2.png" width="330" height="205" draggable="false"></div>
              <div class="goods-mask">家居</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-24">
        <div class="w-35 text-2xl font-bold pb-1" un-border-b="8px solid [var(--primary-bg-color)]">
          翼包裹风采
        </div>
        <div class="text-right text-size-base py-8 cursor-pointer">
          了解更多翼包裹 >
        </div>
        <div class="flex gap-8 h-72 overflow-hidden">
          <div class="w-full">
            <img class="w-full h-full rounded-xl" src="/download/10.png" alt="">
          </div>
          <div class="w-full">
            <img class="w-full h-full rounded-xl" src="/download/11.png" alt="">
          </div>
          <div class="w-full">
            <img class="w-full h-full rounded-xl" src="/download/12.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail-item {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  box-sizing: border-box;
}

.detail-item-row-item {
  max-width: 390px;
  min-height: 213px;
  border-radius: 6px;
  position: relative;
}

.way-img {
  width: 260px;
  height: 200px;
}

.way-box {
  width: 260px;
  float: left;
  margin-right: 60px;
}

.way-tit {
  font-size: 19px;
  color: #333;
  margin-top: 5px;
  text-align: center;
}

.way-sub {
  font-size: 15px;
  color: #333;
  text-align: center;
}

.goods-img-wrap {
  width: 330px;
  height: 205px;
  position: relative;

  .goods-mask {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 21px;
    opacity: 0;
  }

  &:hover .goods-mask {
    opacity: 1;
  }
}

.goods-pic {
  width: 330px;
  height: 205px;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.primary-bg-color {
  color: var(--primary-bg-color);
}

.middle-container {
  background-image: url('/content-bg.png');
}

.card-container {
  --at-apply: "flex justify-between relative px-8";
  transition: all .3s ease-in-out;
  margin: 0 auto;

  .card {
    --at-apply: "overflow-hidden";
    transition: all .3s ease-in-out;
    width: 420px;
    height: 552px;
    color: var(--primary-color);
    border: 1px solid var(--primary-bg-color);
    border-radius: 20px;
    box-shadow: 1px 1px 8px #888;

    .card-img {
      transition: all .3s ease-in-out;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 7px 15px 0px var(--primary-gray-color);

      .card-img {
        transform: scale(1.1);
      }

      .card-content {
        transform: translateY(10px);
        color: var(--primary-bg-color);
      }
    }

    .card-content {
      transition: all .3s ease-in-out;
      color: #262626;
      text-align: center;

      p {
        margin: 0;
      }

      p:nth-child(1) {
        letter-spacing: 0;
        font-size: 30px;
        margin-top: 25px;
        font-weight: 600;
        padding-left: 10px;
        transform: translateY(0);
      }

      p:nth-child(2) {
        font-size: 20px;
        margin-top: 20px;
        font-weight: 700;
      }

      p:nth-child(3) {
        font-size: 16px;
        padding: 25px;
        color: #3c3c3c;
      }
    }

    .card-btn {
      width: 70%;
      font-size: 16px;
      height: 42px;
    }
  }
}

.new-list {
  border-top: 1px solid #0000002e;
  width: 1350px;
  margin: 0 auto;
}

@media screen and (max-width: 1780px) {
  .card-container {
    width: 1350px;
    height: 552px;
    padding: 0 3px;

    .card {
      width: 322px;
      height: 424px;

      .card-content {
        p:nth-child(1) {
          letter-spacing: 0;
          font-size: 21px;
          margin-top: 14px;
          font-weight: 600;
          padding-left: 10px;
        }

        p:nth-child(2) {
          font-size: 17px;
          margin-top: 10px;
          padding: 0 2px;
        }

        p:nth-child(3) {
          font-size: 15px;
          padding: 11px;
        }
      }

      .card-btn {
        font-size: 14px;
        height: 32px;
      }
    }
  }
}
</style>
