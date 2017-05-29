class ExpensesController < ApplicationController

  def index
    expenses = Expense.all
    render json: expenses
  end

  def create
    expense = Expense.create(expense_params)
    expenses = Expense.all
    render json: expenses
  end

  def destroy
    expense = Expense.find(params[:id])
    expense.destroy
    expenses = Expense.all
    render json: expenses
  end

  private

  def expense_params
    params.require(:expense).permit(:name, :value, :type_id, :recurring)
  end
end
