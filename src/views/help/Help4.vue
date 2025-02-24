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
</script>

<template>
  <div class="news-details">
    <div class="breadcrumbs py-8 flex items-center text-lg color-black color-op-60">
      <RouterLink to="/news">
        <span class="color-black font-bold cursor-pointer hover:color-[var(--primary-bg-color)]">我要寄件</span>
      </RouterLink>
      <div class="i-bi:chevron-right w-1em h-1em inline-block px-4" />
      <span>运费查询</span>
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
          <div class="content-title text-2xl text-center pt-8 " style="font-size: 25px;">海运到门价格表-不计体积</div>
          <div class="content-title text-2xl text-center pb-4" style="font-size: 15px; color: #afafaf">Price Introduction</div>
          <div class="w-full" style="overflow: hidden" >
              <img src="/download/51.jpg" width="860">
          </div>
          <div class="content-title text-2xl text-center pt-8 " style="font-size: 25px;">澳洲空运到门价格表</div>
          <div class="content-title text-2xl text-center pb-4" style="font-size: 15px; color: #afafaf">Price Introduction</div>
          <div class="w-full" style="overflow: hidden" >
            <img src="/download/52.jpg" width="860">
          </div>
          <div class="content-title text-2xl text-center pt-8 " style="font-size: 25px;">悉尼-墨尔本拼柜包税自提价格表</div>
          <div class="content-title text-2xl text-center pb-4" style="font-size: 15px; color: #afafaf">Price Introduction</div>
          <div class="w-full" style="overflow: hidden" >
            <img src="/download/53.jpg" width="860">
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
