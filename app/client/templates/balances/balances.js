Template.balances.helpers({
	userProfile(){
		let user = Users.findOne({_id: Meteor.userId()})
		console.log(user)
		return user ? user.profile : false;
	}
});
