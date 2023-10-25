import {
  SidebarGroupItem,
  SidebarPageItem,
} from "vuepress-theme-hope/lib/shared";

export interface ResolvedSidebarHeaderItem extends SidebarPageItem {
  type: "heading";
  children: ResolvedSidebarHeaderItem[];
}

export interface ResolvedSidebarPageItem extends SidebarPageItem {
  type: "page";
  children: ResolvedSidebarHeaderItem[];
}

export interface ResolvedSidebarGroupItem extends SidebarGroupItem {
  type: "group";
  prefix: string;
  children: ResolvedSidebarItem[];
}

export type ResolvedSidebarItem =
  | ResolvedSidebarHeaderItem
  | ResolvedSidebarPageItem
  | ResolvedSidebarGroupItem;
