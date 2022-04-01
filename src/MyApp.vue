<template>
  <div>
    <router-link to="/compositive-api/周薇儿">组合式API</router-link>&nbsp;&nbsp;
    <router-link to="/compositive-api/周雨薇儿">组合式API2</router-link>
    <br><br>
    <el-button type="primary" @click="backHome">首页</el-button>
    <br><br>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, toRefs} from "vue";

//定义组件，可以export default {}，页面出得来，但是有点小low。
//因为毕竟用的ts，肯定希望让 TypeScript 正确推断 Vue 组件选项中的类型。
//有两种方法。可以定义继承Vue type的类，

// export default class MyApp extends Vue{
//
// }

//或返回defineComponent()

export default defineComponent({
  data() {
    return {}
  },
  methods: {
    backHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    }
  },
  mounted() {//

  }
})

</script>

<style scoped>

</style>
