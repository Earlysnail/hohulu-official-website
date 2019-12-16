<template>
  <div class="moreServer">
    <HohuluWorkHeader></HohuluWorkHeader>
     <HohuluSideTabs :menuList="WORK_PLATFORM_MENU"></HohuluSideTabs>
  </div>
</template>

<script>
import { WORK_PLATFORM_MENU } from "../../../../config/index";
export default {
  name: "moreServer",
  data(){
    return {
      WORK_PLATFORM_MENU,
    }
  },
  props: {},
  components: {}
};
</script>

<style lang="scss" scoped >
</style>