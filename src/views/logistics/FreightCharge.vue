<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { weparcelPriceApi } from '/@/api/logistics'
import QueryString from 'qs'

interface CityDTO {
  label: string
  value: string
  en: string
}
const selectedCity = ref<string>('')
const cityList = ref<Array<CityDTO>>([
  { label: '澳大利亚', value: '13', en: 'Australia' },
  { label: '英国', value: '255', en: 'Britain' },
  { label: '法国', value: '78', en: 'France' },
  { label: '德国', value: '84', en: 'Germany' },
])
function getCityByValue(val: string) {
  return cityList.value.find(city => city.value === val)
}

const weight = ref<string>('')
const volume = reactive({
  width: '1',
  height: '1',
  length: '1',
})

const router = useRouter()
function startCalculate() {
  if (!selectedCity.value || !weight.value) {
    ElMessage.warning('请选择区域/国家和输入计费重量')
    return
  }
  const info = { city: selectedCity.value, weight: weight.value, volume: toRaw(volume) }
  router.push({ path: '/logistics/freight-charge', query: { info: btoa(encodeURIComponent(JSON.stringify(info))) } })
}

const type = ref<'query' | 'desc'>('query')
const route = useRoute()
// 线路列表
const lineList = ref<Array<LineFeeVO>>([])
const loading = ref(false)

watchEffect(() => {
  try {
    if (route.query && route.query.info) {
      const _info = JSON.parse(decodeURIComponent(atob(route.query.info as string)))
      selectedCity.value = _info.city
      weight.value = _info.weight
      volume.width = _info.volume.width
      volume.height = _info.volume.height
      volume.length = _info.volume.length
      const data: WeparcelPriceQueryDTO = {
        countryId: Number.parseInt(selectedCity.value),
        height: _info.volume.height,
        length: _info.volume.length,
        weight: _info.weight,
        width: _info.volume.width,
      }

      type.value = 'desc'
      loading.value = true
      // weparcelPriceApi(data).then((res) => {
      //   if (res.code === '0') {
      //     lineList.value = res.obj.Data.InuseList
      //   }
      // }).finally(() => {
      //   loading.value = false
      // })
      fetch(`/line-data.json?${QueryString.stringify(data)}`, { method: 'GET' }).then((res) => {
        res.json().then((inuseList) => {
          lineList.value = inuseList
          loading.value = false
        })
      })
    }
    else {
      type.value = 'query'
      lineList.value = []
    }
  }
  catch (_err) {
    console.error(_err)
    lineList.value = []
    ElMessage.error('info is not valid')
    router.replace({ path: '/logistics/freight-charge' })
  // query.info is not valid
  }
})

/** 计算价格, 我现在所有价格都用乘以90%这样是不对，算出来总价不对（你要改一下） */
function computePrice(price: number) {
  // 小数点进一
  return Math.ceil(price * 0.9)
}

/** 替换关键字 */
function replaceKeyword(str: string) {
  return str.replace(/(JF自营)/g, '自营').replace(/君丰/g, '翼包裹')
}
</script>

