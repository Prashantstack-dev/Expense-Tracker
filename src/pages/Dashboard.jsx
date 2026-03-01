import { Link } from "react-router-dom";
import { useUser, SignedOut, SignedIn } from "@clerk/clerk-react";
//import custom hooked component
import { MyChartComponent } from "../components/MyChartComponent";
import { useExpenses } from "../context/ExpenseContext";
import { useExpenseStats } from "../hooks/useExpenseStats";

const Dashboard = () => {
  const { user } = useUser();
   const {budget,setBudget} = useExpenses();
   const {spent, remainingBudget, percentage, barColor} = useExpenseStats();
   //
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-[calc(100vh-7rem)]'>
        {/* Show for user not signed in */}
        <SignedOut>
          <h1 className='font-bold text-xl'>
            Welcome To TrackSpend Pro Dashboard
          </h1>
          <Link
            to='/login'
            className='mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 '
          >
            Get Started
          </Link>
        </SignedOut>
        {/* Show when signed in */}
        <SignedIn>
          <h1>Welcome to ExpensePro Dashboard !</h1>
          {/* Budget section */}
         <input type="number" className="border-4" placeholder="Budget" value={budget} onChange={(e) => setBudget(Number(e.target.value))}/>
         <p>{spent}</p>
         <p>{remainingBudget}</p>
         <div className="w-full bg-gray-400 rounded h-4">
          
          <div className='h-4 rounded-lg shadow' style={{width: `${percentage}%`, backgroundColor: barColor}}></div>
          </div>
          {/* Chart */}
          {<MyChartComponent />}
        </SignedIn>
      </div>
    </>
  );
};
export default Dashboard;
