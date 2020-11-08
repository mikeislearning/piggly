
Purchases = new Mongo.Collection('purchases');

Schemas.Purchase = new SimpleSchema({
	userId: {
		type: String,
		label: 'user id of the purchaser'
	},
	itemId: {
		type: String,
		label: 'id of item that was purchased'
	},
	date: {
		type: Date,
		label: 'date purchase made'
	}
});

Purchases.attachSchema(Schemas.Purchase);
