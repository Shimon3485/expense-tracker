import React from "react";
import ExpenseFilter from "./components/ExpenseFilter";

interface Expense {
  id: number;
  description: string;
  amount: number;
  catagory: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div className="mb-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Catagory</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.catagory}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${expenses.reduce((acc, cur) => cur.amount + acc, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
