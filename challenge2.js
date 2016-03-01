//create a collection - mongoDb

Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);
Template.messages.helpers({ //here change name by messages because it's the template name
    messages: function () { // same here instead of counter
     return Messages.find({});
    }
  });

 // define a helpers for the template here for update the message type in the textarea
 Template.messages.events({
  'keypress textarea': function(e, instance) {
    if (e.keyCode == 13) { //enter key pressed
      var value = instance.find('textarea').value; 
      instance.find('textarea').value = '';

// ici pr inserer les messages et les voir apparaitre
    Messages.insert({ // here the name of the template
      message: value,
      timestamp: new Date(),
      user: Meteor.userId()
    });
  }
}

 });

 Template.message.helpers //template message pr avoir le nom de l'user avec le message
    user: function() {
      return Meteor.users.findOne({_id: this.user});

 },

 // show the time 

 time : function() {
  return this.timestamp;
 }
 });

 Accounts.ui.config({ // account user interface config
  passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
 });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
