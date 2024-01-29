import { createRouter, createWebHashHistory } from 'vue-router';
import { loadModule, options } from '/src/libs/loadModuleHelper.mjs';
import { isLoggedIn } from '/src/stores/authStore.mjs';
import { getFile, getComponentPath } from '/src/libs/helpers.mjs';
import emitter from '/src/libs/eventBus.mjs';

// cache loaded modules
const loadedModules = {};

const loadComponent = async (path) => {
	if (loadedModules[path]) {
		return loadModule(path, options);
	}

	emitter.emit('loading-component', { path, state: 'loading' });
	window.scrollTo(0, 0);

	try {
		await getFile(path, true);
	} catch (e) {
		emitter.emit('loading-component', { path, state: 'error' });
		return null;
	}

	loadedModules[path] = true;
	return loadModule(path, options);
};

const router = createRouter({
  history: createWebHashHistory('/'),
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('MainPage', true)),
    },
    {
      path: '/about',
      name: 'About',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('About', true)),
    },
    {
      path: '/features',
      name: 'Features',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('Features', true)),
    },
    {
      path: '/pricing',
      name: 'Pricing',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('Pricing', true)),
    },
    {
      path: '/users',
      name: 'UsersList',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('UsersList', true)),
    },
    {
      path: '/user/:id',
      name: 'ViewUser',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('ViewUser', true)),
    },
    {
      path: '/cats',
      name: 'CatsList',
      meta: { requiresAuth: true },
      component: () => loadComponent(getComponentPath('CatsList', true)),
    },
    {
      path: '/cat/:id',
      name: 'CatDetail',
      meta: { requiresAuth: true },
      component: () => loadComponent(getComponentPath('CatDetail', true)),
    },
    {
      path: '/faqs',
      name: 'FAQs',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('FAQs', true)),
    },
    {
      path: '/login',
      name: 'Login',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('Login', true)),
    },
    {
      path: '/contact',
      name: 'Contact',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('Contact', true)),
    },
    {
      path: '/profile',
      name: 'UserProfile',
      meta: { requiresAuth: true },
      component: () => loadComponent(getComponentPath('UserProfile', true)),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: { requiresAuth: false },
      component: () => loadComponent(getComponentPath('NotFound', true)),
    }
  ],
  scrollBehavior(to, from /*, savedPosition*/) {
    return new Promise((resolve /*, reject*/) => {
      setTimeout(
        () => {
          resolve({ left: 0, top: 0 });
        },
        to === from ? 0 : 500
      );
    });
  },
});

router.beforeEach((to, from, next) => {
  // console.log('beforeEach', to);
  if (to.meta.requiresAuth === true && !isLoggedIn()) {
    emitter.emit('toast', {
      title: 'Notice',
      message: 'Please login to see users cats.',
    });
    next({ name: 'Login', query: { redirect: to.fullPath } });
    return;
  }

  next();
});

router.afterEach((to /*, from*/) => {
  emitter.emit('loading-component', {
    path: getComponentPath(to.name, true),
    state: 'ok',
  });
});

export default router;
