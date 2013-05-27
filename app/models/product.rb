class Product < ActiveRecord::Base
  attr_accessible :description, :name, :price_cents, :taxable, :upc_code, :category_id

  belongs_to :category
  has_many :line_items
end
