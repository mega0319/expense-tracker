class Expense < ApplicationRecord
  default_scope { order(created_at: :desc) }
  has_many :categories
end
