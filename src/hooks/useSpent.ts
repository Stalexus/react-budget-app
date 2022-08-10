import { useEffect, useState } from "react";
import { useExpenseContext } from "../context";

export const useSpent = () => {
    const { expenses } = useExpenseContext();
    const [spent, setSpent] = useState<number>(() => {
        return expenses.reduce((acc, expense) => {
            return (acc += expense.cost);
        }, 0);
    });
    useEffect(() => {
        setSpent(() => {
            return expenses.reduce((acc, expense) => {
                return (acc += expense.cost);
            }, 0);
        });
    }, [expenses]);

    return spent;
};