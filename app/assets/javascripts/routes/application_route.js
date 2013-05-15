Pos.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('categories').set('model', Pos.Category.find());
    this.controllerFor('category').set('model', Pos.Category.find(1));
    this.controllerFor('products').set('model', Pos.Product.find());
  },
  events: {
    openModal: function(content) {
      this.get('controllers.reveal').set('content', content);
      $('#myModal').reveal();
    }
  }
});
