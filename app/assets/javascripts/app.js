
/* Application */
App = Em.Application.create({
  VERSION: 1.0,
  rootElement: '#app',
  storeNamespace: 'Tracker',
  ApplicationController: Em.Controller.extend(),
  ready: function() {
    this.initialize();
  }
});

/* Routes */
App.Router = Em.Router.extend({
  root: Em.Route.extend({
    aRoute: Em.Route.extend({
      route: '/',
      enter: function(router) {
        console.log("entering root.aRoute from", router.get('currentState.name'));
      },
      connectOutlets: function(router) {
        console.log("entered root.aRoute, fully transitioned to", router.get('currentState.path'));
      }
    })
  })
});

/* Models */
App.User = Em.Object.extend({
  id: null,
  name: null,
  email: null,
  phone: null,
  displayed: false
});

App.Exercise = Em.Object.extend({
  id: null,
  title: null
});

App.Activity = Em.Object.extend({
  id: null,
  description: null,
  exercise_id: null,
  user_id: null
});


/* Controllers */
App.UsersController = Ember.Controller.extend({



});

/* Views */