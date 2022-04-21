export default {
    name: 'tracker-minimo',
    component: () => import(/* webpackChunkName: "tracker-minimo" */ '@/modules/tracker-minimo/layouts/TrackerMinimoLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-task',
            component: () => import(/* webpackChunkName: "no-task" */ '@/modules/tracker-minimo/views/NoTaskSelected.vue'),
        },
        {
            path: ':id/:month/:year',
            name: 'task',
            component: () => import(/* webpackChunkName: "task" */ '@/modules/tracker-minimo/views/TaskView.vue'),
            props: ( route ) =>{
                return{
                    id: route.params.id,
                    month: route.params.month,
                    year: route.params.year,
                 
                }
            },
        }
    ]
  
}