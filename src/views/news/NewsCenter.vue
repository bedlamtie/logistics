<script setup lang="ts">
import { useRouter } from 'vue-router'

const active = ref(1)
watchEffect(() => {
  const typeId = active.value
  // TODO 获取新闻列表
  console.error('change type:', typeId)
})

const news = ref([
  {
    id: Math.random().toString().slice(-6),
    title: '日本空运敏感专线快至4天达，低至15元',
    image: '/download/28.png',
    date: '2023-03-01 00:00:00',
    exposure: 100,
  },
  {
    id: Math.random().toString().slice(-6),
    title: '日本空运敏感专线快至4天达，低至15元',
    image: '/download/28.png',
    date: '2023-03-01 00:00:00',
    exposure: 100,
  },
  {
    id: Math.random().toString().slice(-6),
    title: '日本空运敏感专线快至4天达，低至15元',
    image: '/download/28.png',
    date: '2023-03-01 00:00:00',
    exposure: 100,
  },
  {
    id: Math.random().toString().slice(-6),
    title: '日本空运敏感专线快至4天达，低至15元',
    image: '/download/28.png',
    date: '2023-03-01 00:00:00',
    exposure: 100,
  },
])
const router = useRouter()
function goDetail(id: string) {
  router.push({ path: `/news/${id}` })
}
</script>

<template>
  <div class="news-center">
    <img src="/download/26.png" class="w-full" alt="">
    <div class="news-center-content flex py-8">
      <div class="menu flex-shrink-0 bg-white rounded-xl self-start overflow-hidden">
        <div class="menu-item" :class="{ active: active === 1 }" @click="active = 1">推荐</div>
        <div class="menu-item" :class="{ active: active === 2 }" @click="active = 2">公告</div>
        <div class="menu-item" :class="{ active: active === 3 }" @click="active = 3">攻略</div>
      </div>
      <div class="news-list w-full min-h-[40vh] ml-8">
        <div class="news-title mb-4 w-35 text-2xl font-bold pb-1" un-border-b="8px solid [var(--primary-bg-color)]">
          新闻中心
        </div>
        <div class="flex flex-col bg-white rounded-xl overflow-hidden">
          <div v-for="newsInfo in news" :key="newsInfo.id" class="news-item flex items-center py-6 px-4 cursor-pointer" @click="goDetail(newsInfo.id)">
            <img :src="newsInfo.image" width="200px" height="120px" class="rounded-lg" alt="">
            <div class="flex flex-col gap-6 ml-8">
              <div class="news-item-title text-xl">{{ newsInfo.title }}</div>
              <div class="flex gap-8 color-black color-op-60">
                <span>{{ newsInfo.date }}</span>
                <div class="flex items-center ml-4">
                  <div class="i-bi:eye w-1em h-1em" />
                  <div class="ml-1">{{ newsInfo.exposure }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-center {
  &-content {
    width: 1150px;
    margin: 0 auto;
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
      }
    }
  }

  .news-item {
    &:hover {
      background-color: rgb( var(--primary-bg-color), 0.2);
    }
  }
}
</style>
