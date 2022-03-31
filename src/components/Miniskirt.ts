import {createApp, defineComponent} from "vue";
import {Vue,Options} from "vue-class-component";

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
    mounted() {

    }
})
export class PVR extends Vue{

}
