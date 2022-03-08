const Home =()=> import('./components/Home.vue');
const Contact =()=> import('./components/Contact.vue');

//Blog components

const Show =()=> import('./components/blogs/show.vue');
const Create =()=> import('./components/blogs/create.vue');
const Edit =()=> import('./components/blogs/edit.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home

    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact

    },
    {
        name: 'showBlogs',
        path: '/blogs',
        component: Show

    },
    {
        name: 'createBlog',
        path: '/create',
        component: Create

    },
    {
        name: 'editBlog',
        path: '/edit/:id',
        component: Edit

    }
];