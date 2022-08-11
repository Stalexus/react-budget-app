import { SubmitHandler, useForm } from "react-hook-form";
import { useExpenseContext } from "../../context/ExpensesContext";
import { Title } from "../Title";
import { v4 as uuidv4 } from "uuid";
import { AddExpenseButton, AddExpenseError, AddExpenseInput, ExpenseForm } from "./styles";

type IFormInput = {
  name: string;
  cost: number;
};

export const AddExpense = () => {
  const { addNewExpense } = useExpenseContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSymbit: SubmitHandler<IFormInput> = ({ name, cost }) => {
    addNewExpense({
      id: uuidv4(),
      body: name,
      cost,
    });
    reset();
  };
  return (
    <ExpenseForm onSubmit={handleSubmit(onSymbit)}>
      <Title text="Add Expense" />
      <AddExpenseInput
        {...register("name", {
          required: "The field is not filled",
        })}
        placeholder="enter name ..."
        type="text"
      />
      {errors.name && (
        <AddExpenseError>{errors.name.message}</AddExpenseError>
      )}
      <AddExpenseInput
        {...register("cost", {
          required: "The field is not filled",
          valueAsNumber: true,
        })}
        placeholder="enter cost ..."
        type="number"
      />
      {errors.cost && (
        <AddExpenseError>{errors.cost.message}</AddExpenseError>
      )}
      <AddExpenseButton type="submit">Done</AddExpenseButton>
    </ExpenseForm>
  );
};