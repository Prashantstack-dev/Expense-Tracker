# 💰 Expense Tracker

A personal finance dashboard built while learning React from scratch.

**Live Demo:** _coming soon_

---

## 🛠 Tech Stack

React · Vite · Context API · localStorage · CSS

---

## ✅ Features Built So Far

- Add expenses with title, amount, category and date
- Global state managed with React Context API
- Data persists on page refresh using localStorage
- Dark / Light mode toggle via Theme Context
- Responsive Navbar with theme switcher

---

## 🧠 Key Concepts Learned

| Concept | What I Learned |

| `useState` | Storing and updating local component data |
| `useContext` + `createContext` | Sharing data across components without prop drilling |
| Controlled Inputs | React owning form input values via `value` + `onChange` |
| Custom Hooks | Building `useExpenses` and `useTheme` to simplify context access |
| `useEffect` + localStorage | Persisting data across page refreshes |
| Named vs Default Exports | When to use `{ curly braces }` on imports |
| Component Composition | Breaking UI into small reusable components |

---

## 🐛 Problems I Hit & How I Solved Them

**1. Context not available in components**
- Problem: `addExpense is not a function` error
- Cause: `addExpense` was not added to the `value` prop of the Provider
- Fix: Added both `expenses` and `addExpense` to `value={{ expenses, addExpense }}`

**2. Form clearing before data was saved**
- Problem: Submitting the form saved empty data
- Cause: `setForm({})` was called before `addExpense(form)`
- Fix: Always call `addExpense(form)` first, then clear the form

**3. `useTheme()` called outside Provider**
- Problem: Can't read context before Provider mounts
- Cause: Called `useTheme()` directly in `App` while `ThemeProvider` was also in `App`
- Fix: Created an `AppContent` component that lives inside `ThemeProvider`

**4. Git push rejected on first push**
- Problem: `fatal: couldn't find remote ref main`
- Cause: GitHub created the repo with a README causing a history mismatch
- Fix: Always create empty repos on GitHub with no README ticked

**5. Navbar items stacking vertically**
- Problem: `display: flex` on `<nav>` wasn't affecting `<li>` items
- Cause: Flex needs to go on the direct parent of the items — the `<ul>` not `<nav>`
- Fix: Moved `display: flex` and `flexDirection: row` to the `<ul>` element

**6. Button not submitting form**
- Problem: Alert and submit logic not firing on click
- Cause: Button had `type="button"` which bypasses the form's `onSubmit`
- Fix: Changed to `type="submit"` so clicking triggers `onSubmit` automatically

---

## 📁 Folder Structure

```
src/
  components/
    ExpenseForm.jsx
    ExpenseList.jsx
    ExpenseItem.jsx
  context/
    ExpenseContext.jsx
  pages/
    Dashboard.jsx
    Navbar.jsx
    Footer.jsx
  practice/
    CounterApp.jsx
    ThemeApp.jsx
    ThemeContext.jsx
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

---

## 📌 What's Next

- Delete expenses
- localStorage persistence
- Filter by category
- Charts with Recharts
- Monthly budget tracker
- Deploy to Vercel