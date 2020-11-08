/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click .js-respond': function(e, template) {
		e.preventDefault();
		const category = $(e.currentTarget).attr('data-category')
		var item1 = {}
		var item2 = {}
		if(category === 'Shop'){
			item1 = {
				name: 'Trough',
				happiness: 7,
				price: 40,
				health: 0
			}
			item2 = {
				name: 'Sunglasses',
				happiness: 3,
				price: 30,
				health: 0
			}
		} else if (category === 'Food & Shelter'){
			item1 = {
				name: 'Food',
				happiness: 2,
				health: 10,
				price: 50
			}
			item2 = {
				name: 'Water',
				happiness: 2,
				health: 15,
				price: 60
			}
		} else if(category === 'Care'){
			item1 = {
				name: 'Vitamins',
				happiness: 3,
				health: 3,
				price: 50
			}

				item2 = {
					name: 'Grooming',
					happiness: 3,
					health: 4,
					price: 20
				}

		} else {
			item1 = {
				name: 'Cuddle',
				happiness: 5,
				price: 0,
				health: 0
			}
			item2 = {
				name: 'Roll Around',
				happiness: 3,
				price: 0,
				health: 0
			}
		}


		const pig = Pigs.findOne({userId: Meteor.userId()})
		IonPopup.show({
			title: category,
			template: `What would you like to do with ${pig.name}?`,
			buttons: [
				{
					text: `${item1.name} $${item1.price}`,
					type: 'mutton modal',
					onTap: function() {
						useItem(item1)
						IonPopup.close();
					}
				},
				{
					text: `${item2.name} $${item2.price}`,
					type: 'mutton modal',
					onTap: function() {
						useItem(item2)
						IonPopup.close();
					}
				},
				{
					text: 'X',
					type: 'button-assertive',
					onTap: function() {
						IonPopup.close();
					}
				},
			]
		});
	}
});

let useItem = function(item){
	Meteor.call('useItem', item)	
}


/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	userProfile(){
		let user = Users.findOne({_id: Meteor.userId()})
		console.log(user)
		return user ? user.profile : false;
	},
	pigDetails(){
		let pig = Pigs.findOne({userId: Meteor.userId()})
		return pig ? pig : false
	},
	weekDetails(){
		let week = Weeks.findOne({userId: Meteor.userId()})
		return week ? week : false;
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
	let user = Users.findOne({_id: Meteor.userId()})
	if(user && !user.profile.completed_intro){
		Router.go('/intro')
	}
});


Template.Home.onDestroyed(function () {
});
