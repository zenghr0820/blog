import {
  usePageData,
  usePageFrontmatter,
  useRouteLocale,
} from "vuepress/client";
import {computedWithControl} from "@vueuse/core";
import type {ComputedRef, InjectionKey} from "vue";
import {computed, inject, provide} from "vue";

import {useThemeLocaleData} from "@theme-hope/composables/index";
import {resolveSidebarItems, ResolvedSidebarItem} from "@theme-hope/modules/sidebar/utils/index";

declare const __VUEPRESS_DEV__: boolean;

export type SidebarItemsRef = ComputedRef<ResolvedSidebarItem[]>;

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> = Symbol(
  __VUEPRESS_DEV__ ? "sidebarItems" : "",
);

/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = (): void => {
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  // ** TODO 解决： 自定义文章链接导致侧边栏异常 **
  const page = usePageData();

  const routeLocale = useRouteLocale();

  // Get sidebar config from frontmatter > themeConfig
  const sidebarConfig = computed(() =>
    frontmatter.value.home
      ? false
      : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure",
  );
  const headerDepth = computed(
    () => frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2,
  );

  console.log(sidebarConfig.value)
  const sidebarItems = computedWithControl(
    () => [
      sidebarConfig.value,
      headerDepth.value,
      page.value.path,
      __VUEPRESS_DEV__ ? page.value.headers : null,
    ],
    () =>
      resolveSidebarItems({
        config: sidebarConfig.value,
        headerDepth: headerDepth.value,
        routeLocale: routeLocale.value,
        routePath: page.value.path,
      }),
  );

  provide(sidebarItemsSymbol, sidebarItems);
};

/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = (): SidebarItemsRef => {
  const sidebarItems = inject(sidebarItemsSymbol);

  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");

  return sidebarItems;
};