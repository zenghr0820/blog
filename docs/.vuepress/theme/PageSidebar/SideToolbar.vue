<template>
    <div class="page-side-toolbar">
        <!--目录-->
        <div class="option-box-toc-fixed">
            <div class="toc-container-sidebar">
                <div class="pos-box">
                    <div class="icon-arrow"></div>
                    <div class="scroll-box" style="max-height:650px">
                        <div style="font-weight:bold;text-align:center;">{{config.title}}</div>
                        <hr />
                        <div class="toc-box">
                            <ul class="toc-sidebar-links">
                                <li v-for="(node, index) in config.headers" :key="index">
                                    <a :href="config.path +'#'+ node.slug" :class="node.active ? 'active toc-sidebar-link' : 'toc-sidebar-link'">{{node.title}}</a>
                                    <ul class="toc-sidebar-sub-headers">
                                        <li v-for="(children, index) in node.childrens" :key="index">
                                            <a :href="config.path +'#'+ children.slug" :class="children.active ? 'active toc-sidebar-link' : 'toc-sidebar-link'">{{children.title}}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--鼠标显示目录-->
        <div class="option-box option-box-toc-over">
            <img :src="config.icon" style="pointer-events: none; width: 20px" class="nozoom">
            <span class="show-txt">目录</span>
            <div class="toc-container">
                <div class="pos-box">
                    <div class="icon-arrow"></div>
                    <div class="scroll-box" style="max-height:550px">
                        <div style="font-weight:bold;text-align:center;">{{config.title}}</div>
                        <hr />
                        <div class="toc-box">
                            <ul class="toc-sidebar-links">
                                <li v-for="(node, index) in config.headers" :key="index">
                                    <a :href="config.path +'#'+ node.slug" :class="node.active ? 'active toc-sidebar-link' : 'toc-sidebar-link'">{{node.title}}</a>
                                    <ul class="toc-sidebar-sub-headers">
                                        <li v-for="(children, index) in node.childrens" :key="index">
                                            <a :href="config.path +'#'+ children.slug" :class="children.active ? 'active toc-sidebar-link' : 'toc-sidebar-link'">{{children.title}}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 分隔符 -->
        <div class="option-box" v-for="(opt, index) in config.opts" :key="index">
            <template v-if="opt.type == 'script'">
                <a title="点击切换全屏" v-on:click="opt.event" style="text-align: center; padding-left: 2px;">
                    <img :src="opt.icon" style="pointer-events: none; width: 27px" class="nozoom">
                    <span class="show-txt">{{opt.title}}</span>
                </a>
            </template>

            <template v-else-if="opt.type == 'image'">
                <img :src="opt.icon" style="pointer-events: none; width: 20px" class="nozoom">
                <span class="show-txt">{{opt.title}}</span>
                <div class="toc-container">
                    <div class="pos-box">
                        <div class="icon-arrow"></div>
                        <div class="scroll-box" style="max-height:550px">
                            <img height="180px" :src="opt.imageUrl" class="medium-zoom-image" style="margin: 10px;">
                        </div>
                    </div>
                </div>
            </template>

            <template v-else-if="opt.type == 'html'">
                <img :src="opt.icon" style="pointer-events: none; width: 27px" class="nozoom">
                <span class="show-txt">{{opt.title}}</span>
                <div class="toc-container">
                    <div class="pos-box">
                        <div class="icon-arrow"></div>
                        <div class="scroll-box" style="max-height:550px">
                            <div v-html="opt.html"></div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else-if="opt.type == 'PageLink'">
                <a :title="opt.pageLink.title" :href="opt.pageLink.path" style="text-align: center; padding-left: 2px;">
                    <img :src="opt.icon" style="pointer-events: none; width: 27px" class="nozoom">
                    <span class="show-txt">{{opt.title}}</span>
                </a>
            </template>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            config: {headers: []}
        },
        data () {
            return {}
        },
    }
</script>

<style lang="stylus">
    /* 工具栏 */
    .page-side-toolbar {
        position: fixed;
        right: 8px;
        top: 65px!important;
        width: 44px;
    }

    .page-side-toolbar div.option-box:hover {
        color: #fff;
        background: #eee;
    }

    .page-side-toolbar div.option-box:hover .toc-container {
        display: block;
    }

    .page-side-toolbar div.option-box:first-child {
        border-top: 1px solid #eee;
    }

    .page-side-toolbar div.option-box {
        font-size: 12px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #eee;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
        background-color: #fff;
        height: 60px;
        cursor: pointer;
    }
    .page-side-toolbar div.option-box-toc-over {
        display: none;
    }

    .page-side-toolbar div.option-box .show-txt {
        color: grey;
        margin-top: 3px;
        font-size: 11px;
    }
    //目录菜单自适应
    @media (max-width: 1280px) {
        .page-side-toolbar div.option-box-toc-over {
            display: flex;
        }
        .page-side-toolbar div.toc-container-sidebar {
            display: none;
        }
    }
    .toc-container-sidebar {
        display: block;
        position: absolute;
        color: #2c3e50;
        left: 100%;
        top: 0;
        width: 240px;
        background: #ffffff;
        border: 1px solid #e8e8e8;
        left: unset;
        right: 100%;
        margin-right: 15px;
        margin-left: 0;
    }
    .toc-container-sidebar .pos-box .scroll-box, .toc-container .pos-box .scroll-box {
        overflow-x: hidden;
        overflow-y: hidden;
    }


    .toc-container {
        display: none;
        position: absolute;
        color: #2c3e50;
        left: 100%;
        top: -1px;
        width: 240px;
        background: #fff;
        border: 1px solid #eee;
        left: unset;
        right: 100%;
        margin-right: 2px;
        margin-left: 0;
    }

    .toc-container .pos-box, .toc-container-sidebar .pos-box {
        position: relative;
        padding: 16px;
    }

    .toc-container .pos-box .icon-arrow, .toc-container-sidebar .pos-box .icon-arrow {
        position: relative;
        margin-left: -20px;
    }

    .toc-container .pos-box .scroll-box， .toc-container-sidebar .pos-box .scroll-box {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .toc-container .pos-box .scroll-box hr, .toc-container-sidebar .pos-box .scroll-box hr {
        margin-top: .5rem;
    }
    .toc-container .pos-box .scroll-box .toc-box, .toc-container-sidebar .pos-box .scroll-box .toc-box {
        max-height: 550px;
        overflow-y: auto;
        overflow-x: hidden;
        width: 238px;
        padding-right: 16px;
        box-sizing: border-box;
    }
    .page-sidebar ul {
        margin: 0;
    }
    .page-sidebar a {
        display: inline-block;
    }
    a.toc-sidebar-link {
        font-size: 1em;
        font-weight: 400;
        display: inline-block;
        color: #2c3e50;
        line-height: 1;
        width: 100%;
        box-sizing: border-box;
    }
    a.toc-sidebar-link:hover {
        color: #3eaf7c;
    }
    a.toc-sidebar-link.active {
        font-weight: 600;
        color: #3eaf7c;
        border-left-color: #3eaf7c;
    }

    .toc-sidebar-sub-headers a.toc-sidebar-link {
        padding-top: .25rem;
        padding-bottom: .25rem;
        border-left: none;
        font-weight: 300;
    }

    .medium-zoom-image {
        cursor: pointer;
        cursor: zoom-in;
        transition: transform .3s cubic-bezier(.2,0,.2,1)!important;
    }
</style>