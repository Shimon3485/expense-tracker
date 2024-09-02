// import Form from "./components/Form";
import { useState } from "react";
import FormExpense from "./expenseTracker/components/FormExpense";
import ExpenseList from "./expenseTracker/ExpenseList";
import ExpenseFilter from "./expenseTracker/components/ExpenseFilter";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [expenseList, setExpenseList] = useState([]);

  const [selectedCatagory, setSelectedCatagory] = useState("all categories");

  const filteredExpenses =
    selectedCatagory === "all categories"
      ? expenseList
      : // @ts-ignore
        expenseList.filter((expense) => expense.catagory === selectedCatagory);
  return (
    <>
      <h1>EXPENSE TRACKER</h1>
      <div className="mb-3">
        <FormExpense
          handleData={(expense) => {
            // @ts-ignore
            setExpenseList([
              //@ts-ignore
              ...expenseList,
              //@ts-ignore
              { ...expense, id: expenseList.length + 1 },
            ]);
            console.log(expenseList);
          }}
        />
      </div>
      {expenseList.length !== 0 ? (
        <ExpenseFilter onCatgorySelect={setSelectedCatagory}></ExpenseFilter>
      ) : null}
      <ExpenseList
        onDelete={(id) => {
          //@ts-ignore
          setExpenseList(expenseList.filter((expense) => expense.id !== id));
        }}
        //@ts-ignore
        expenses={filteredExpenses}
      ></ExpenseList>
    </>
  );
}

export default App;
