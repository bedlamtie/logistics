<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import Header from './Header.vue'
import Floor from './Floor.vue'

const { y } = useWindowScroll()
const showTop = computed(() => y.value > 300)
function resetTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="h-full w-full relative">
    <Header />
    <div class="min-w-[1350px]">
      <slot name="default" />
    </div>
    <Floor />
    <div un-rounded="tl-2 bl-2" class="text-sm fixed z-36 bottom-50 right-0 w-20 overflow-hidden primary-bg primary-color">
      <router-link to="/help2">
        <div class="shortcutItem">
          <div class="i-bi:send-fill w-1.5em h-1.5em" />
          <span class="pt-1">立即寄件</span>
        </div>
      </router-link>
      <router-link to="/help4">
        <div un-border="t-solid 1px t-[#00000025]" class="shortcutItem">
          <div class="i-bi:search w-1.5em h-1.5em" />
          <span class="pt-1">运费查询</span>
        </div>
      </router-link>
      <router-link to="/help3">
        <div un-border="t-solid 1px t-[#00000025]" class="shortcutItem">
          <div class="i-bi:person-fill w-2em h-2em" />
          <span class="pt-1">联系客服</span>
        </div>
      </router-link>
    </div>

    <div v-if="showTop" class="fixed bottom-30 right-0 cursor-pointer">
      <div class="primary-bg primary-color rounded-full p-3 w-[fit-content] hover:text-[var(--primary-bg-color)] hover:bg-[var(--primary-color)]" @click="resetTop">
        <div class="i-material-symbols:vertical-align-top w-1.2em h-1.2em" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shortcutItem {
  --at-apply: "h-20 flex flex-col justify-center items-center cursor-pointer hover:text-[var(--primary-bg-color)] hover:bg-[var(--primary-color)]" ;
}
</style>
