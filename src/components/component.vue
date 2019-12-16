<template>
  <div class="component">
    <HohuluHeader></HohuluHeader>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入内容" style="width:300px">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </el-col>
      <el-col :span="8">
        <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <button class="hhl-red-btn">立即下单</button>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <el-row>
      <Pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      ></Pagination>
    </el-row>
    <el-row>
      <el-button type="primary" @click="isShowDialog=true">Modal</el-button>
      <el-dialog :title="title" :visible.sync="isShowDialog">
        <div slot="footer" class="dialog-footer">
          <el-button @click="isShowDialog = false">取 消</el-button>
          <el-button type="primary" @click="onOk">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-row></el-row>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
import { WORK_PLATFORM_MENU } from "../../config/index";
import { Pagination } from "@/components/index";
export default {
  name: "component",
  data() {
    return {
      WORK_PLATFORM_MENU,
      isShowDialog: false,
      radio: "",
      input: "",
      title: "",
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  components: {
    Pagination,
  },
  computed: {},
  methods: {
    getList() {
      this.listLoading = true;
      this.total = 100;
      this.listLoading = false;
    },
    onOk() {
      this.isShowDialog = false;
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped>
</style>