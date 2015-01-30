if (Meteor.isClient) {
  Template.body.helpers({
    lessons: [
      { text: "Binary"}
    ]
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
