// plugins/client-fetch-interceptor.plugin.client.ts

console.warn("plugin call!!!");
export default defineNuxtPlugin((nuxtApp) => {
  const originalFetch: any = nuxtApp.$fetch;
  console.warn("call2");
  // 重写 nuxtApp.$fetch 方法
  const MyFetch = async (input: RequestInfo, init: RequestInit = {}) => {
    console.warn("rewrite!!!!");
    // 从 localStorage 获取 token
    const token = localStorage.getItem("token");

    // 确保 headers 对象存在
    if (!init.headers) {
      init.headers = {};
    }

    // 如果存在 token，则添加到请求的 Authorization 头部
    if (token) {
      // 如果 headers 是一个 Headers 对象，使用 append 方法
      if (init.headers instanceof Headers) {
        init.headers.append("Authorization", `Bearer ${token}`);
      } else {
        // 如果 headers 是一个普通对象，直接添加属性
        (init.headers as Record<string, string>)[
          "Authorization"
        ] = `Bearer ${token}`;
      }
    }

    // 调用原始的 fetch 方法
    return originalFetch(input, init);
  };
  nuxtApp.provide("myFetch", MyFetch); // 使用 provide 来添加自定义的 fetch 方法
});
