Pos.Product = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  shortDescription: DS.attr('string'),
  priceCents: DS.attr('number'),
  upcCode: DS.attr('string'),
  image: DS.attr('string'),
  taxable: DS.attr('boolean'),

  category: DS.belongsTo('Pos.Category'),
  lineItems: DS.hasMany('Pos.LineItem')

});

Pos.Product.FIXTURES = [
    {
      "id":1,
      "name":"500GB Hard Drive",
      "description":"Great western digital hard drive",
      "priceCents":7995,
      "upcCode":"6149fec4d97dadd9004585c6577829b6",
      "taxable":true,
      "shortDescription":"Great western digital hard drive..."
    },

    {
      "id":2,
      "name":"750GB Hard Drive",
      "description":"Great western digital hard drive",
      "priceCents":9995,
      "upcCode":"496bd99c5e5644688288b526efb79118",
      "taxable":true,
      "shortDescription":"Great western digital hard drive..."
    },

    {
      "id":3,
      "name":"100GB Hard Drive",
      "description":"Great western digital hard drive",
      "priceCents":4995,
      "upcCode":"dfbb653a8550587e033a0c60e0dc7483",
      "taxable":true,
      "shortDescription":"Great western digital hard drive..."
    },

    {
      "id":4,
      "name":"256GB SSD Drive",
      "description":"Great western SDD hard drive",
      "priceCents":23695,
      "upcCode":"a28c34a41de2b3107b5a7a6f3d752683",
      "taxable":true,
      "shortDescription":"Great western SDD hard drive..."
    },

    {
      "id":5,
      "name":"8GB Memory",
      "description":"Great mac compatible Ram",
      "priceCents":7995,
      "upcCode":"abb99772478324c4b5949729970b7b70",
      "taxable":false,
      "shortDescription":"Great mac compatible Ram..."
    },

    {
      "id":6,
      "name":"4GB Memory",
      "description":"Great mac compatible Ram",
      "priceCents":4995,
      "upcCode":"69aaf65dc930e3b4c177a10bf26fae7e",
      "taxable":false,
      "shortDescription":"Great mac compatible Ram..."
    },

    {
      "id":7,
      "name":"16GB Memory",
      "description":"Great mac compatible Ram",
      "priceCents":12995,
      "upcCode":"4e7249fd11239e9331a6495eacad168e",
      "taxable":false,
      "shortDescription":"Great mac compatible Ram..."
    },

    {
      "id":8,
      "name":"32GB Memory",
      "description":"Great mac compatible Ram",
      "priceCents":499995,
      "upcCode":"48feb8e0ca441c6e179657147279229d",
      "taxable":false,
      "shortDescription":"Great mac compatible Ram..."
    },

    {
      "id":9,
      "name":"48x DVD Drive",
      "description":"3.5 Drive",
      "priceCents":16999,
      "upcCode":"302782a8-8097-4714-ba0f-51d6f7ddbcfe",
      "taxable":true,
      "shortDescription":"3.5 Drive..."
    },

    {
      "id":10,
      "name":"32x DVD Drive",
      "description":"3.5 Drive",
      "priceCents":10299,
      "upcCode":"7b80df2f-1d48-4a26-a398-855f08fa6576",
      "taxable":true,
      "shortDescription":"3.5 Drive..."
    },

    {
      "id":11,
      "name":"24x DVD Drive",
      "description":"3.5 Drive",
      "priceCents":8999,
      "upcCode":"698945b3-f256-494a-b04e-c308c8d9316b",
      "taxable":true,
      "shortDescription":"3.5 Drive..."
    },

    {
      "id":12,
      "name":"12x DVD Drive",
      "description":"3.5 Drive",
      "priceCents":999,
      "upcCode":"f2f841f2-3ea6-49aa-a58e-066e14882e03",
      "taxable":true,
      "shortDescription":"3.5 Drive..."
    }
  ];


