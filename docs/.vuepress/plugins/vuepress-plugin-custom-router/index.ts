import { App, Page } from "@vuepress/core";
// @ts-ignore
import { Logger } from "vuepress-shared/node";
import { removeLeadingSlash } from '@vuepress/shared'

const routePfx = "/passages/";
const logger = new Logger("vuepress-plugin-custom-router");

export default {
    name: 'vuepress-plugin-custom-route',
    // 文章路径增加前缀 和 评论标识
    extendsPage(page) {
        const { frontmatter, pathInferred } = page;

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

        // if (pathInferred && pathInferred.lastIndexOf("\/") > 0) {
        //     const pathPfx = pathInferred.substring(0, pathInferred.lastIndexOf("\/") + 1);
        //     page.path = `${pathPfx}${link}.html`;
        //     page.frontmatter.permalink = page.path;
        // }

        // logger.info("link = ", link);

        page.path = `${routePfx}${link}.html`;
        page.frontmatter.permalink = `${routePfx}${link}.html`;

        // !! 修改 build 后，文档生成的路径
        if (page.htmlFilePath) {
            page.htmlFilePath = page.htmlFilePath.replace(/dist.*/, `dist${page.path}`);
            page.htmlFilePathRelative = removeLeadingSlash(page.path);
        }

    }
};
