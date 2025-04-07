export interface LinkData {
    name: string;
    desc: string;
    icon: string;
    link: string;
}

export const friends: LinkData[] = [
    {
        name: "Mr.Hope",
        desc: "VuePress Theme Hope 主题作者。",
        icon: "https://mister-hope.com/logo.svg",
        link: "https://mister-hope.com/",
    },
    {
        name: "iconfont",
        desc: "阿里巴巴矢量图标库",
        icon: "https://image.liubing.me/2022/12/30/c827badf9fa7a.jpg",
        link: "https://www.iconfont.cn/",
    },
    {
        name: "VuePress",
        desc: "Vue 驱动的静态网站生成器",
        icon: "https://vuepress.vuejs.org/images/hero.png",
        link: "https://vuepress.vuejs.org/zh/",
    },
    {
        name: "pdai",
        desc: "Java 全栈知识体系",
        icon: "https://www.pdai.tech/images/index-read.gif",
        link: "https://www.pdai.tech",
    },
];
export const invalid: LinkData[] = [

];