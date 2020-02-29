const routePfx = "/passages/";

module.exports = {
  // 文章路径增加前缀 和 评论标识
  extendPageData($page) {
    const { frontmatter, regularPath } = $page;

    if (
      !frontmatter ||
      JSON.stringify(frontmatter) === "{}" ||
      !frontmatter.permalink ||
      frontmatter.single === true
    ) {
      return;
    }

    if (/^\/?notes\//.test(regularPath)) {
      frontmatter.comment = false;
    } else {
      frontmatter.comment = true;
      frontmatter.commentid = frontmatter.permalink;
    }

    // TODO 暂时不实现根据目录生成前缀
    // if (frontmatter.parentlevel && frontmatter.parentlevel !== '') {
    //   routePfx = ("/" + frontmatter.parentlevel + "/");
    // }

    frontmatter.permalink = `${routePfx}${frontmatter.permalink}.html`;
  }
};
