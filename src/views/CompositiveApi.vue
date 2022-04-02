<template>
  <div>
    <el-row style="margin-bottom: 20px">
      搜索：
      <el-col :span="4">
        <el-input v-model="queryStr"></el-input>
      </el-col>
      <el-col :span="4"></el-col>
      排序：
      <el-col :span="4">
        <el-row>
          <el-input v-model="sortStr"></el-input>
          <el-button type="primary" style="display: inline-block" @click="sort">开排</el-button>
        </el-row>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-table stripe :data="dressList">
      <el-table-column prop="name" label="裙の名"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="color" label="颜色"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch, computed, Ref, toRefs, toRef} from "vue";
import {Dress, getDresses} from "@/assets/dresses";

class Owner {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export default defineComponent({
  name: "CompositiveApi",
  props: {
    owner: {
      type: Owner
    }
  },
  setup(props) {
    let propRef = toRefs(props);
    // 解构props对象定义ownerName变量，该变量类型为ObjectRefImpl
    let ownerName = propRef.owner.value?.name

    // 功能点一：数据请求功能

    // reactive:
    // ref：把普通对象转换为响应式对象。
    // 没有refs！！！
    // toRef：把响应式对象的某一个属性转换为响应式对象
    // toRefs：把响应式对象转换为普通对象，但其每一个属性都为原对象的响应式对象

    // 复杂普通对象，传入值的时候，约定好类型
    let dressList = ref<Dress[]>([])
    const getDressList = () => {
      dressList.value = getDresses(ownerName)
    }

    // 在 setup 内注册生命周期钩子。这些函数接受一个回调，当钩子被组件调用时，该回调将被执行。
    onMounted(getDressList)

    watch(props, () => console.log(props))

    // 功能点二：搜索功能
    const queryStr = ref('')
    const searchResult = computed(() => {
      return dressList.value.filter((dress: Dress) => dress.name.includes(queryStr.value))
    })

    // 功能点三：排序功能
    const sortStr = ref('')
    const sort = function () {
      let r = dressList.value.sort(function (a, b) {
        return a.price - b.price
      });
      dressList = ref(r)
    }

    return {
      dressList,
      getDressList,
      queryStr,
      searchResult,
      sortStr,
      sort
    }
  },
  mounted() {//
  },
  watch: {}
})
</script>

<style scoped>

</style>
