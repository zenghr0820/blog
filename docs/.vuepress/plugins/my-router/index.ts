const routePfx = "/passages/";

export default {
    name: 'vuepress-plugin-custom-route',
    // 文章路径增加前缀 和 评论标识
    extendsPage(page) {
        const {frontmatter, regularPath, pathInferred} = page;
        // console.log(page)
        if (
            !frontmatter ||
            JSON.stringify(frontmatter) === "{}" ||
            !frontmatter.re ||
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

        // page.path = `${routePfx}${frontmatter.permalink}.html`;
        if (pathInferred && pathInferred.lastIndexOf("\/") > 0) {
            const pathPfx = pathInferred.substring(0, pathInferred.lastIndexOf("\/") + 1);
            page.path = `${pathPfx}${frontmatter.re}.html`;
        }

    }
};
