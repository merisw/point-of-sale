Pos.Category = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),

  products: DS.hasMany('Pos.Product')
});


Pos.Category.FIXTURES = [
  {"id":1,"name":"Hard Drives","image":null,"products":[1,2,3,4]},
  {"id":2,"name":"Memory","image":null,"products":[5,6,7,8]},
  {"id":3,"name":"Optical Drives","image":null,"products":[9,10,11,12]}
];
