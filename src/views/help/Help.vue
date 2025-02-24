<script setup lang="ts">
import type { TabPaneName } from 'element-plus'
import { getHelpTabsApi } from '/@/api/help'

onMounted(() => {
  getHelpTabs()
})
function getHelpTabs() {
  getHelpTabsApi().then((_res) => {
    // TODO 处理返回的 tabs 列表
  })
}

// 左侧菜单
const active = ref(1)

// 搜索关键词
const keyword = ref('')

// 帮助 tabs
const tabActive = ref(1)
const helpTabs = ref([
  { id: 1, name: '新手指引' },
  { id: 2, name: '转运问题' },
  { id: 3, name: '支付问题' },
  { id: 4, name: '配送问题' },
  { id: 5, name: '会员中心' },
  { id: 6, name: '售后问题' },
  { id: 7, name: '快递知识' },
])
function handleChangeTab(_name: TabPaneName) {
  // TODO 获取指定标签下的问题列表
}

// 问题列表
const QAList = ref([
  { id: '1234234', title: '新手指引', content: `<p style="white-space: normal;">一、发货给Weparcel</p><p style="white-space: normal;">把您购买的货物邮寄到Weparcel仓库</p><p style="white-space: normal;">Tips:在【我的-转运地址】中获取Weparcel仓库地址，并按提示的标准填写收件人信息。</p><p style="white-space: normal;">带有标识码的包裹到库后，系统可自动添加该包裹单号到“待验货”列表 中，无需手动添加单号。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;">二、提交订单</p><p style="white-space: normal;">包裹到达仓库，经过翼包裹验货后，您可收到签收通知并查看入库信息，可进入【待打包】列表查看包裹详情。</p><p style="white-space: normal;">在【待打包】列表选择您要转运的包裹单号提交打包，添加国外收货地址。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;">三、支付国际运费</p><p style="white-space: normal;">Weparcel对您提交的包裹打包称重测体积，您收到付款提醒后进行支付【我的-待付款】</p><p style="white-space: normal;">Tips：Weparcel会根据您包裹的重量和体积，推荐最优配送途径，通过服务号消息推送给您</p><p style="white-space: normal;">付款后，Weparcel发货往海外目的地，您可查看物流情况。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;">四、收货/评价晒单</p><p style="white-space: normal;">包裹送达后，请确认签收，并对本次服务给予评价，评价晒单会送积分哦【我的-签收/评价】</p>` },
  { id: '123', title: '新手指引', content: `<p style="white-space: normal;">一、发货给Weparcel</p><p style="white-space: normal;">把您购买的货物邮寄到Weparcel仓库</p><p style="white-space: normal;">Tips:在【我的-转运地址】中获取Weparcel仓库地址，并按提示的标准填写收件人信息。</p><p style="white-space: normal;">带有标识码的包裹到库后，系统可自动添加该包裹单号到“待验货”列表 中，无需手动添加单号。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;">二、提交订单</p><p style="white-space: normal;">包裹到达仓库，经过翼包裹验货后，您可收到签收通知并查看入库信息，可进入【待打包】列表查看包裹详情。</p><p style="white-space: normal;">在【待打包】列表选择您要转运的包裹单号提交打包，添加国外收货地址。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;">三、支付国际运费</p><p style="white-space: normal;">Weparcel对您提交的包裹打包称重测体积，您收到付款提醒后进行支付【我的-待付款】</p><p style="white-space: normal;">Tips：Weparcel会根据您包裹的重量和体积，推荐最优配送途径，通过服务号消息推送给您</p><p style="white-space: normal;">付款后，Weparcel发货往海外目的地，您可查看物流情况。</p><p style="white-space: normal;"><br></p><p style="white-space: normal;">四、收货/评价晒单</p><p style="white-space: normal;">包裹送达后，请确认签收，并对本次服务给予评价，评价晒单会送积分哦【我的-签收/评价】</p>` },
])
</script>

<template>
  <div class="help bg-black bg-op-3">
    <img src="/download/29.jpg" class="w-full" alt="">
    <div class="help-content flex py-8">
      <div class="menu flex-shrink-0 bg-white rounded-xl self-start overflow-hidden">
        <div class="menu-item" :class="{ active: active === 1 }" @click="active = 1">帮助中心</div>
        <div class="menu-item" :class="{ active: active === 2 }" @click="active = 2">微信下单</div>
        <div class="menu-item" :class="{ active: active === 3 }" @click="active = 3">淘宝下单</div>
        <div class="menu-item" :class="{ active: active === 4 }" @click="active = 4">微站下单</div>
      </div>
      <div class="news-list w-full min-h-[40vh] ml-8">
        <div class="search-box">
          <div un-border="solid 1px black op-30" class="flex items-center ml-auto rounded-full overflow-hidden h-14">
            <div class="i-bi:search w-1.2em h-1.2em flex-shrink-0 ml-4 color-black color-op-50" />
            <input v-model="keyword" class="px-4 text-size-lg w-full" type="text" placeholder="请输入查询关键词">
            <button class="searchButton"> 搜索 </button>
          </div>
        </div>
        <el-tabs v-model="tabActive" class="help-tabs" @tab-change="handleChangeTab">
          <el-tab-pane v-for="item in helpTabs" :key="item.id" :label="item.name" :name="item.id" />
        </el-tabs>
        <div v-if="keyword && !tabActive">关键词“{{ keyword }}”搜索结果：</div>
        <div class="rounded-xl overflow-hidden">
          <el-collapse accordion class="custom-collapse mt-4">
            <el-collapse-item v-for="item in QAList" :key="item.id" :name="item.id">
              <template #title>
                <div class="text-lg px-4">{{ item.title }}</div>
              </template>
              <div class="px-8 py-4" un-border-t="1px solid black op-10" v-html="item.content" />
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.help {
  &-content {
    width: 1150px;
    margin: 0 auto;
  }

  .searchButton {
    --at-apply: "flex-shrink-0 h-full flex items-center px-8 tracking-2 text-lg gap-2 cursor-pointer";
    background-color: var(--primary-bg-color);
    color: var(--primary-color);
    border-left: 1px solid rgb(#000, .3);
    transition: all .4s;

    &:active {
      opacity: .5;
    }
  }

  .menu {
    &-item {
      --at-apply: "py-4 w-41 text-center text-lg cursor-pointer";

      &.active {
        background-color: var(--primary-bg-color);
        font-weight: bold;
        color: var(--primary-color);
      }

      &:hover {
        background-color: var(--primary-bg-color);
        color: var(--primary-color);
      }
    }
  }

  .help-tabs {
    --at-apply: "pt-4";
    --el-font-size-base: 16px;

    :deep(.el-tabs__header) {
      .el-tabs__item:nth-child(2) {
        padding-left: 20px;
      }
    }
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
</style>
