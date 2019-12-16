<template>
  <div class="hohulu-footer">
    <el-row type="flex" justify="left">
      <el-col :span="3" v-for="(data, index) in dataList" :key="index">
        <ul>
          <h3>{{data.title}}</h3>
          <li v-for="(ele, key) in data.content" :key="key">{{ele}}</li>
        </ul>
      </el-col>
    </el-row>
    <el-row type="flex" justify="left">
      <el-col :span="3">
        <span style="font-size: 1.17em;font-weight: bold;">{{dataList2.title}}</span>
      </el-col>
      <el-col :span="12">
        <ul style="display: flex; justify-content: left; flex-wrap: wrap; width: 600px;">
          <li v-for="(data, key) in dataList2.content" :key="key" style="margin-right: 10px;min-width: 70px;">{{data}}</li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <ul style="display: flex; justify-content: left;">
        <li v-for="(data, key) in dataList3" :key="key" style="padding-right:15px; margin-right: 15px;min-width: 70px; border-right:solid 1px #000">{{data}}</li>
      </ul>
    </el-row>
    <el-row>
      <span style="text-align: center; width: 100%; display: block">Copyright © 2016-2019 红葫芦 hohulu.com 版权所有 川ICP备15010000号-1</span>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "hohulu-footer",
  data() {
    return {
      dataList: [
        {
          title: "产品",
          content: ["货主版", "司机版"]
        },
        {
          title: "客户保障",
          content: ["时效保障"]
        },
        {
          title: "关于",
          content: ["关于我们", "加入我们", "新闻动态"]
        },
        {
          title: "资费",
          content: ["基本费用", "全国站点"]
        },
        {
          title: "帮助",
          content: ["常见问题", "意见反馈"]
        }
      ],
      dataList2: {
        title: "友情链接",
        content: [
          "中通快递",
          "京东商城",
          "小米科技",
          "德邦物流",
          "快狗打车",
          "中邮速递易",
          "中国加盟网", 
          "中通快递",
          "京东商城",
          "小米科技",
          "德邦物流",
          "快狗打车",
          "中邮速递易",
          "中国加盟网"
        ]
      },
      dataList3: [
        "隐私政策",
        "条款及条件",
        "管理平台",
        "四川红葫芦科技有限公司",
      ]
    };
  }
};
</script>

<style scoped>
.hohulu-footer{
  position: relative;
  width: 100%;
  color: #fff;
  text-align: left;
  padding: 10px 50px;
  background-color: #434343;
}
</style>
