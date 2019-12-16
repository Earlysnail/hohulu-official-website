<template>
  <div class="HohuluHeader">
    <div class="header-container">
      <el-row type="flex" justify="space-between">
        <el-col :span="6">
          <img
            style="float: left"
            src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WPXOLT/22/a9/a3/22a9a339054b490496a444b6c30691e1/images/%E6%88%91%E7%9A%84%E8%B4%A6%E6%88%B7%E8%AE%BE%E7%BD%AE_%E6%88%91%E7%9A%84%E5%90%88%E5%90%8C%E6%96%B9%E6%A1%88/u1057.svg?token=8e17d2a90ab218f1bb6ff9d784f19d0813dec1e46a74084d30a2126faa2daf4d"
          />
        </el-col>
        <el-col :span="8">
          <el-autocomplete popper-class="my-autocomplete" placeholder="请输入货运单号" style="width:100%">
            <i class="el-icon-search el-input__icon" slot="suffix"></i>
            <template slot-scope>
              <div class="name"></div>
              <span class="addr"></span>
            </template>
          </el-autocomplete>
        </el-col>
        <el-col :span="10">
          <span>官网</span>
          <span>消息</span>
          <span>帮助</span>
          <span>用户信息</span>
        </el-col>
      </el-row>
    </div>
    <el-menu :default-active="index" mode="horizontal" @select="handleSelect">
      <el-menu-item
        v-for="(menu, index) in OFFICILA_MENU"
        :key="index"
        :index="menu.path"
      >{{menu.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { OFFICILA_MENU } from "../../../config/index";
export default {
  name: "HohuluHeader",
  data() {
    return {
      OFFICILA_MENU,
      index: this.$route.path === "/" ? "/home" : this.$route.path
    };
  },
  methods: {
    handleSelect(key) {
      console.log('ss', key)
      if (key !== this.$route.path) {
        this.$router.push(key);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 100px;
  .el-row {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin-right: 30px;
  }
}

.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
