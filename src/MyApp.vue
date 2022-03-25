<template>
  <div>
    <h1>这下</h1>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";
import {defineComponent} from "vue";

//定义组件，可以export default {}，页面出得来，但是有点小low。
//因为毕竟用的ts，肯定希望让 TypeScript 正确推断 Vue 组件选项中的类型。
//有两种方法。可以定义继承Vue type的类，

// export default class MyApp extends Vue{
//
// }

//或返回defineComponent()

export default defineComponent({
  methods: {

  }
})

</script>

<style scoped>

</style>
