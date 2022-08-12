import { Expenses } from "./components/Expenses"
import { AddExpense } from "./components/Form"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <>
      <Header />
      <Expenses />
      <AddExpense />
    </>
  )
}
