import { ComputedRef, computed } from "vue";

import { useThemeData } from "@theme-hope/composables/index";

import { EncryptConfig } from "@theme-hope/modules/shared/index.js";

export const useEncryptData = (): ComputedRef<EncryptConfig> => {
  const themeData = useThemeData();

  return computed(() => themeData.value.encrypt || {});
};
