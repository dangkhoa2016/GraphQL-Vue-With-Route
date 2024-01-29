import { createApp, } from 'vue';
import { loadModule, options, } from '/src/libs/loadModuleHelper.mjs';
import { useAuthStore, login, logout, init as authStoreInit, } from '/src/stores/authStore.mjs';
import emitter from '/src/libs/eventBus.mjs';
import { getComponentPath, } from '/src/libs/helpers.mjs';
import router from './router.mjs';


loadModule(getComponentPath('App'), options).then(async (App) => {
  const app = createApp(App);
  await authStoreInit();

  app.use(router);

  app.provide('emitter', emitter);
  app.provide('authStore', { useAuthStore, login, logout, });

  app.mount('#demo');
});
