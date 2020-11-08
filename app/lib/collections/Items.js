Schemas = {};

Items = new Mongo.Collection('items');

Schemas.Item = new SimpleSchema({
	name:{
		type: String,
		label: 'name of the item'
	},
	category: {
		type: String,
		label: 'category it falls under - accessory, necessity, emergency, or love',
	},
	healthImpact:{
		type: Number,
		label: 'the way it positively affects the pigs health',
		defaultValue: 0
	},
	happinessImpact:{
		type: Number,
		label: 'the way it positively affects the pigs happiness',
		defaultValue: 0
	},
	price:{
		type: Number,
		label: 'cost of the item',
		defaultValue: 0
	}
})

Items.attachSchema(Schemas.Item);
