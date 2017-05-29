class ChangeColumnInExpenses < ActiveRecord::Migration[5.0]
  def change
    change_column :expenses, :value, :decimal, :precision => 10, :scale => 2
  end
end
