// import fs from "fs";
// import path from "path";
// import ejs from "ejs";
// import tracer from "tracer";

const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
// const logger = tracer.colorConsole();
const logger = require("tracer").colorConsole();

const docsRoot = path.join(__dirname, "..", "md");
// const notesRoot = path.join(__dirname, "..", "notes");
const sidebarPath = path.join(
  __dirname,
  "..",
  ".vuepress",
  "sidebar",
  "sidebar-auto.ts"
);
// const template = `
// <% for(let variable of variables) { %>
//   const <%- variable.name %> = <%- JSON.stringify(variable.js); %>
// <% } %>
//
// export const sidebar = [
//   <% for (let variable of variables) { %>
//     "<%- variable.path %>": <%- variable.name %>,
//   <% } %>
// ]
// `;

const template = `
export const sidebar = [
  <% for (let variable of variables) { %>
    <%- JSON.stringify(variable.js); %>,
  <% } %>
]
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
      js: js[0],
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

    if (sidebar[sidebar.length]) {
      logger.warn(
          `For ${file}, its order has appeared in the same level directory. And it will be rewritten.`
      );
    }

    // 判断文件是否符合规则 xxx.md
    const regExp = /.+\.md$/g;
    let order, title, type;
    // 分割文件名
    const arr = filename.split(".");
    // 判断文件类型
    if (stat.isDirectory()) {
      title = arr.length > 1 ? arr[1] : arr[0];
      sidebar.push({
        title,
        collapsable: false,
        // sidebarDepth: 2, // 侧边栏显示 h2、h3标题
        children: mapTocToSidebar(file, prefix + filename + "/")
      });
    } else if (regExp.test(filename)) {
      if (arr.length === 3) { // 01.xxx.md
        [order, title, type] = arr;
      } else if (arr.length === 2) { // xxx.md
        [title, type] = arr;
      }
      sidebar.push([prefix + filename, title]);
      // sidebar.push({
      //   title,
      //   link: mapTocToSidebar(file, prefix + filename + "/")
      // });
    }

  });

  if (index) {
    // sidebar.unshift([prefix + 'READE.md', ''])
    sidebar.unshift('')
  }

  sidebar = sidebar.filter(item => item !== null && item !== undefined);
  return sidebar;
}
