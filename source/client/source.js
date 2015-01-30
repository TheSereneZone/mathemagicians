if (Meteor.isClient) {

  Template.body.helpers({
    lessons: [
      { text: "Binary"}
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
