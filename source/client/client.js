if (Meteor.isClient) {
  Template.body.helpers({
    /*
      Client-Side Template
    */
    lessons: [
      { url: "https://www.youtube.com/embed/ScMzIvxBSi4", 
        title: "Lesson One",
        description: "Derpodile was here."
      },
      { url: "https://www.youtube.com/embed/XQu8TTBmGhA", 
        title: "Lesson Two",
        description: "Cher Ami is a bird."
      }
    ]
  });

  /*
    Necessary for user login.
  */
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

Router.route("/", function () {
  if (!Meteor.userId()) {
    this.render("Introduction");
  } else {
    this.render("Home", {
      data: function () { return Items.findOne({_id: this.params._id}); }
    });
  };
});

Router.route("/about", function () {
  this.render("About")
});