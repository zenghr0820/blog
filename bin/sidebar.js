const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const logger = require("tracer").colorConsole();

const docsRoot = path.join(__dirname, "..", "docs");
// const notesRoot = path.join(__dirname, "..", "notes");
const sidebarPath = path.join(
  __dirname,
  "..",
  ".vuepress",
  "config",
  "sidebar-auto.js"
);
const template = `
<% for(let variable of variables) { %>
  const <%- variable.name %> = <%- JSON.stringify(variable.js); %>
<% } %>

module.exports = {
  <% for (let variable of variables) { %>
    "<%- variable.path %>": <%- variable.name %>,
  <% } %>
}
`;

main();

/**
 * 主体函数
 */
function main() {
  const variables = [];
  const tocs = readTocs(docsRoot);

  tocs.forEach(toc => {
    let sidebars = mapTocToSidebar(toc);
    if (!sidebars.length) {
      return;
    }

    const js = [];
    const oneChildren = [];
    // 判断第一级目录是否有文件
    for (const temp of sidebars) {
      if (typeof temp === 'string' || Array.isArray(temp)) {
        oneChildren.push(temp);
        continue;
      }
      js.push(temp);
    }

    if (oneChildren && oneChildren.length > 0) {
      js.unshift({
        title: path.basename(toc),
        collapsable: false,
        children: oneChildren
      })
    }


    variables.push({
      path: `/docs/${path.basename(toc)}/`,
      name: path.basename(toc).replace(/ /g, "_"),
      js,
    });
  });

  fs.writeFileSync(sidebarPath, ejs.render(template, { variables }));
}

/**
 * 读取指定目录的文件夹作为不同的目录
 * @param {String} root
 */
function readTocs(root) {
  const result = [];
  const files = fs.readdirSync(root);
  files.forEach(name => {
    const file = path.resolve(root, name);
    if (fs.statSync(file).isDirectory()) {
      result.push(file);
    }
  });
  return result;
}



/**
 * 将对应目录映射为对应的边栏配置
 * @param {String} root
 * @param {String} prefix
 */
function mapTocToSidebar(root, prefix) {
  prefix = prefix || "";
  let sidebar = [];

  const files = fs.readdirSync(root);
  let index = false;
  files.forEach(filename => {
    const file = path.resolve(root, filename);
    const stat = fs.statSync(file);

    // 遇到 readme.md 文件 跳过此次循环
    if (filename.toLowerCase() === 'readme.md') {
      index = true;
      return;
    }

    let [order, title, type] = filename.split(".");
    order = parseInt(order, 10);
    if (isNaN(order) || order < 0) {
      return;
    }

    if (sidebar[sidebar.length]) {
      logger.warn(
        `For ${file}, its order has appeared in the same level directory. And it will be rewritten.`
      );
    }

    if (stat.isDirectory()) {
      sidebar.push({
        title,
        collapsable: false,
        // sidebarDepth: 2, // 侧边栏显示 h2、h3标题
        children: mapTocToSidebar(file, prefix + filename + "/")
      });
    } else {
      if (type !== "md") {
        logger.error(`For ${file}, its type is not supported.`);
        return;
      }
      sidebar.push([prefix + filename, title]);
    }

  });

  if (index) {
    // sidebar.unshift([prefix + 'READE.md', ''])
    sidebar.unshift('')
  }

  sidebar = sidebar.filter(item => item !== null && item !== undefined);
  return sidebar;
}
