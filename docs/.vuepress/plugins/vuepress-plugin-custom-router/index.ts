import { App, Page } from "@vuepress/core";
// @ts-ignore
import { Logger } from "vuepress-shared/node";

const routePfx = "/passages/";
const logger = new Logger("vuepress-plugin-custom-router");

export default {
    name: 'vuepress-plugin-custom-route',
    // 文章路径增加前缀 和 评论标识
    extendsPage(page) {
        const { frontmatter } = page;

        if (
            !frontmatter ||
            JSON.stringify(frontmatter) === "{}" ||
            (!frontmatter.re && !frontmatter.permalink) ||
            frontmatter.single === true
        ) {
            return;
        }

        // TODO 评论元数据不设置
        // if (/^\/?docs\//.test(regularPath)) {
        //   frontmatter.comment = true;
        //   frontmatter.commentid = frontmatter.permalink;
        // } else {
        //   frontmatter.comment = false;
        // }

        // TODO 暂时不实现根据目录生成前缀
        // if (frontmatter.parentlevel && frontmatter.parentlevel !== '') {
        //   routePfx = ("/" + frontmatter.parentlevel + "/");
        // }

        // 自定义文档链接
        let link = "";
        if (frontmatter.re) {
          link = frontmatter.re;
        } else if (frontmatter.permalink) {
          link = frontmatter.permalink;
        }

        // logger.info("link = ", link);

        page.path = `${routePfx}${link}.html`;
        page.frontmatter.permalink = `${routePfx}${link}.html`;

    }
};
