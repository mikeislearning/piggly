// creates a new pet object once you name it
// and a weeks object
// once you complete the intro, it changes the value of the 'completed_intro' to true...has a checker on home rendered to see if that's true
Template.intro.helpers({
	canSubmitName(){
		const canSubmitName = Template.instance().canSubmitName;
		return canSubmitName ? canSubmitName.get().toString() : false;
	},
	pigName(){
		let pig = Pigs.findOne({userId: Meteor.userId()})
		return pig ? pig.name : '';
	}
});

Template.intro.events({
	'click .js-set-name':function(){
		let pigName = $('.js-pig-name-input').val();
		Meteor.call('updatePigName', pigName)
		nextSlide();
	},
	'click .js-next-slide':function(){
		nextSlide()
	},
	'click .js-first-feed':function(e){
	
		const price = $(e.currentTarget).attr('data-price')
		var item = {}
		item.name = 'Food'
		if(price === '5'){
			item = {
				health: 2,
				price: 5,
				happiness: 1,
			}
		} else if (price === '10'){
			item = {
				health: 3,
				price: 10,
				happiness: 2,
			}
		} else{
			item = {
				health: 4,
				price: 15,
				happiness: 3,
			}
		}

		Meteor.call('useItem', item)

		Meteor.call('completeIntro')
		Router.go('/')
	
	},
	'keyup .js-pig-name-input': function(e){
		const canSubmitName = Template.instance().canSubmitName;
		const nameLength = e.currentTarget.value.length;
		return nameLength > 0 ? canSubmitName.set(true) : canSubmitName.set(false);
	}
});

function nextSlide(){
	let currentSlide = $('li.slick-active')
	currentSlide.next().find('span').click();
}


Template.intro.created = function(){
	this.canSubmitName = new ReactiveVar(false);
};
