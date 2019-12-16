<template>
  <div class="home">
    <HohuluHeader></HohuluHeader>
    <p>这是首页</p>
    <el-dialog title="登录界面" :visible.sync="isShowDialog">
      <div class="input-container">
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <span>账号：</span>
          </el-col>
          <el-col :span="16">
            <el-input placeholder="请输入账号" v-model="user.username"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="8">
            <span>密码：</span>
          </el-col>
          <el-col :span="16">
            <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
          </el-col>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取 消</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { userSignIn } from "@/api/user";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      restaurants: [],
      state: "",
      isShowDialog: false,
      user: {
        username: "",
        password: ""
      }
    };
  },
  components: {},
  methods: {
    ...mapActions, 
    ...mapGetters,
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1665号"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    onOk() {
      console.log("登录");
      const res = userSignIn(this.user);
      console.log("res", res);
      this.isShowDialog = false;
    },
    login() {
      this.$store.dispatch("user/login", this.user);
      console.log(this.$store);
      this.isShowDialog = false;
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  width: 50%;
  margin: 0 auto;

  span {
    line-height: 32px;
  }

  .el-row {
    margin-bottom: 20px;
  }
}
</style>
