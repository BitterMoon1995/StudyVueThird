import {createApp, defineComponent} from "vue";
import {Vue, Options} from "vue-class-component";

export const Home = defineComponent({
    template: `
    <h1>等小乌龟</h1>
    `
})

// 在单独的ts文件中定义组件，目前只能这样。defineComponent不得行，计算属性过不了tsc
@Options({
    template: `
      <div>
      <h1>还得硅谷</h1>
      </div>
    `,
    data() {
        return {
            val1: 2,
            val2: 3
        }
    },
    computed: {
        sum() {
            return this.val1 + this.val2
        }
    },
})
export class PVR extends Vue {

}

export const TeleportChild = defineComponent({
    name: 'teleportChild',
    template: `
    <div>
    Teleport中包含的子组件
    </div>
    `,
    props: ['str'],
    mounted() {
        console.log(this.str)
    }
})

@Options({
    name: 'modal-button',
    template: `
      <div>
      <el-button type="primary" @click="modalOpen = true">
        打开模态框
      </el-button>
<!--      teleport作用：像模态框（modal）、提示框（toast）这种页面元素，将它们与Vue应用剥离，-->
<!--      使其在布局上直接位于body标签而非其父组件下，可能会更好。因为进行定位与z-index设置时更便利。-->
<!--      这里就是把全屏模态框直接挂在body下面，并进行了绝对定位。-->
      <teleport to="body" v-if="modalOpen">
        <div style="position: absolute;top: 0;border: 1px solid black;width: 100%;
        height: 100%;background-color: white">
          <h1 style="margin-top: 0">
            全屏幕模态框
          </h1>
          <el-button type="info" @click="modalOpen = false">关闭模态框</el-button>
        </div>
<!--        teleport与Vue组件：teleport不会影响父子组件的数据传递，如果其标签内出现了Vue组件，-->
<!--        那么这个子组件逻辑上仍是teleport标签所处组件的子组件，组件prop的传递不受影响。-->
        <teleport-child :str="'我是尼人'"></teleport-child>
      </teleport>
      </div>
    `,
    data() {
        return {
            modalOpen: false
        }
    },
    components: {
        'teleport-child': TeleportChild
    }
})
export class ModalButton extends Vue {

}

