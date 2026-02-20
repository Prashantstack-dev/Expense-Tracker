//This is the entry point for react app similar to index.html
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";



function App() {
  return (
    <>
    {/* ExpenseProvider is a custom hook made using createContext */}
      <ExpenseProvider>   
        <Navbar />
        <Dashboard />
        <Footer />
      </ExpenseProvider>
    </>
  );
}

export default App;
