Users = Meteor.users;

if(Meteor.isServer){
	Accounts.onCreateUser((options, user)=> {

		if (options.profile) {
			// using the facebook login
			user.profile = options.profile;
		} else {
			// if using the regular username login
			user.profile = {};
			user.profile = {
				family: false,
				kids: false,
				home: false,
				student: false,
				credit_percent: 0.4,
				savings_percent: 0.2,
				mortgage_percent: 0.2,
				rrsp_percent: 0.2,
				credit_balance: 1200,
				savings_balance: 300,
				mortgage_balance: 85000,
				rrsp_balance: 0,
				checking_balance: 4000,
				completed_intro: false
			}
		}

		userId = user._id

		Pigs.insert({userId: userId, created: new Date()})
		Weeks.insert({userId: userId, created: new Date()})

		return user;
	});


	Accounts.onLogin((options)=>{
		//console.log('logged in!')
		//if (!options.user.profile) {
			//Meteor.users.update({_id: options.user._id},{$set:{profile:{name: name, picture: picture}, limit: 50}})
		//}
	})
}  
