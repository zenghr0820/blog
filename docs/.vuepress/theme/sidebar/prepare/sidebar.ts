import { App } from "@vuepress/core";
import { fs, path, sanitizeFileName } from "@vuepress/utils";
import {
  ensureEndingSlash,
  isArray,
  isPlainObject,
  removeLeadingSlash
} from "@vuepress/shared";
import {
  SidebarArrayOptions,
  SidebarGroupItem,
  SidebarInfo,
  SidebarOptions,
  SidebarSorter,
  ThemeData,
} from "vuepress-theme-hope/lib/shared";

import {
  getSidebarSorter
} from "vuepress-theme-hope";
import {
  Logger,
  entries,
  fromEntries
} from "vuepress-shared/node";

import { getSidebarInfo } from "./info";
// import { getSidebarSorter } from "./sorter";

const logger = new Logger("vuepress-theme-hope");
const removeExtension = (path: string): string =>
  path.replace(/README\.md$/, "").replace(/\.md$/, "");

const getGeneratePaths = (
  sidebarConfig: SidebarArrayOptions,
  prefix = ""
): string[] => {
  const result: string[] = [];

  if (!isArray(sidebarConfig)) {
    logger.error(
      `Expecting array, but getting invalid sidebar config${
        prefix ? ` under ${prefix}` : ""
        } with: ${JSON.stringify(sidebarConfig)}`
    );

    return result;
  }

  sidebarConfig.forEach((item) => {
    // it’s a sidebar group config
    if (isPlainObject(item) && "children" in item) {
      const childPrefix = `${prefix}${item.prefix || ""}`;

      // the children needs to be generated
      if (item.children === "structure") result.push(childPrefix);
      else result.push(...getGeneratePaths(item.children, childPrefix));
    }
  });

  return result;
};

const getSidebarItems = (infos: SidebarInfo[]): (SidebarGroupItem | string)[] =>
{
  return infos.map((info) => {
    if (info.type === "file")
      return info.path ?? removeExtension(sanitizeFileName(info.filename));

    return {
      text: info.title,
      prefix: `${sanitizeFileName(info.dirname)}/`,
      ...info.groupInfo,
      children: getSidebarItems(info.children),
    };
  });
};

/**
 * @private
 */
const getSidebarData = (
  app: App,
  themeData: ThemeData,
  sorter?: SidebarSorter
): SidebarOptions => {
  const generatePaths: string[] = [];
  const sorters = getSidebarSorter(sorter);

  // exact generate sidebar paths
  entries(themeData.locales).forEach(([localePath, { sidebar }]) => {
    if (isArray(sidebar)) generatePaths.push(...getGeneratePaths(sidebar));
    else if (isPlainObject(sidebar))
      entries(sidebar).forEach(([prefix, config]) => {
        if (config === "structure") generatePaths.push(prefix);
        else if (isArray(config)) {
          // generatePaths.push(
          //   ...getGeneratePaths(config).map((item) => `${prefix}${item}`)
          // );
          generatePaths.push(
            prefix
          );
        }

      });
    // sidebar is default "structure"
    else if (sidebar !== false) generatePaths.push(localePath);
  });

  const sidebarData = fromEntries(
    generatePaths.map((path) => [
      path,
      getSidebarItems(
        getSidebarInfo({
          pages: app.pages,
          sorters,
          scope: removeLeadingSlash(ensureEndingSlash(path)),
        })
      ),
    ])
  );


  if (app.env.isDebug)
    logger.info(
      `Sidebar structure data: ${JSON.stringify(sidebarData, null, 2)}`
    );

  return sidebarData;
};

/**
 * @private
 */
export const prepareSidebarData = async (
  app: App,
  themeData: ThemeData,
  sorter?: SidebarSorter
): Promise<void> => {
  const sidebarData = getSidebarData(app, themeData, sorter);

  await app.writeTemp(
    "theme-hope/sidebar.js",
    `\
export const sidebarData = ${JSON.stringify(sidebarData)};
`
  );
};