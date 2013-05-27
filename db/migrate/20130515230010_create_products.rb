class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :price_cents
      t.string :upc_code
      t.boolean :taxable

      t.timestamps
    end
  end
end
