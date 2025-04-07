{
    path: '/:pathMatch(.*)*',
    name 'NotFound',
    component; () => import('../views/NotFound.vue')
  }
  