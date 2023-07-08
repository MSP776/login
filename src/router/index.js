import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Login from '../views/Login.vue'

const routes = [

	{
		path: '/',
		name: 'App',
		redirect: "/detail", //重定向
		component: () => import( /* webpackChunkName: "about" */ '../App.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
	},
	{
		path: '/register',
		name: 'register',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Register.vue')
	},
	{
		path: '/detail',
		name: 'detail',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Detail.vue')
	},
	{
		path: '/ask',
		name: 'ask',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/ask.vue')
	},
	{
		path: '/home',
		name: 'home',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/home.vue')
	},
	{
		path: '/community',
		name: 'community',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/community.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
