<template>
  <div>
    <el-table stripe :data="dressList">
      <el-table-column prop="name" label="裙の名"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="color" label="颜色"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch, computed} from "vue";
import {Dress, getDresses} from "@/assets/dresses";

export default defineComponent({
  name: "CompositiveApi",
  props: {
    owner: String
  },
  setup(props) {
    // 功能点一：数据请求功能

    // 我们可以通过一个新的 ref 函数使任何响应式变量在任何地方起作用，
    // ref 接收参数并将其包裹在一个带有 value property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值。
    // 【官方教程差错】：不能ref([])，否则无法设置value
    const dressList = ref()
    const getDressList = () => {
      dressList.value = getDresses()
    }

    console.log(props.owner)

    // 在 setup 内注册生命周期钩子。这些函数接受一个回调，当钩子被组件调用时，该回调将被执行。
    onMounted(getDressList)

    watch(props, () => console.log(props))


    // 功能点二：搜索功能
    const queryStr = ref('')
    const search = computed(() => {
      return dressList.value.filter(
          (dress: Dress) => dress.name.includes(queryStr.value)
      )
    })

    return {
      dressList,
      getDressList,
      queryStr,
      search
    }
  },
  mounted() {//
    this.queryStr = '芙拉'
    console.log(this.search)
  },
  watch: {}
})
</script>

<style scoped>

</style>
