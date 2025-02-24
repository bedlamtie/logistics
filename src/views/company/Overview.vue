<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const type = computed(() => {
  if (route.query && typeof route.query.type === 'string') {
    return ['about', 'beauty', 'cooperation'].includes(route.query?.type) ? route.query?.type : 'about'
  }
  return 'about'
})

const active = ref(type.value)
watch(type, () => {
  active.value = type.value
})
</script>

<template>
  <div class="overview mb-12">
    <img src="/download/26.png" class="w-full" alt="">
    <div class="nav flex justify-center pt-3">
      <div class="nav-item " :class="{ active: active === 'about' }" @click="active = 'about'">公司概述</div>
      <div class="nav-item" :class="{ active: active === 'beauty' }" @click="active = 'beauty'">翼包裹风采</div>
      <div class="nav-item" :class="{ active: active === 'cooperation' }" @click="active = 'cooperation'">商务合作</div>
    </div>
    <div class="overview-content">
      <template v-if="active === 'about'">
        <div class="company mt-16">
          <div class="flex">
            <img class="flex-shrink-0 rounded-2xl" width="520px" height="320px" src="/download/24.png" alt="">
            <div class="w-full flex flex-col justify-center items-center text-2xl pl-1/6 tracking-wide leading-relaxed">
              苍鸾（广州）信息技术有限公司(简称翼包裹)，创立于2023年8月，是一家跨境物流服务公司，专业为海外华人华侨、留学生、跨境电商提供跨境物流的全方位服务解决方案;至今已服务过100w+客户，是跨境物流服务行业的开拓者和领航企业。
            </div>
          </div>
          <div class="flex flex-row-reverse mt-16">
            <img class="flex-shrink-0 rounded-2xl" width="520px" height="420px" src="/download/25.png" alt="">
            <div class="flex flex-col w-full">
              <div class="company-info-item">
                <div class="company-info-title">公司总部</div>
                <div class="flex items-center mb-8">
                  <div class="i-material-symbols:location-on-outline w-1em h-1em text-3xl" />
                  <div class="text-2xl ml-2">深圳市南山区南山街道自贸西街151号招商局前海经贸中心一期B座2201A</div>
                </div>
              </div>
              <div class="company-info-item">
                <div class="company-info-title">仓库地址</div>
                <div class="flex items-center mb-8">
                  <div class="i-material-symbols:location-on-outline w-1em h-1em text-3xl" />
                  <div class="text-2xl ml-2">广州市白云区黄石西路100号226室</div>
                </div>
              </div>
              <div class="company-info-item">
                <div class="company-info-title">联系电话</div>
                <div class="flex items-center mb-8">
                  <div class="i-material-symbols:phone-enabled w-1em h-1em text-3xl" />
                  <div class="text-2xl ml-2">19924618627</div>
                </div>
              </div>
              <div class="company-info-item">
                <div class="company-info-title">邮箱</div>
                <div class="flex items-center mb-8">
                  <div class="i-material-symbols:location-on-outline w-1em h-1em text-3xl" />
                  <div class="text-2xl ml-2">advice@weparcel.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="active === 'beauty'">
        <div class="beauty grid grid-cols-2 gap-8 pt-16">
          <img class="rounded-2xl" width="100%" height="385px" src="/download/10.png" alt="">
          <img class="rounded-2xl" width="100%" height="385px" src="/download/11.png" alt="">
          <img class="rounded-2xl" width="100%" height="385px" src="/download/12.png" alt="">
          <img class="rounded-2xl" width="100%" height="385px" src="/download/12-1.jpg" alt="">
        </div>
      </template>
      <template v-if="active === 'cooperation'">
        <div class="cooperation text-center mt-16">
          <img src="/download/27.jpg" width="900px" alt="">
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .overview {
    &-content {
      width: 1250px;
      margin: 0 auto;
    }

    .nav {
      margin-top: -4px;
      background-color: var(--primary-gray-color);

      &-item {
        --at-apply: "text-xl py-3 px-8 cursor-pointer";
        color: white;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        &:hover {
          color: white;
          background-color: var(--primary-bg-color);
          // opacity: 0.8;
        }
        &.active {
          color: var(--primary-gray-color);
          background-color: white;
          // background-color: var(--primary-bg-color);
        }
      }
    }

    .company {

      &-info-item {

        .company-info-title {
          --at-apply: "text-3xl mb-2 font-bold";
        }
      }
    }
  }
</style>
