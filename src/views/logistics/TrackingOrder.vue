<template>
  <div class="tracking-order py-8">
    <div class="tracking-order-content">
      <div class="title text-4xl m-8 ml-0 pl-6 border-l-6 border-l-solid border-l-[var(--primary-bg-color)]">物流查询</div>

      <div un-border="solid 1px var(--primary-color)" class="my-16 flex w-5xl mx-auto rounded-xl overflow-hidden shadow-md shadow-black shadow-op-30">
        <input class="p-4 px-4 text-2xl w-full bg-[#ffffff]" type="text" placeholder="请输入国际运单号">
        <button class="searchButton">
          <div class="i-bi:search w-1em h-1em" />
          查询
        </button>
      </div>

      <div class="h-16" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tracking-order {
  &-content {
    width: 1250px;
    margin: 0 auto;
  }

  .searchButton {
    --at-apply: "flex-shrink-0 flex items-center justify-center w-40 text-2xl gap-2 cursor-pointer";
    background-color: var(--primary-bg-color);
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;

    &:active {
      background-color: var(--primary-color);
      color: var(--primary-bg-color);
    }
  }

}
</style>
