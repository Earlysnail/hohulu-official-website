<template>
  <div class="deliverGoods">
    <HohuluWorkHeader></HohuluWorkHeader>
    <HohuluSideTabs :menuList="WORK_PLATFORM_MENU"></HohuluSideTabs>
  </div>
</template>

<script>
import { WORK_PLATFORM_MENU } from "../../../../config/index";
export default {
  name: "deliverGoods",
  data() {
    return {
      WORK_PLATFORM_MENU,
      menu: [
        {
          label: '同城',
          key: "/deliverGoods/sameCity"
        },
        {
          label: '仓配',
          key: "/deliverGoods/deliverStorage"
        },
        {
          label: '整车',
          key: "/deliverGoods/fullTruck"
        },
        {
          label: '零担',
          key: "/deliverGoods/lessTruck"
        }
      ]
    };
  },
  props: {},
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push(this.menu[tab.index].key)
    }
  },
  created(){
    console.log('111', WORK_PLATFORM_MENU)
  }
};
</script>

<style lang="scss" scoped >

</style>