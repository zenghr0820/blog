<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <PageSidebar v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
// import RightSidebar from "./RightSidebar";
import PageSidebar from "./PageSidebar/PageSidebar";

export default {
  components: { PageEdit, PageNav, PageSidebar },
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
$wrapper {
  /* max-width: $contentWidth; */
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  @media (max-width: $MQNarrow) {
    padding: 2rem;
  }

  @media (max-width: $MQMobileNarrow) {
    padding: 1.5rem;
  }
}

.page {
  padding-bottom: 2rem;
  display: block;
  /*padding-right: 3.5rem;*/
  /*background: #f3f5f7;*/
  padding-right: 315px;
}
</style>