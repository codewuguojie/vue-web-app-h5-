<template>
  <ul class="footer flex jc-sa w100pc fixed bott0 bg-fff aic footer">
    <li class="item">
      <router-link to="/index" class="flex2 aic f20 yellow" active-class="active">
        <!-- <van-icon class="text" name="wap-home"></van-icon> -->
        <van-icon class="text" name="newspaper-o" />
        <p class="mt-5 f12 text">资讯</p>
      </router-link>
    </li>
    <li class="item">
      <router-link to="/cart" class="flex2 aic f20 text" active-class="active">
        <van-icon class="text" name="hot-o" />
        <p class="mt-5 text f12">盟友圈</p>
      </router-link>
    </li>
    <li class="item">
      <router-link to="/tv" class="flex2 aic f20 text" active-class="active">
        <van-icon class="text" name="tv-o" />
        <p class="mt-5 text f12">电视台</p>
      </router-link>
    </li>
    <li class="item">
      <router-link to="/shop" class="flex2 aic f20 text" active-class="active">
        <van-icon class="text" name="bill-o" />
        <p class="mt-5 text f12">商城</p>
      </router-link>
    </li>
    <li class="item">
      <router-link to="/my" class="flex2 aic f20 text" active-class="active">
        <van-icon class="text" name="user-o"></van-icon>
        <p class="mt-5 text f12">我的</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.footer {
  border-top: 1px solid #ebebeb;
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  .text {
    color: #797d82;
  }
  .active .text {
    color: @red;
  }
}
</style>
