Pigs = new Mongo.Collection('pigs');

Schemas.Pig = new SimpleSchema({
	userId: {
		type: String,
		label: 'id of the owner of the pig'
	},
	name: {
		type: String,
		label: 'Name of the pig',
		defaultValue: 'Pigglesworth'
	},
	level: {
		type: Number,
		label: 'level that the pig is at',
		defaultValue: 1
	},
	health: {
		type: Number,
		label: 'level that the pig',
		defaultValue: 50
	},
	happiness: {
		type: Number,
		label: 'happiness of the pig',
		defaultValue: 50
	},
	created: {
		type: Date,
		label: 'date of pig creation'
	},
	lastEmergency: {
	type: Date,
	label: 'date of last emergency',
	optional: true
	}
});

Pigs.attachSchema(Schemas.Pig);
