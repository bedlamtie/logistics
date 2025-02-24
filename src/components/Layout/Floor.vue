<script setup lang="ts">
</script>

<template>
  <div class="floor h-[365px] min-w-[1350px]">
    <div class="floor-container">
      <div class="flex items-center" style="margin: 0 auto">
        <img src="/download/13.png" width="80px" height="77px" alt="">
        <div class="ml-4 text-5xl line-height-none color-[var(--primary-bg-color)]" style="color: #FFFFFF">翼包裹</div>
      </div>
      <div class="flex">
        <div class="flex-shrink-0 overflow-hidden  color-white">
          <div class="flex mt-8">
            <div class="i-material-symbols:location-on-outline w-1em h-1em color-white text-3xl" />
            <div class="ml-4 text-base">
              <p>公司总部: 广东省广州市白云区黄石西路100号坤鸿商务226室</p>
              <p>地址: 深圳市南山区南山街道自贸西街151号招商局前海经贸中心一期B座2201A</p>
            </div>
          </div>
          <div class="flex mt-4 items-center">
            <div class="i-material-symbols:phone-enabled w-1em h-1em color-white text-3xl" />
            <div class="ml-4 text-base">
              <p>Tel: 19924618627</p>
            </div>
          </div>
          <div class="flex mt-4 items-center">
            <div class="i-material-symbols:mail-outline-rounded w-1em h-1em color-white text-3xl" />
            <div class="ml-4 text-base">
              <p>Email: advice@weparcle.cn</p>
            </div>
          </div>
        </div>
        <div class="w-5/10 ml-30 flex">
          <div class="w-full flex flex-col items-end gap-3 color-[var(--primary-bg-color)]" style="color: #FFFFFF">
            <p class="cursor-pointer underline">首页</p>
            <p class="cursor-pointer underline">资讯</p>
            <p class="cursor-pointer underline">大货查询</p>
            <p class="cursor-pointer underline">关于我们</p>
          </div>
          <div class="w-full flex flex-col items-end gap-3 color-white color-op-40" style="color: #FFFFFF">
            <p class="cursor-pointer">我要集运</p>
            <p class="cursor-pointer">物流查询</p>
            <p class="cursor-pointer">运费查询</p>
            <p class="cursor-pointer">途径展示</p>
            <p class="cursor-pointer">帮助中心</p>
          </div>
          <div class="w-full flex flex-col items-end">
            <img src="/download/08.jpg" width="140px" height="140px" alt="">
            <div class="w-35 text-center text-white mt-2">关注公众号</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-center text-sm color-white text-op-40" style="color: #FFFFFF">Copyright © 2016 Weparcel. All Rights Reserved.<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2023103271号</a></div>
  </div>
</template>

<style lang="scss" scoped>
.floor {
  background-color: var(--primary-gray-color);
  padding: 40px 0;

  p {
    margin: 0
  }

  &-container {
    width: 1350px;
    margin: 0 auto;
  }
}
</style>
