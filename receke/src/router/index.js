import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import AddRecipe from '../views/AddRecipe.vue';
import QueryRecipes from '../views/QueryRecipes.vue';
import RecipeDBView from '@/views/RecipeDBView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-recipe',
      name: 'addRecipe',
      component: AddRecipe
    },

    {
      path:'/query-recipes',
      name: 'queryRecipes',
      component: QueryRecipes
    },

    {
      path:'/recipe-view/:id',
      name: 'recipeView',
      component: RecipeDBView
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
