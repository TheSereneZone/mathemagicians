if (Meteor.isClient) {
  Template.body.helpers({
    /*
;      Client-Side Template
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
    User Account Login/Creation
  */
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
  });
}

Router.route("/", function () {
    this.render("Home")
});

Router.route("/about", function () {
  this.render("About")
});