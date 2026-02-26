# 💰 Expense Tracker

A personal finance dashboard built while learning React from scratch — documenting every bug, every fix, and every concept learned along the way.

**Live Demo:** _coming soon_

---

## 🛠 Tech Stack

React · Vite · Context API · React Router · Recharts · localStorage · CSS

---

## ✅ Features Built So Far

- Added expenses with title, amount, category and date
- Deleted specific expenses by unique ID
- Global state managed with React Context API
- Data persists on page, refresh using localStorage
- Monthly budget tracker with colour-coded progress bar
- Spending breakdown pie chart by category (Recharts)
- Export expenses to CSV file
- Multi-page navigation with React Router
- Active link highlighting with NavLink
- Redirect to history after adding expense with useNavigate
- Dark / Light mode toggle via Theme Context
- Calculations extracted into custom hook `useExpenseStats`

---

## 🧠 Key Concepts Learned

| Concept | What I Learned |
|---|---|
| `useState` | Storing and updating local component data |
| `useContext` + `createContext` | Sharing data across components without prop drilling |
| Controlled Inputs | React owning form input values via `value` + `onChange` |
| Custom Hooks | Building `useExpenses`, `useTheme`, `useExpenseStats` |
| `useEffect` + localStorage | Persisting data across page refreshes |
| Named vs Default Exports | When to use `{ curly braces }` on imports |
| Component Composition | Breaking UI into small reusable components |
| React Router | Multi-page navigation without full page reload |
| `NavLink` | Styling active navigation links |
| `useNavigate` | Programmatic redirect after form submit |
| `reduce` | Calculating totals and grouping data by category |
| Utility Functions | Writing CSV export without any library |

---

## 🐛 Problems I Hit & How I Solved Them

**1. Context not available in components**
- Problem: `addExpense is not a function` error
- Cause: `addExpense` was not added to the `value` prop of the Provider
- Fix: Added all functions to `value={{ expenses, addExpense, deleteExpense }}`

**2. Form clearing before data was saved**
- Problem: Submitting the form saved empty data
- Cause: `setForm({})` was called before `addExpense(form)`
- Fix: Always call `addExpense(form)` first, then clear the form

**3. Delete removed ALL expenses not just one**
- Problem: Clicking delete on one expense removed everything
- Cause: Expenses had no unique `id` so filter couldn't tell them apart
- Fix: Added `id: Date.now()` when creating each expense in `addExpense`

**4. `useTheme()` called outside Provider**
- Problem: Can't read context before Provider mounts
- Cause: Called `useTheme()` directly in `App` while `ThemeProvider` was also in `App`
- Fix: Created an `AppContent` component that lives inside `ThemeProvider`

**5. Git push rejected on first push**
- Problem: `fatal: couldn't find remote ref main`
- Cause: GitHub created the repo with a README causing a history mismatch
- Fix: Always create empty repos on GitHub with no README ticked

**6. Navbar items stacking vertically**
- Problem: `display: flex` on `<nav>` wasn't affecting `<li>` items
- Cause: Flex needs to go on the direct parent — the `<ul>` not `<nav>`
- Fix: Moved `display: flex` and `flexDirection: row` to the `<ul>` element

**7. Button not submitting form**
- Problem: Submit logic not firing on click
- Cause: Button had `type="button"` which bypasses the form's `onSubmit`
- Fix: Changed to `type="submit"`

**8. NavLink active style not working**
- Problem: Active link style not applying
- Cause: Arrow function returning object needs `()` around `{}` otherwise JS reads it as a function body
- Fix: `style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}`

**9. PieChart not rendering**
- Problem: Chart legend showed but pie was invisible
- Cause: `amount` was stored as a string from the form input
- Fix: Added `parseFloat(expense.amount)` when saving each expense

**10. Progress bar dividing by zero**
- Problem: `percentage` calculated as `NaN` when no budget set
- Cause: Dividing by `budget` when budget was `0`
- Fix: Added guard `budget > 0 ? (spent/budget)*100 : 0`

**11. `useContext()` missing argument**
- Problem: Context returned `undefined`
- Cause: Called `useContext()` without passing the context object
- Fix: Always pass the context — `useContext(ExpenseContext)`

**12. CSV amount stored as string**
- Problem: CSV downloaded with `"82"` instead of `82`
- Cause: Form inputs return strings, not numbers
- Fix: Used `parseFloat()` on amount when adding expense to context

---

## 📁 Folder Structure

```
src/
  components/
    ExpenseForm.jsx
    ExpenseList.jsx
  context/
    ExpenseContext.jsx
  hooks/
    useExpenseStats.js
  pages/
    Dashboard.jsx
    AddExpense.jsx
    History.jsx
    Navbar.jsx
    Footer.jsx
  utils/
    exportCSV.js
  practice/
    CounterApp.jsx
    ThemeApp.jsx
    ThemeContext.jsx
    FriendContext.jsx
    FriendForm.jsx
    FriendList.jsx
    ScoreBoard.jsx
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

---

## 📌 What's Next

- Deploy to Vercel and get a live URL
- Add Tailwind CSS for proper styling
- Filter expenses by category and date range
- Add Clerk authentication so users can log in
- Add AI feature — "Where am I overspending this month?"
