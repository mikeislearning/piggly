/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
	updatePigName(name){
		Pigs.update({userId: this.userId}, {$set: {name: name}})
	},
	completeIntro(){
		Users.update({_id: this.userId}, {$set: {"profile.completed_intro": true}})
	},
	useItem(item){
		// multiply price by percentage of the USER accounts, and add those accounts appropriately, and subtract from checking
		let user = Users.findOne({_id: this.userId});
		Users.update({_id: user._id}, {$set: {
			"profile.credit_balance": user.profile.credit_balance - parseInt(user.profile.credit_percent * item.price),
			"profile.savings_balance": user.profile.savings_balance + parseInt(user.profile.savings_percent * item.price),
			"profile.mortgage_balance": user.profile.mortgage_balance - parseInt(user.profile.mortgage_percent * item.price),
			"profile.rrsp_balance": user.profile.rrsp_balance + parseInt(user.profile.rrsp_percent * item.price),
			"profile.checking_balance": user.profile.checking_balance - item.price
	 	}})
		// increase the pig's health and happiness based on item stats
		let pig = Pigs.findOne({userId: user._id})
		Pigs.update({userId: user._id}, {$set: {
			health: pig.health + item.health,
			happiness: pig.happiness + item.happiness,
		}})

		let week = Weeks.findOne({userId: user._id})
		Weeks.update({userId: user._id}, {$set:{total: week.total + item.price}})
	},
});
