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
  message.value = '参数错误'
}

const newsInfo = reactive({
  title: '日本空运敏感专线快至4天达，低至15元',
  date: '2020-08-08 00:00:00',
  exposure: 2342,
  content: `<img src="/download/27.jpg" width="100%" />`,
})
</script>

<template>
  <div class="news-details">
    <div class="breadcrumbs py-8 flex items-center text-lg color-black color-op-60">
      <RouterLink to="/news">
        <span class="color-black font-bold cursor-pointer hover:color-[var(--primary-bg-color)]">新闻中心</span>
      </RouterLink>
      <div class="i-bi:chevron-right w-1em h-1em inline-block px-4" />
      <span>推荐</span>
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
          <div class="content-title text-2xl text-center pt-8 pb-4">{{ newsInfo.title }}</div>
          <div class="flex color-black color-op-60 items-center mb-8">
            <div class="ml-auto flex">
              <div>{{ newsInfo.date }}</div>
              <div class="flex items-center ml-4">
                <div class="i-bi:eye w-1em h-1em" />
                <div class="ml-1">{{ newsInfo.exposure }}</div>
              </div>
            </div>
          </div>
          <div class="w-full" v-html="newsInfo.content" />
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
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
