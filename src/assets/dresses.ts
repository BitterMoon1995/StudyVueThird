export class Dress {
    name: string
    price: number
    type: string
    color: string

    constructor(name: string, price: number, type: string, color: string) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.color = color;
    }
}

const dr1 = new Dress('芙拉小姐', 239, 'op', '生成色')
const dr2 = new Dress('不落海',297, 'jsk', '浅海蓝')
const dr3 = new Dress('降落',174, 'jsk', '深海蓝')
const dr4 = new Dress('星夜',500, 'jsk', '星夜黑')
const dr5 = new Dress('设计师的礼物',119, 'night skirt', '奶白色')
const dr6 = new Dress('奶油安纳西',169, 'slip dress', '蝴蝶结碎花杏色')


let dressList: Dress[] = [dr1, dr2, dr3, dr4, dr5, dr6]

export function getDresses() {
    return dressList
}
