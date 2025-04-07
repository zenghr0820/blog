import {computed, defineComponent, h, onMounted, ref} from "vue";
import PasswordModal from "@theme-hope/modules/encrypt/components/PasswordModal";
import { usePathEncrypt } from "@theme-hope/modules/encrypt/composables/index";
export default defineComponent({
  name: "LocalEncrypt",
  slots: Object,
  setup(_props, { slots }) {
    const { status, validate } = usePathEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    console.log("重写加密组件ok")
    return () => {
      const { isEncrypted, isLocked, hint } = status.value;
      return isEncrypted
        ? isMounted.value
          ? isLocked
            ? h(PasswordModal, {
              showTitle: false, // TODO 关闭标题模块,默认开启
              full: true,
              hint,
              onVerify: validate,
            })
            : slots.default()
          : null
        : slots.default();
    };
  },
});