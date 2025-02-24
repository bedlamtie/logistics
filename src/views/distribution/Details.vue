<template>
  <div class="details mb-12">
    <img src="/download/16.png" class="w-full" alt="">
    <div class="details-content mt-12">
      <div class="text-4xl m-8 ml-0 pl-6 border-l-6 border-l-solid border-l-[var(--primary-bg-color)]">翼包裹自营专线</div>
      <div class="module flex gap-8">
        <div class="w-full">
          <div class="module-title flex mb-2">
            <div class="border-r-2 border-r-solid border-r-black pr-6 text-3xl line-height-none">澳大利亚自营专线</div>
            <el-button type="primary" round class="ml-6" size="large">
              <span class="primary-color text-base">点击查询专线航班表</span>
            </el-button>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">预计时效:</div>
            <div class="text-base ml-2 mt-1">每周固定直飞悉尼和墨尔本，最快7天可签收</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">易清关:</div>
            <div class="text-base ml-2 mt-1">自营清关，通关快，翼包裹包税</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">品类广:</div>
            <div class="text-base ml-2 mt-1">无人机/化妆品/口罩/二三线国际品牌/国潮等普货均可出</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">时效稳:</div>
            <div class="text-base ml-2 mt-1">每周最少4趟航班直飞悉尼、墨尔本</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">无死角:</div>
            <div class="text-base ml-2 mt-1">自营小包、自营卡派、澳邮派送无死角</div>
          </div>
        </div>
        <div class="w-full">
          <img src="/download/18.png" class="w-full" alt="">
        </div>
      </div>
      <div class="module mt-12 flex gap-8">
        <div class="w-full">
          <div class="module-title flex mb-2">
            <div class="border-r-2 border-r-solid border-r-black pr-6 text-3xl line-height-none">美国自营专线</div>
            <el-button type="primary" round class="ml-6" size="large">
              <span class="primary-color text-base">点击查询专线航班表</span>
            </el-button>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">预计时效:</div>
            <div class="text-base ml-2 mt-1">全程预计时间 8 - 12 天</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">清关快:</div>
            <div class="text-base ml-2 mt-1">与DHL、UPS等快递清关方式一样</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">品类广:</div>
            <div class="text-base ml-2 mt-1">翼包裹自行按排直飞航班出货操作更灵活、一周3-6个航班、时效稳定、普货、鞋服箱包、潮牌、弱磁、固体化妆品、电子产品(非内电)</div>
          </div>
        </div>
        <div class="w-full">
          <img src="/download/17.png" class="w-full" alt="">
        </div>
      </div>
      <div class="module flex gap-8">
        <div class="w-full">
          <div class="module-title flex mb-2">
            <div class="border-r-2 border-r-solid border-r-black pr-6 text-3xl line-height-none">欧洲自营专线</div>
            <el-button type="primary" round class="ml-6" size="large">
              <span class="primary-color text-base">点击查询专线航班表</span>
            </el-button>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">预计时效:</div>
            <div class="text-base ml-2 mt-1">平均时效4-7天</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">稳定性:</div>
            <div class="text-base ml-2 mt-1">每天出货，固定仓位，一周7飞</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">安全性:</div>
            <div class="text-base ml-2 mt-1">快件清关，查验率低</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">品类广:</div>
            <div class="text-base ml-2 mt-1">品类限制少，可发服饰类;家具类，灯具类;固态化妆品类，化妆工具类;口罩，二三线潮牌等</div>
          </div>
          <div class="module-detail mt-4 flex">
            <div class="text-lg flex-shrink-0">无偏远:</div>
            <div class="text-base ml-2 mt-1">邮政派送，无偏远附加费</div>
          </div>
        </div>
        <div class="w-full">
          <img src="/download/19.png" class="w-full" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .details {
    &-content {
      width: 1250px;
      margin: 0 auto;
    }

    .module {
      // 单数翻转
      &:nth-child(odd) {
        --at-apply: "flex-row-reverse";
      }

      &+ .module {
        --at-apply: "mt-16";
      }
    }
  }
</style>
