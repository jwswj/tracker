
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

    index: Em.Route.extend({
      route: '/',
      enter: function(router) {
        console.log("entering root.index from", router.get('currentState.name'));
      },
      connectOutlets: function(router) {
        console.log("entered root.index, fully transitioned to", router.get('currentState.path'));
        console.log( router.get('applicationController') );
        //router.get('applicationController').connectOutlet('users', App.User.find());
      }
    }),

    /*enter: Em.Route.extend({
      route: '/activities/:user'
    })*/

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

/*App.Exercise = Em.Object.extend({
  id: null,
  title: null
});

App.Activity = Em.Object.extend({
  id: null,
  description: null,
  exercise_id: null,
  user_id: null
});*/


/* Controllers */
App.UsersController = Em.ArrayController.extend({
  content: [
    App.User.create({
      id: '1',
      name: 'Jason',
      email: 'jason.smale@gmail.com',
      phone: '0402073344',
      displayed: true
    })
  ]
});

console.log( App.UsersController );

/* Views */
App.UsersView = Em.View.extend({
  templateName: 'select_users_template'
});