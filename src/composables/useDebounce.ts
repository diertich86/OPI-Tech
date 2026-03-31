import { ref, watch, type Ref } from "vue";

export function useDebounce<T>(source: Ref<T>, delay = 300) {
  const debouncedValue = ref(source.value) as Ref<T>;

  watch(
    source,
    (newValue) => {
      const timeoutId = setTimeout(() => {
        debouncedValue.value = newValue;
      }, delay);

      return () => clearTimeout(timeoutId);
    },
    { immediate: true },
  );

  return debouncedValue;
}
