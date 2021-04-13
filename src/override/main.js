import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Overview from './views/Overview.vue';
import AllNotes from './views/AllNotes.vue';
import Favourites from './views/Favourites.vue';
import Flashcards from './views/Flashcards.vue';
import Calendar from './views/Calendar.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/overview', component: Overview },
  { path: '/all-notes', component: AllNotes },
  { path: '/favourites', component: Favourites },
  { path: '/flashcards', component: Flashcards },
  { path: '/calendar', component: Calendar },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

