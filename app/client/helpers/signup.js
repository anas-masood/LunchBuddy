Template.signup.events({
    'submit #js-signup-form' : function (event) {

        event.preventDefault();
       
        let firstName = event.target.firstName.value;
        let lastName = event.target.lastName.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        
        let user = {
          email: email,
            password: password,
            profile: {
                firstName: firstName,
                lastName: lastName
            }

        };

        Meteor.call('createNewUser', user, function(err, data){
            if(!err){
                Meteor.loginWithPassword(email, password, function (err) {
                    if(!err){
                        Router.go('/');
                    }
                    else {
                        FlashMessages.sendError(err.message);
                    }
                });

            }
        });

    }
});