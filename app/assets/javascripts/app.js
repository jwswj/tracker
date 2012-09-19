
/* Application */
window.app || (window.app = Em.Application.create({
  VERSION: 1.0,
  rootElement: '#app',
  storeNamespace: 'tracker',
  ApplicationController: Em.Controller.extend(),
  ready: function() {
    return this.initialize;
  }
}));


/* Models */
app.User = Em.Object.extend({
  id: null,
  name: null,
  email: null,
  phone: null,
  displayed: false
});

app.Exercise = Em.Object.extend({
  id: null,
  title: null
});

app.Activity = Em.Object.extend({
  id: null,
  description: null,
  exercise_id: null,
  user_id: null
});


/* Controllers */

/* Views */