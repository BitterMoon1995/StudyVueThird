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
import {computed, defineComponent, ref, toRefs, toRef, reactive, isRef} from "vue";

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
    let o1 = {
      name: 'sb',
      age: 18
    }
    // let o2 = ref(o1);
    // let o3 = reactive(o1)
    // let o4 = toRefs(o3)
    // console.log('ref():', o2)
    // console.log('reactive():', o3)
    // console.log('toRefs():', o4)
    //
    // console.log(isRef(o2), isRef(o3), isRef(o4))

    let p = toRef(o1, 'name')
    console.log(isRef(p))

    // o1.age += 10
    // console.log(o3.age)
  }
})

</script>

<style scoped>

</style>