<template>
  <div class="freight-charge" :class="{ desc: type === 'desc' }">
    <div class="freight-charge-content">
      <template v-if="type === 'query'">
        <div class="query-page">
          <div class="title text-4xl m-8 my-12 ml-0 pl-6 border-l-6 border-l-solid border-l-[var(--primary-bg-color)]">运费估算</div>
          <div class="area my-12">
            <div class="text-2xl">
              <span>请输入邮寄国家或地区</span>
              <span class="text-red-6">*</span>
            </div>
            <ElSelect
              v-model="selectedCity"
              clearable filterable placeholder="请选择国家或地区" size="large" class="city-select"
              popper-class="city-select-popper"
            >
              <ElOption v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value">
                <div class="flex items-center justify-between">
                  <span>{{ city.label }}</span>
                  <span class=" text-gray-400 text-sm"> {{ city.en }} </span>
                </div>
              </ElOption>
            </ElSelect>
          </div>
          <div class="weight mb-12">
            <div class="text-2xl">
              <span>计费重(kg)</span>
              <span class="text-red-6">*</span>
            </div>
            <ElInput v-model="weight" placeholder="1kg，则输入 1" size="large" class="weight-input" @input="() => { weight = weight.replace(/[^\d.]/g, '') }" />
          </div>
          <!-- 体积 -->
          <div un-flex="~ row items-center justify-between" class="volume mb-12 text-2xl w-8/10">
            <div>长(cm)</div>
            <ElInput v-model="volume.length" placeholder="请输入长(cm)" size="large" class="volume-input" @input="() => { weight = weight.replace(/[^\d.]/g, '') }" />
            <div>宽(cm)</div>
            <ElInput v-model="volume.width" placeholder="请输入宽(cm)" size="large" class="volume-input" @input="() => { weight = weight.replace(/[^\d.]/g, '') }" />
            <div>高(cm)</div>
            <ElInput v-model="volume.height" placeholder="请输入高(cm)" size="large" class="volume-input" @input="() => { weight = weight.replace(/[^\d.]/g, '') }" />
          </div>

          <div class="start-estimate" @click="startCalculate"> 开始估算 </div>

          <div class="h-[1px] bg-black bg-op-10 w-full mb-4" />

          <div class="rounded-xl overflow-hidden mt-16 mb-12" un-border="1px solid black op-10">
            <div class="p-4 text-lg  flex color-[var(--primary-color)]  bg-[var(--primary-bg-color)]">
              <div class="font-bold">温馨提示</div>
            </div>
            <div class="p-8">
              <div class="color-red-5 mb-4 text-2xl">寄送物品限制：</div>
              <p>部分途径可接的物品：食品,品牌,药品,光碟,原木制品等敏感货,可出EMS类途径,部分专线; 内置电池物品可走香港快线敏感,Fedex,专线敏感等途径; 完全不接的 违禁物品：烟酒,白色粉末,纯电池,金银等贵重物品,动植物活体及标本,易燃易爆,刀具,枪支弹药等等! （以上途径出货物品类型包括但不限于，请知悉！具体请联 系在线客服咨询，谢谢！</p>
              <p>除开EMS类途径外,其他途径均需计算体积,体积重=长*宽*高（cm/5000）(专线是/6000)。</p>
              <p>以上报价仅做参考,有部分限时促销价格未显示,请联系在线客服。</p>
              <p>报价不含目的地关税,不含偏远或超重超长费等。</p>

              <div class="h-[1px] bg-black bg-op-5 w-full my-4" />

              <div class="color-red-5 mb-4 text-2xl">什么是体积重:</div>
              <p>体积重指国际快递公司在计算收费重的时候,会根据体积计算体积重。当需寄递物品实际重量小而体积较大,运费需按材积标准收取。求取材积公式如下：规则物 品：长（cm）×宽(cm)×高(cm)÷5000=A ；如果货物实重是B, 则A和B相比取大的那个做为计费重。</p>
              <p>所以重量轻体积大的物品,比如毛绒玩具,要留意体积重。这类物品可以走EMS等不计体积途径更经济划算。</p>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="type === 'desc'">
        <div class="desc-page">
          <div class="breadcrumbs py-12 flex items-center text-lg color-black color-op-60">
            <router-link to="/logistics/freight-charge">
              <span class="color-black font-bold cursor-pointer hover:color-[var(--primary-bg-color)]">运费估算</span>
            </router-link>
            <div class="i-bi:chevron-right w-1em h-1em inline-block px-4" />
            <span>查询详情</span>
          </div>
          <div class="query-condition w-16/24 bg-white p-6 text-xl ">
            <div>
              <span class="font-bold">国家/地区：</span>
              <span>{{ getCityByValue(selectedCity)?.label }}({{ getCityByValue(selectedCity)?.en }})</span>
            </div>
            <div class="flex mt-2">
              <div>
                <span class="font-bold">重量：</span>
                <span>{{ parseFloat(weight)?.toFixed(2) }} (kg)</span>
              </div>
              <div class="ml-12">
                <span class="font-bold">尺寸：</span>
                <span>{{ volume.length }}*{{ volume.width }}*{{ volume.height }} (cm)</span>
              </div>
            </div>
          </div>
          <div class="fee-list mt-8">
            <div class="fee-list-header h-14 px-[28px] flex items-center bg-[var(--primary-bg-color)] color-[var(--primary-color)]">
              <view class="line-name w-8/24">运输途径</view>
              <view class="line-name w-5/24">时效（天）</view>
              <view class="line-name w-5/24">计费重</view>
              <view class="line-name w-6/24">总费用（已含有燃油税率）</view>
            </div>
            <div class="line-list min-h-60 bg-white">
              <template v-if="loading">
                <div v-loading="loading" element-loading-text="查询中..." class="h-60" />
              </template>
              <template v-else>
                <el-collapse accordion class="custom-collapse">
                  <el-collapse-item v-for="item in lineList" :key="item.ProductId" :name="item.ProductId">
                    <template #title>
                      <div class="fee-list-item">
                        <view class="line-name w-8/24">{{ replaceKeyword(item.ProductName) }}</view>
                        <view class="line-name w-5/24">{{ item.TimelineRemark }}</view>
                        <view class="line-name w-5/24">{{ item.Weight }}</view>
                        <view class="line-name w-6/24">{{ computePrice(item.Price) }}</view>
                      </div>
                    </template>
                    <div class="px-32 py-4 text-sm" un-border-t="1px solid black op-10">
                      <div class="fee-desc">
                        <div class="fee-desc-title flex text-lg mb-4">
                          <div class="font-bold">费用详情</div>
                        </div>
                        <div class="flex gap-4">
                          <div class="w-full">
                            <div>国际运费：</div>
                            <div class="mt-2 w-18/24" un-border="1px solid black op-10">
                              <div class="bg-black bg-op-5 text-center py-1">计费标准</div>
                              <div class="flex justify-around py-1" un-border-t="1px solid black op-10">
                                <div>首重/{{ item.FirstWeightUnit }}kg</div>
                                <div>￥{{ computePrice(item.FirstWeightPrice) }}</div>
                              </div>
                              <div class="flex justify-around py-1" un-border-t="1px solid black op-10">
                                <div>续重/{{ item.Unit }}kg</div>
                                <div>￥{{ computePrice(item.UnitPrice) }}</div>
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <div>计费规则：</div>
                            <div class="mt-2 bg-black bg-op-5 p-4" un-border="1px solid black op-10">
                              按照打包后的包裹体积重（长*宽*高/6000）与实重对比取最大值计费
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="line-feat mt-6">
                        <div class="line-feat-title flex text-lg mb-4">
                          <div class="font-bold">路线特点</div>
                        </div>
                        <div class="mt-4 bg-black bg-op-5 p-2 whitespace-pre-wrap" un-border="1px solid black op-10">
                          {{ replaceKeyword(item.LineFeature) }}
                        </div>
                      </div>
                      <div class="line-info mt-6">
                        <div class="line-feat-title flex text-lg mb-4">
                          <div class="font-bold">邮寄说明</div>
                        </div>
                        <div class="mt-4" un-border="1px solid black op-10">
                          <div class="flex" un-border-b="1px solid black op-10">
                            <div class="w-30 text-center py-2 flex-shrink-0 bg-black bg-op-5 " un-border-r="1px solid black op-10">是否包税</div>
                            <div class="px-4 py-2">{{ replaceKeyword(item.IsIncludedTax) }}</div>
                          </div>
                          <div class="flex" un-border-b="1px solid black op-10">
                            <div class="w-30 text-center py-2 flex-shrink-0 bg-black bg-op-5 " un-border-r="1px solid black op-10">出货类型</div>
                            <div class="px-4 py-2">{{ replaceKeyword(item.ShipmentType) }}</div>
                          </div>
                          <div class="flex" un-border-b="1px solid black op-10">
                            <div class="w-30 text-center py-2 flex-shrink-0 bg-black bg-op-5 " un-border-r="1px solid black op-10">物品类型</div>
                            <div class="px-4 py-2">{{ replaceKeyword(item.GoodsRestriction) }}</div>
                          </div>
                          <div class="flex" un-border-b="1px solid black op-10">
                            <div class="w-30 text-center py-2 flex-shrink-0 bg-black bg-op-5 " un-border-r="1px solid black op-10">重量限制</div>
                            <div class="px-4 py-2">{{ replaceKeyword(item.WeightRestriction) }}</div>
                          </div>
                          <div class="flex">
                            <div class="w-30 text-center py-2 flex-shrink-0 bg-black bg-op-5 " un-border-r="1px solid black op-10">长度限制</div>
                            <div class="px-4 py-2">{{ replaceKeyword(item.LengthRestriction) }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </template>
            </div>
          </div>
          <div class="h-24" />
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.city-select-popper {
  --el-font-size-base: 16px;

  .el-select-dropdown__item {
    height: 48px;
    line-height: 48px;
  }
}
</style>

<style lang="scss" scoped>
.freight-charge {

  &.desc {
    background-color: #F5F5F5;

    .freight-charge-content {
      width: 1150px
    }
  }

  &-content {
    width: 1250px;
    margin: 0 auto;
  }

  .start-estimate {
    --at-apply: "mx-auto text-2xl text-[var(--primary-color)] bg-[var(--primary-bg-color)] w-48 h-14 rounded-full flex items-center justify-center cursor-pointer mt-24 mb-12";
    transition: all 0.5s ease-in-out;

    &:active {
      --at-apply: "bg-[var(--primary-color)] text-[var(--primary-bg-color)]";
    }
  }

  .volume-input {
    --at-apply: "text-xl px-2";
    --el-input-height: 56px;
    width: 168px;

    :deep(.el-input__wrapper) {
      --at-apply: "px-5";
    }
  }

  .weight-input {
    --at-apply: "text-xl mt-4";
    --el-input-height: 56px;

    :deep(.el-input__wrapper) {
      --at-apply: "px-5";
    }
  }

  .city-select {
    --at-apply: "text-xl mt-4";
    --el-input-height: 56px;

    :deep(.el-select__wrapper) {
      --at-apply: "px-5 text-xl";
      min-height: 56px;
    }
  }

  .desc-page {

    .fee-list-item {
      --at-apply: "h-14 pl-[28px] flex items-center w-full text-left text-base";
      font-family: "Exo", sans-serif;
    }

    .custom-collapse {
      --el-collapse-header-height: 60px;

      :deep(p) {
        margin: 0;
      }
      :deep(.el-collapse-item__arrow) {
        font-size: 20px;
      }

      :deep(.el-collapse-item__header) {
        &:hover:not(.is-active) {
          color: var(--primary-bg-color);
          font-weight: bold;
        }
        &.is-active {
          background-color: rgb($primary-bg-color, .75);
          color: var(--primary-color)
        }
      }
    }
  }
}
</style>
