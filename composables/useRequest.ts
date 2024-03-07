export const useRequest = () => {
  const nuxtApp = useNuxtApp();
  return nuxtApp.$customFetch;
};
