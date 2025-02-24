<script lang="ts" setup>

</script>

<template>
  <div class="flex items-center justify-center h-16 primary-color primary-bg min-w-[1350px]">
    <div class="header-container">
      <div class="mr-40">
        <img src="/logo.png" alt="logo">
      </div>
      <div class="flex items-center font-bold h-16 opacity-92">
        <router-link to="/">
          <div class="text-base h-16 line-height-16 px-4 hover:bg-[var(--primary-color)] hover:text-[var(--primary-bg-color)] cursor-pointer"> 首页 </div>
        </router-link>
        <el-dropdown popper-class="menu-item-popper">
          <div class="text-base h-16 px-4 line-height-16 primary-color hover:bg-[var(--primary-color)] hover:text-[var(--primary-bg-color)]">
            我要寄件
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="http://tracking.cluan.cn" target="_blank">
                <el-dropdown-item>物流查询</el-dropdown-item>
              </a>
              <router-link to="/logistics/freight-charge">
                <el-dropdown-item>运费估算</el-dropdown-item>
              </router-link>
              <router-link to="/help4">
                <el-dropdown-item>运费查询</el-dropdown-item>
              </router-link>
              <router-link to="/help2">
                <el-dropdown-item>下单流程</el-dropdown-item>
              </router-link>
              <router-link to="/help3">
                <el-dropdown-item>联系客服</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown popper-class="menu-item-popper">
          <div class="text-base h-16 px-4 line-height-16 primary-color hover:bg-[var(--primary-color)] hover:text-[var(--primary-bg-color)]">
            产品介绍
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <router-link to="/distribution-details">
                <el-dropdown-item> 专线介绍 </el-dropdown-item>
              </router-link>
              <router-link to="/distribution-column">
                <el-dropdown-item> 集运专栏 </el-dropdown-item>
              </router-link>
              <!--              <el-dropdown-item>商家专递</el-dropdown-item> -->
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <router-link to="/help">
          <div class="text-base h-16 line-height-16 px-4 hover:bg-[var(--primary-color)] hover:text-[var(--primary-bg-color)] cursor-pointer">
            帮助中心
          </div>
        </router-link>
        <el-dropdown popper-class="menu-item-popper">
          <div class="text-base h-16 px-4 line-height-16 primary-color hover:bg-[var(--primary-color)] hover:text-[var(--primary-bg-color)]">
            关于我们
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <router-link to="/company-overview?type=about">
                <el-dropdown-item>公司概述</el-dropdown-item>
              </router-link>
              <!--              <router-link to="/news"> -->
              <!--                <el-dropdown-item>翼包裹展示</el-dropdown-item> -->
              <!--              </router-link> -->
              <router-link to="/company-overview?type=beauty">
                <el-dropdown-item>翼包裹风采</el-dropdown-item>
              </router-link>
              <router-link to="/company-overview?type=cooperation">
                <el-dropdown-item>商务合作</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="text-base h-16 line-height-16 px-4 hover:bg-[var(--primary-color)] hover:text-[var(--primary-bg-color)] cursor-pointer">
          会员中心
        </div>
      </div>
      <div un-border="solid 1px var(--primary-color)" class="flex ml-auto rounded-full overflow-hidden">
        <input class="p-3 px-4 text-size-base w-70 bg-[#ffffff]" type="text" placeholder="请输入国际运单号">
        <button class="searchButton">
          <div class="i-bi:search w-1em h-1em" />
          查询
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menuList {
  --at-apply: "flex items-center gap-8 font-bold";
}

.menuItem {
  --at-apply: "cursor-pointer relative";
}

.searchButton {
  --at-apply: "flex items-center pl-4 pr-5 text-lg gap-2 cursor-pointer";
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
}

.header-container {
  --at-apply: "flex w-[1350px] items-center select-none";
}
@media screen and (max-width: 1400px) {
  .header-container {
     --at-apply: "px-6";
  }
}
</style>

<style lang="scss">
.menu-item-popper {
  --el-font-size-base: 16px;

  .el-dropdown-menu__item {
    padding: 12px 24px;
  }
}
</style>
