import { useExpenses } from "../context/ExpenseContext"
import { useState } from "react";

const ExpenseAccordian = () => {
    const{expenses} = useExpenses();
    
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    function handleClick(){
        console.log("Clicked", category)
        setIsOpenCategory(!isOpenCategory);
        

    }
   
   const groupedCategory = expenses.reduce((acc, current)=> {
   const key = current.category;
   //key doesn't exist in acc. create an empty array
   if(!acc[key]){
    acc[key] =[];
   }
   //push the current object into corresponding group array
   acc[key].push(current);
   return acc

   }, {})
   console.log(groupedCategory)
  return (
    <ul className="divide-y divide-gray-200">
      { Object.entries(groupedCategory).map(([category,items]) => (
        <li key={category}>
  <div 
    className="flex justify-between items-center py-3 px-4 cursor-pointer hover:bg-gray-50"
    onClick={() => { /* toggle logic here */ 
       isOpenCategory === category ? setIsOpenCategory(null) : setIsOpenCategory(category);

    }}
  >
    <span className="font-medium text-gray-900">
      {category} <span className="text-gray-500">({items.length})</span>
    </span>
    <span className={`transition-transform ${isOpenCategory === category ? 'rotate-180' : ''}`}>
      ▼
    </span>
  </div>

  {isOpenCategory === category && (
    <div className="px-4 pb-4 bg-gray-50">
      {items.map(expense => (
        <div key={expense.id} className="py-2 border-b last:border-0">
          {expense.description} – ${expense.amount} – {expense.date || 'no date'}
        </div>
      ))}
    </div>
  )}
</li>
      ))}
    </ul>
  )
    
}

export default ExpenseAccordian
