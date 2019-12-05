<template>
  <div class="home">
    <HohuluHeader>
      <div style="width: 1300px; height: 100px;"></div>
    </HohuluHeader>
    <p>这是主页</p>
  </div>
</template>

<script>
import HohuluHeader from "../../components/common/hohulu-header";
export default {
  name: "home",
  components: {
    HohuluHeader
  }
};
</script>

<style scoped>
</style>
