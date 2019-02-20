<template>
  <div>
    <button @click="addList">添加列表</button>
    <h1>page is search</h1>
    <ul v-if="list.length">
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
    <!-- 导航类似于 route-link -->
    <nuxt-link to="/">home page</nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
// 命名空间，表示从city模块中引入改文件
const { mapState, mapActions } = createNamespacedHelpers("city");
export default {
  layout: "search", // 通过该参数来指定样式模板
  data() {
    return {
      // list: []
    };
  },

  components: {},

  computed: {
    ...mapState({
      list: state => state.list
    })
  },

  created() {},

  /**
   * 通过vue声明周期获取数据，但是该声明周期在服务器端不会执行，只在浏览器端执行
   * 检测方法，查看网页源码进行搜索
   */
  async mounted() {
    // let self = this;
    // let {
    //   status,
    //   data: { list }
    // } = await axios.get("/city/list");
    // if (status === 200) {
    //   self.list = list;
    // }
  },

  /**
   * asyncData方法会在组件（限于页面组件）页面之前被调用.它可以在服务端或路由更新之前被调用，主要用来操作动态数据的
   * 注意：该方法中不能使用this
   * fetch 主要用来处理和 vuex 相关
   * asyncData 主要用来处理组件数据相关
   */
  async asyncData(context) {
    // let {
    //   status,
    //   data: { list }
    // } = await axios.get("http://localhost:3000/city/list");
    // if (status === 200) {
    //   return { list };
    // }
  },

  beforeDestroy() {},

  methods: {
    ...mapActions(["add"]),
    addList() {
      this.add(Math.floor(Math.random() * 100));
    }
  }
};
</script>
<style>
</style>