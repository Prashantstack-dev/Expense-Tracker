import { useExpenses } from "../context/ExpenseContext";

const useExpenseStats = () => {
    const {expenses, budget} = useExpenses();

    const spent = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  //Calculate remaining
   const remainingBudget = budget - spent;

   //calculate percentage
   const percentage = budget > 0 ? Math.min( (spent/budget)*100, 100): 0;

   //bar color to put in conditional
   const barColor = remainingBudget < 0 ? 'red' : percentage > 80 ? 'orange' : 'green';

   //transform expenses array into chart data
  const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#3b82f6"];
  const charData = expenses.reduce((acc, expense) => {
    //Does my sheet already have a row for this category?"
    const existing = acc.find((item) => item.name === expense.category);
    if (!existing) {
      acc.push({ name: expense.category, value: expense.amount });
    } else {
      existing.value += expense.amount;
    }
    return acc;
  }, []);
  
  return (
    {
        spent,
        remainingBudget,
        percentage,
        barColor,
        charData,
        COLORS
    }
  )
}

export default useExpenseStats
