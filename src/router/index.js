import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import UserEntryPages from '../entry-pages/UserEntryPages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      guest: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/products-list',
    name: 'ProductsList',
    // route level code-splitting
    // this generates a separate chunk (products-list.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "products-list" */ '../views/ProductsList.vue'
      ),
    meta: {
      guest: true,
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (checkout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/profile',
    component: UserEntryPages,
    children: [
      {
        path: '',
        name: 'Profile',
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "profile" */ '../views/users-views/Profile.vue'
          ),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/profile/settings',
        name: 'Settings',
        // route level code-splitting
        // this generates a separate chunk (settings.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "settings" */ '../views/users-views/Settings.vue'
          ),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  duplicateNavigationPolicy: 'reload',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else
      return {
        x: 0,
        y: 0,
      };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('app_token') === null) next('/login');
    else next();
  } else if (to.matched.some((record) => record.meta.guest)) next()
});

export default router
