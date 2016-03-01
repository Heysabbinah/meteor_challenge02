//create a collection - mongoDb

Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.messages.helpers({ //here change name by messages because it's the template name
    messages: function () { // same here instead of counter
      return Session.get('counter');
    }
  });
 // define a helpers for the template

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
