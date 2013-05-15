Pos.OrderPaymentController = Ember.ObjectController.extend({
	needs: 'order',
	amountTendered: "",

	changeDue: function() {
    var amountTendered = parseInt(this.get('amountTendered') * 100),
    		total =  this.get('controllers.order').get('total'),
    		change = parseInt(amountTendered - total)

   	if (change > 0) {
   		return change;
   	}
  }.property('amountTendered', 'total'),

  totalDue: function() {
    return this.get('controllers.order').get('total')
  }.property('controllers.order.total'),

  tender: function() {
  	this.get('controllers.order').send('tender')
	},
  closeModal: function () {
    var order = this.get('controllers.order').get('model');
    return this.transitionToRoute('order', order);
  }

});
