<template>
  <div class="signUp">
    <HohuluHeader></HohuluHeader>
    <div class="signup-container">
      <el-steps :active="active" finish-status="success" simple>
        <el-step title="输入手机号"></el-step>
        <el-step title="设置密码"></el-step>
        <el-step title="注册成功"></el-step>
      </el-steps>
      <div class="input-container">
        <el-form status-icon label-width="100px">
          <el-form-item label="手机号:">
            <el-input placeholder="请输入手机号" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择" style="min-width: 100px">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="验证:"></el-form-item>
          <el-form-item class="btn-list">
            <el-button>下一步</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "user",
  data() {
    return {
      username: "hah",
      password: "123456",
      select: "",
      active: 0,
      input3: ''
    };
  },
  props: {},
  components: {},
  methods: {
    ...mapGetters,
    ...mapActions,
    login: () => {
      const params = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("user/signIn", params);
      console.log(this.$store);
    }
  }
};
</script>


<style lang="scss" scoped>

.signup-container {
  min-height: 400px;
  width: 80%;
  margin: 50px auto;
  border: 1px solid #b4b4b4;
}
.input-container {
  width: 50%;
  margin: 100px auto 0px;
}
</style>