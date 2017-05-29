// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './routes.js';
import VueResource from 'vue-resource';


Vue.use(VueResource);
//alertify.defaults.notifier.position = 'top-right';

Vue.http.interceptors.push(function(request, next) {
  if (request.url[0] === '/') {
    request.url = process.env.API + request.url;
  }

  next(function(res) {
    if (res.status == 422) {
      res.body.errors.forEach(function(e) {
        alertify.error(e)
      })
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: {
    App
  }
});
