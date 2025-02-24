<script setup lang="ts">
import { useRoute } from 'vue-router'

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

const route = useRoute()
const message = ref('')
if (route.params && route.params.id) {
  // TODO
}
else {
  // message.value = '参数错误'
}

const newsInfo = reactive({
  title: '我需要转运应该怎么做',
  date: '2020-08-08 00:00:00',
  exposure: 2342,
  content: `<img src="/download/30.png" width="100%" />`,
})
</script>

<template>
  <div class="news-details">
    <div class="breadcrumbs py-8 flex items-center text-lg color-black color-op-60">
      <RouterLink to="/news">
        <span class="color-black font-bold cursor-pointer hover:color-[var(--primary-bg-color)]">我要寄件</span>
      </RouterLink>
      <div class="i-bi:chevron-right w-1em h-1em inline-block px-4" />
      <span>下单流程</span>
    </div>
    <template v-if="message">
      <div class="error h-100 flex flex-col items-center justify-center color-black color-op-60">
        <div class="i-bi:exclamation-triangle w-1em h-1em text-6xl" />
        <div class="mt-4">{{ message }}</div>
      </div>
    </template>
    <template v-else>
      <div class="news-content">
        <div class="content">
          <div class="content-title text-2xl text-center pt-8 " style="font-size: 25px;">{{ newsInfo.title }}</div>
          <div class="content-title text-2xl text-center pb-4" style="font-size: 15px; color: #afafaf">What should I do if I need to transfer</div>
          <div class="w-full" >
            <div style="margin-bottom: 30px; text-indent: 2em; font-size: 15px;">    翼包裹集运目前为您提供了从中国到澳洲/美国/欧洲的集运服务。您可以在中国大陆任意购物 (实体门店或电商平台)，只需将购买的商品集中到翼包裹集运为您提供的专属仓库，翼包裹集运即可为您验货打包处理后，通过我们合作的自营专线物流渠道，派送到海外您指定的目的地。</div>
            <div class="content-box-title">STEP.01 联系客服，寄货到仓</div>
            <div class="transfer-step-row-content">
                <div><img src="/download/31.png" draggable="false"></div>
                <div class="transfer-step-row-content-rg">联系我们微信客服，获取您的专属仓库，您购物时将收件地址改成专属仓库地址，就可以随时开启跨境购物之旅啦</div>
            </div>

            <div class="content-box-title">STEP.02 货品到齐，申请打包</div>
            <div class="transfer-step-row-content">
              <div><img src="/download/32.png" draggable="false"></div>
              <div class="transfer-step-row-content-rg">联系我们微信客服，获取您的专属仓库，您购物时将收件地址改成专属仓库地址，就可以随时开启跨境购物之旅啦</div>
            </div>

            <div class="content-box-title">STEP.03 核对内件，支付运费</div>
            <div class="transfer-step-row-content">
              <div><img src="/download/33.png" draggable="false"></div>
              <div class="transfer-step-row-content-rg">发货前客服会跟您确认国外收货地址信息，然后帮您核对货物，核对好货物帮您去除快递装，纸箱等多余的包装重量，物品码放整齐，打包方正。并拍照承重，计算运费。您确认好没问题再支付运费，接着安排国际运输</div>
            </div>

            <div class="content-box-title">STEP.04 包裹到达，派送到家</div>
            <div class="transfer-step-row-content">
              <div><img src="/download/34.png" draggable="false"></div>
              <div class="transfer-step-row-content-rg">给到您运输单号，根据物流单号和查询网址，您就可以查询跟踪到包裹的物流记录, 包裹到达目的国后，会由当地派送服务商进行派送到门 </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.content-box-title{
  font-size: 25px;
  color: #afafaf;
}
.transfer-step-row-content{
  background-color: #fff;
  border-radius: 6px;
  padding: 17px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.transfer-step-row-content-rg{
  text-indent: 2em;
}


.news-details {
  width: 1300px;
  margin: 0 auto;

  .news-content {
    --at-apply: "bg-black bg-op-3 p-8 rounded-2xl";
    width: 1000px;
    margin: 0 auto;
    min-height: 40vh;
    > .content {
      --at-apply: "bg-white p-8";
      min-height: calc(40vh - 64px);
    }
  }
}
</style>
