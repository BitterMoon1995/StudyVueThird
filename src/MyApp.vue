<template>
  <div>
    <router-link to="/pvr">Vue响应性原理</router-link>
    <br><br>
    <el-button type="primary" @click="backHome">首页</el-button>
    <router-view></router-view>
  </div>
</template>

<script >
import {defineComponent} from "vue";

//定义组件，可以export default {}，页面出得来，但是有点小low。
//因为毕竟用的ts，肯定希望让 TypeScript 正确推断 Vue 组件选项中的类型。
//有两种方法。可以定义继承Vue type的类，

// export default class MyApp extends Vue{
//
// }

//或返回defineComponent()

export default defineComponent({
  data() {
    return {
      val1: 2,
      val2: 3
    }
  },
  methods: {
    backHome() {
      if (this.$route.path !== '/'){
        this.$router.push('/')
      }
    }
  }
})

</script>

<style scoped>

</style>
