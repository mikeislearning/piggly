Weeks = new Mongo.Collection('weeks');

Schemas.Week = new SimpleSchema({
	userId: {
		type: String,
		label: 'id of user'
	},
	goal: {
		type: Number,
		label: 'Weekly goal the user is expected to achieve',
		defaultValue: 180
	},
	created: {
		type: Date,
		label: 'Date the user starts the week'
	},
	total: {
		type: Number,
		label: 'The amount the user has contributed to the total so far',
		defaultValue: 0
	},
	achievement: {
		type: Boolean,
		label: 'Whether the user has been shown an achievement for their progress',
		defaultValue: false
	}
});

Weeks.attachSchema(Schemas.Week)
