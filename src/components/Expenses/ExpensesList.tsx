import { ChangeEvent, useState } from "react";
import { useExpenseContext } from "../../context";
import { v4 as uuidv4 } from 'uuid';

export const ExpensesList = () => {
    const { expenses, setExpenses, deleteExpenses } = useExpenseContext();
    const [newExpense, setNewExpense] = useState('');

    const handleNewExpense = (event: ChangeEvent<HTMLInputElement>) => {
        setNewExpense(event.target.value);
        setExpenses({
            id: uuidv4(),
            body: event.target.value,
            cost: 100,
        })
    };

    return (
        <>
            <input type="text" value={newExpense} onChange={handleNewExpense} />
            <ul>
                {expenses.map((expense) => {
                    return <li key={expense.id}>{expense.body}</li>
                })}
            </ul>
        </>
    )
}
