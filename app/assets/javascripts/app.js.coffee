# Application

window.app ||= Em.Application.create(
    VERSION: 1.0
    rootElement: '#app'
    storeNamespace: 'tracker'
    ApplicationController: Em.Controller.extend()
    ready:=>
      this.initialize
  )