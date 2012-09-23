
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

/* Models */
App.User = Em.Object.extend();
App.User.reopenClass({
  allUsers: [],
  find: function(){
    this.allUsers = [];
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
  },
  findOne: function(id){
    var user = App.User.create({
      id: id
    });
    $.ajax({
      url: 'users/'+id+'.json',
      dataType: 'json',
      context: user,
      success: function(response){
        this.setProperties(response);
      }
    });
    return user;
  }
});

// App.Exercises = Em.Object.extend();
// App.Exercises.reopenClass({
//   usersExercises
// });

/* Controllers */
App.UsersController = Em.ArrayController.extend();
App.ActivitesController = Em.ArrayController.extend();

App.ApplicationView = Em.View.extend({
  templateName: 'application'
});

/* Views */
App.UsersView = Em.View.extend({
  templateName: 'users'
});

App.ActivitesView = Em.View.extend({
  templateName: 'activities'
});

/* Router */
App.Router = Em.Router.extend({
  enableLogging: true,
  root: Em.Route.extend({

    index: Em.Route.extend({
      route: '/',
      showActivitesInput: Em.Route.transitionTo('activities'),
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('users', App.User.find());
      }
    }),

    activities: Em.Route.extend({
      route: '/activites',
      selectUser: Em.Route.transitionTo('index'),
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet('activites', context);
      },
      /*serialize: function(router, context){
        return {id: context.get('id')}
      },
      deserialize: function(router, urlParams){
        return App.User.findOne(urlParams.id);
      }*/
    })

  })
});