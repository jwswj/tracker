
/* Application */
App = Em.Application.create({
  VERSION: 1.0,
  rootElement: '#app',
  storeNamespace: 'Tracker',
  ApplicationController: Em.Controller.extend(),
  UsersController: Em.ArrayController.extend(),
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
        router.get('applicationController').connectOutlet('users', App.User.find());
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
App.User = Em.Object.extend();
App.User.reopenClass({
  allUsers: [],
  find: function(){
    $.ajax({
      url: 'users.json',
      dataType: 'json',
      context: this,
      success: function(response){
        response.forEach(function(user){
          this.allUsers.addObject(App.User.create(user))
        }, this);
      }
    });
    return this.allUsers;
  }
});


// var user = App.User.create({
//   id: '1'
// });

// console.log(user);
// console.log(user.fetch().done(function(d){
//   console.log(d);
// }));
// console.log();

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