DS.RESTAdapter.configure("plurals", { category: "categories" });

Pos.Store = DS.Store.extend({
  revision: 12
});

// Pos.Store.registerAdapter('Pos.Product', DS.FixtureAdapter);
// Pos.Store.registerAdapter('Pos.Category', DS.FixtureAdapter);

// DS.RESTAdapter.map('Pos.Category', {
//   products: { embedded: 'always'}
// });

// DS.RESTAdapter.map('Pos.Order', {
//   lineItems: { embedded: 'always'}
// });
