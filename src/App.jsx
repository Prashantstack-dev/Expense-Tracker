//This is the entry point for react app similar to index.html
import "./App.css";
import ProtectLayout from "./layouts/protectLayout.jsx"
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";


import { ExpenseProvider } from "./context/ExpenseContext.jsx";

import { ThemeProvider, useTheme } from "./practice/ThemeContext.jsx";
import { Routes, Route } from "react-router-dom";

import AddExpense from "./pages/AddExpense.jsx";
import History from "./pages/History.jsx";


function AppContent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ background: theme === 'dark' ? '#0d1117' : '#fafafa', minHeight: '100vh' }}>

      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Dashboard />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectLayout />}>


          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/history" element={<History />} />



        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      {/* ExpenseProvider is a custom hook made using createContext */}
      <ExpenseProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </ExpenseProvider>
    </div>
  );
}

export default App;
