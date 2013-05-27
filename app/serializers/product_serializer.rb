class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :price_cents, :taxable, :upc_code, :category_id, :short_description
  has_many :line_items

  def short_description
    description.truncate(40)
  end
end
