class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.string :name
      t.decimal :value
      t.integer :type_id
      t.boolean :recurring, :default => false
      t.timestamps
    end
  end
end
