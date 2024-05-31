import {createRouter, createWebHistory} from '@ionic/vue-router';
import Base from '../components/Base.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/',
        component: Base,
        children: [
            {
                path: '',
                redirect: '/home',
            },
            {
                path: 'home',
                component: () => import('../views/HomePage.vue'),
            },
            {
                path: 'projects',
                component: () => import('../views/ProjectsPage.vue'),
            },
            {
                path: 'skills',
                component: () => import('../views/SkillsPage.vue'),
            },
            {
                path: 'projects_info/',
                redirect: '/projects',
            },
            {
                path: 'projects_info/:projectName',
                component: () => import('../views/ProjectsInfo.vue'),
                meta: {
                    transition: 'forward'
                }
            }
        ],
    }
];


const router = createRouter({
    // Use: createWebHistory(process.env.BASE_URL) in your app
    history: createWebHistory(),
    routes,
});

export default router;
