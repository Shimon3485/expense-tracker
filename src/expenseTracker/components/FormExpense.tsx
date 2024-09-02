import React, { useRef, useState } from "react";
import { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { any, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../helper/catgories";

const schema = z.object({
  description: z.string().min(1, { message: "Description is required." }),
  amount: z.number({ invalid_type_error: "Amount is required ." }),
  catagory: z.string().min(1, { message: "Categories is required." }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  handleData: (d: any) => void;
}

const FormExpense = ({ handleData }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    // console.log(data);
    handleData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-labal">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <div className="text-danger">{errors.description.message}</div>
        )}
        {errors.description?.type === "required" && (
          <p className="text-danger">The name field is required </p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">
            The name field must be at least 3 characters{" "}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", {
            valueAsNumber: true,
          })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <div className="text-danger">{errors.amount.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="catagory" className="form-label">
          Categories
        </label>
        <select {...register("catagory")} className="form-select" id="catagory">
          <option key={"category"} value={""}>
            Choose a category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.catagory && (
          <div className="text-danger">{errors.catagory.message}</div>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormExpense;
