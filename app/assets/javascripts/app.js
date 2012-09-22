
/* Application */
App = Em.Application.create({
  VERSION: 1.0,
  rootElement: '#app',
  storeNamespace: 'Tracker',
  ApplicationController: Em.Controller.extend(),
  UsersController: Em.ArrayController.extend(),
  ActivitiesController: Em.ArrayController.extend(),
  ready: function() {
    this.initialize();
  }
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

App.ApplicationView = Em.ContainerView.extend({
  elementId: 'awesome-app',
  childViews: ['outletView'],
  outletView: Em.View.create({
    template: Em.Handlebars.compile('{{outlet}}')
  })
});

/* Views */
App.UsersView = Em.View.extend({
  templateName: 'users'
});

/* Router */
App.Router = Em.Router.extend({
  root: Em.Route.extend({

    showActivitesInput: Ember.Route.transitionTo('activities'),

    index: Em.Route.extend({
      route: '/',
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('users', App.User.find());
      }
    }),

    activities: Em.Route.extend({
      route: '/activites/:user',
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('activites', context);
      }
    })

  })
});