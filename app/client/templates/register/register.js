Template.register.events({
	'submit #register': function(event) {
		event.preventDefault();
		var emailVar = event.target.registerEmail.value;
		var passwordVar = event.target.registerPassword.value;
		Accounts.createUser({
			email: emailVar,
			password: passwordVar
		});
	}
});
