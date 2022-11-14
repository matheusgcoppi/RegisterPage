import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home',
		component: import('../components/create-employee/CreateEmployee'),
	},
    {
    path: '/lista',
		name: 'list',
		component: import('../components/list-employee/ListEmployee'),
    },
    {
    path: '/edit',
		name: 'edit',
		component: import('../components/edit-employee/EditEmployee'),
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


export default router;