if (Meteor.isClient) {
  Template.body.helpers({
    /*
;      Client-Side Template
    */

    subject: [
      { title: "Binary",
        description: "Placeholder."
      },
      { title: "Geometry",
        description: "Placeholder"
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
  game.destroy()
});

Router.route("/about", function () {
  this.render("About")
  game.destroy()
});

Router.route("/game", function () {
  this.render("Game")
});