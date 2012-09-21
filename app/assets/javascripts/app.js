
/* Application */
App = Em.Application.create({
  VERSION: 1.0,
  rootElement: '#app',
  storeNamespace: 'Tracker',
  ApplicationController: Em.Controller.extend(),
  //AppView = Em.View.extend
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
        console.log("entering root.index from", router.getPath('currentState.name'));
      },
      connectOutlets: function(router) {
        console.log("entered root.index, fully transitioned to", router.getPath('currentState.name'));
        router.get('applicationController').connectOutlet('users');//.set('view', App.usersView);
        //console.log(router.get('usersController').get('content'));//.connectOutlet('users', App.User.find());
      }
    }),

    activities: Em.Route.extend({
      route: '/activities',
      enter: function(router) {

      },
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('activites');
      }
    })

  })
});

/* Models */
App.User = Em.Resource.define({
  url: '/users',
  schema: {
    id: Number,
    name: String,
    email: String,
    phone: String
  }
});

var user = App.User.create({
  id: '1'
});

console.log(user);
console.log(user.fetch().done(function(d){
  console.log(d);
}));
console.log();

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


/*App.User.create({
  id: '1',
  name: 'Jason',
  email: 'jason.smale@gmail.com',
  phone: '0402073344',
  displayed: true
}),
App.User.create({
  id: '2',
  name: 'Sian',
  email: 'sian.smale@gmail.com',
  phone: '0402073344',
  displayed: true
})*/

/* Controllers */
App.UsersController = Em.ArrayController.extend({
  content: []
});

App.ActivitiesController = Em.ArrayController.extend({
  content: []
});

App.ApplicationView = Em.ContainerView.extend({
  elementId: 'awesome-app',
  childViews: ['outletView'],
  outletView: Em.View.create({
    template: Em.Handlebars.compile('{{outlet}}')
  })
});

/* Views */
App.UsersView = Em.CollectionView.extend({
  contentBinding: "controller.content",
  classNames: ['users-list'],
  itemViewClass: Em.View.extend({
    tagName: 'a',
    template: Em.Handlebars.compile('{{view.content.name}}')
  })
});

App.ActivitesView = Em.CollectionView.extend({
  contentBinding: 'controller.content',
  elementId: 'activites'
});