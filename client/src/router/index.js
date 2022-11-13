import { createWebHistory, createRouter } from 'vue-router';
import nProgress from 'nprogress';

const routes = [
	{
		path: '/',
		name: 'Create New Employee',
		component: import('../components/create-employee/CreateEmployee'),
	},
    {
    path: '/lista',
		name: 'List Employees',
		component: import('../components/list-employee/ListEmployee'),
    },
    {
    path: '/edit',
		name: 'Edit Employees',
		component: import('../components/edit-employee/EditEmployee'),
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


export default router;