class AddColumnToExpenses < ActiveRecord::Migration[5.0]
  def change
    add_column :expenses, :deposit, :boolean, :default => false
  end
end
