<script setup lang="ts">
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

const message = ref('')
</script>

<template>
  <div class="news-details">
    <div class="breadcrumbs py-8 flex items-center text-lg color-black color-op-60">
      <RouterLink to="/news">
        <span class="color-black font-bold cursor-pointer hover:color-[var(--primary-bg-color)]">我要寄件</span>
      </RouterLink>
      <div class="i-bi:chevron-right w-1em h-1em inline-block px-4" />
      <span>联系客服</span>
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
          <div class="content-title text-2xl text-center pt-8 " style="font-size: 25px;" />
          <div class="content-title text-2xl text-center pb-4" style="font-size: 15px; color: #afafaf" />
          <div class="w-full contact-info">
            <div class="contact-info-item">
              <div class="circle-wrap"><img src="/download/41.png" draggable="false"></div>
              <div class="">电话：19924618627</div>
            </div>

            <div class="contact-info-item">
              <div class="circle-wrap"><img src="/download/42.png" draggable="false"></div>
              <div class="">邮箱：info@weparcle.cn</div>
            </div>

            <div class="contact-info-item">
              <div class="circle-wrap"><img src="/download/08.jpg" width="154" height="132" draggable="false"></div>
              <div class="">微信客服账号</div>
            </div>

            <div class="contact-info-item">
              <div class="circle-wrap"><img src="/download/08.jpg" width="154" height="132" draggable="false"></div>
              <div class="">微信公众号</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.contact-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.contact-info-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.circle-wrap {
  width: 155px;
  height: 155px;
  background-color: #fff;
  border-radius: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-info-tit {
  font-size: 20px;
  color: #333;
  margin-top: 32px;
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
