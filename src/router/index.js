import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import CashGameContent from '../views/CashGameContent.vue';
import SpringSeriesContent from '../views/SpringSeriesContent.vue';
import FinalStageContent from '../views/FinalStageContent.vue';


const routes = [
  {
    path: '/',
    redirect: '/CashGame'
  },
  {
    path: "/CashGame",
    name: "home",
    component: Home,
    children: [
      {
        path: '/CashGame',
        name: 'CashGame',
        component: CashGameContent
      },
      {
        path: '/SpringSeries',
        name: 'SpringSeries',
        component: SpringSeriesContent
      },
      {
        path: '/FinalStage',
        name: 'FinalStage',
        component: FinalStageContent
      }

    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
