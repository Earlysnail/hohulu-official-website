<template>
  <div class="login">
    <HohuluHeader>
      <div style="width: 1300px; height: 100px;"></div>
    </HohuluHeader>
    <p>这是登录页面</p>
    <HohuluButton>登录</HohuluButton>
  </div>
</template>

<script>
import HohuluHeader from "../../components/common/hohulu-header";
import HohuluButton from "../../components/common/hohulu-button";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "hah",
      password: "123456"
    };
  },
  props: {},
  components: {
    HohuluButton,
    HohuluHeader
  },
  methods: {
    ...mapGetters,
    ...mapActions,
    login: function() {
      const params = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("login/login", params);
      console.log(this.$store);
    }
  }
};
</script>

<style scoped>
</style>