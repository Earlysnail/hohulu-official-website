<template>
  <div class="HohuluSideTabs">
    <el-tabs type="border-card" tab-position="left" @tab-click="handleClick">
      <el-tab-pane v-for="(menu,index) in menus" :key="index">
        <span slot="label" style="min-width: 100px;display: block;text-align: center;">
          <i class="el-icon-date"></i>
           {{menu.name}}
        </span>
        <router-view />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { WORK_PLATFORM_MENU } from "../../../config/index";
export default {
  name: "HohuluSideTabs",
  data() {
    return {
      WORK_PLATFORM_MENU,
      menus: []
    };
  },
  props: ["menuList"],
  methods: {
    handleClick(tab, event) {
      this.$router.push(this.menus[tab.index].path);
    }
  },
  computed: {},
  created() {
    this.menuList.forEach((menu, index) => {
      if (menu.path === this.$route.matched[0].path) {
        this.menus = menu.children;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.HohuluSideTabs {
  .el-tabs{
    min-height: 600px;
    box-shadow: none;
  }
}
</style>