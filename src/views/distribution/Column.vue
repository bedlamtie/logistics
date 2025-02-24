<template>
  <div class="column mb-12">
    <img src="/download/16.png" class="w-full" alt="">
    <div class="column-content mt-12">
      <div class="text-4xl m-8 ml-0 pl-6 border-l-6 border-l-solid border-l-[var(--primary-bg-color)]">翼包裹集运</div>
      <div class="flex flex-col gap-8 mt-12">
        <div class="relative rounded-2xl">
          <div class="text">空运</div>
          <img src="/download/20.png" alt="">
        </div>
        <div class="relative rounded-2xl">
          <div class="text">海运</div>
          <img src="/download/21.png" alt="">
        </div>
        <div class="relative rounded-2xlj">
          <div class="text">陆运</div>
          <img src="/download/22.png" alt="">
        </div>
        <div class="relative rounded-2xl">
          <div class="text">包税服务</div>
          <img src="/download/23.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .column {
    &-content {
      width: 1250px;
      margin: 0 auto;
    }

    .text {
      --at-apply: "pos-absolute text-2xl p-4";
    }
  }
</style>
