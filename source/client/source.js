if (Meteor.isClient) {
  Template.body.helpers({
    lessons: [
      { url: "https://www.youtube.com/embed/ScMzIvxBSi4", title: "Lesson One", description: "Derpodile was here."},
      { url: "https://www.youtube.com/embed/XQu8TTBmGhA", title: "Lesson Two", description: "Cher Ami is a bird."}
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