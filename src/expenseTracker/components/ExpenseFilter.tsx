import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import categories from "../helper/catgories";

interface Props {
  onCatgorySelect: (e: any) => void;
}

const ExpenseFilter = ({ onCatgorySelect }: Props) => {
  const { register } = useForm();
  return (
    <div className="mb-5">
      <select
        {...register("categories")}
        className="form-select"
        id="categories"
        onClick={(e) => {
          onCatgorySelect(e.currentTarget.value);
        }}
      >
        <option value={"all categories"}>All catgories</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
