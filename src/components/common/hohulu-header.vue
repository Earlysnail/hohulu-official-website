<template>
  <div class="hohulu-header">
    <slot></slot>
    <el-menu
      :default-active="index"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/login">零担</el-menu-item>
      <el-menu-item index="/theSameCity">同城</el-menu-item>
      <el-menu-item index="/">整车</el-menu-item>
      <el-menu-item index="/">司机加盟</el-menu-item>
      <el-menu-item index="/">专线加盟</el-menu-item>
      <el-menu-item index="/">工作机会</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "hohulu-header",
  data() {
    return {
      index: this.$route.path == '/' ? '/home' : this.$route.path
    };
  },
  methods: {
    handleSelect(key) {
      console.log(key, this.$route.path);
      if (key !== this.$route.path) {
        this.$router.push(key);
      }
    }
  }
};
</script>

<style scoped>
</style>
