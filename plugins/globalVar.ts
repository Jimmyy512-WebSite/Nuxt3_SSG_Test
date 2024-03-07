import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const myGlobalVariable = "This is a global variable2";
  nuxtApp.provide("myGlobalVariable", myGlobalVariable);
});
