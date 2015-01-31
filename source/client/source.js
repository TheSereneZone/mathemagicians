if (Meteor.isClient) {
  Template.body.helpers({
    lessons: [
      { url: "https://www.youtube.com/embed/ScMzIvxBSi4"},
      { url: "https://www.youtube.com/embed/XQu8TTBmGhA"}
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