Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
	'click .js-action-sheet-settings': function(){
		let pig = Pigs.findOne({userId: Meteor.userId()})
		let vet = {
			name: 'Vet',
			happiness: 2,
			health: 10,
			price: 100
		}
		IonActionSheet.show({
			titleText: pig.name,
			buttons: [
				{ text: '<i class="icon ion-social-usd"></i></span> Balances' },
				{ text: '<i class="icon ion-gear-b"></i></span> Settings ' },
				{ text: '<i class="icon ion-bug"></i></span> Trigger Emergency ' },
			],
			destructiveText: '<i class="icon ion-heart-broken"></i> Logout' ,
			cancelText: 'Cancel',
			cancel: function() {
				return true;
			},
			buttonClicked: function(index) {
				switch(index){
					case 0:
						Router.go('/balances')
					return true;
					case 1:
						Router.go('/settings')
					return true;
					break;	
					case 2:
						IonPopup.show({
						title: `${pig.name} is sick! Take ${pig.name} to the vet?`,
						buttons: [
							{
								text: `Yes? $${vet.price}`,
								type: 'mutton modal',
								onTap: function(){
									IonPopup.close();
									useItem(vet)
								}
							},
							{
								text:"No, I'll risk it",
								type: 'mutton modal',
								onTap: function(){
									IonPopup.close();
								}
							}
						]
					});
					default:
						return true;
				}
			},
			destructiveButtonClicked: function() {
				IonPopup.confirm({
					title: 'You really want to logout?',
					template: ':(',
					onOk: function() {
						Meteor.logout();
						Router.go('/');
						IonActionSheet.close();
						return true;
					},
					onCancel: function() {
						return false;
					}
				});
			}
		});
	}
});


let useItem = function(item){
	Meteor.call('useItem', item)	
	checkStatus();
}

Template.MasterLayout.rendered = function(){
}
