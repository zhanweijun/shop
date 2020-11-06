<template>
  <div id="tab-bar">
    <!--插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  /* 设置导航栏往下 */
  left: 0;
  right: 0;
  bottom: 0;
  /* 设置阴影 ，参数xy偏移为阴影值 颜色*/
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
