import { readItems, useAsyncData, useDirectusRest, useRoute } from "#imports";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductv2Store = defineStore("countries", () => {
  const webshopBanners = ref();
  const route = useRoute();
  const loading = ref(false);
  console.log(route.query);

  const fetchWebshopBanners = async () => {
    webshopBanners.value = [];
    loading.value = true;

    const { data, pending, error } = await useAsyncData(() =>
      useDirectusRest<any>(
        readItems("country", {
          fields: ["*", "translations.*"],
        }),
      ),
    );

    loading.value = false;

    if (data.value && !pending.value && !error.value) {
      webshopBanners.value = data;
      console.log(webshopBanners.value);
    }
  };

  return {
    webshopBanners,
    fetchWebshopBanners,
    loading,
  };
});
