Expense Tracker
A personal finance dashboard built while learning React from scratch — documenting every bug, every fix, and every concept learned along the way.
Live Demo: https://track-spend-pro.vercel.app

🛠 Tech Stack
React · Vite · Context API · React Router · Recharts · Tailwind CSS · Supabase · Clerk · @google/genai

✅ Features Built So Far

Added expenses with title, amount, category and date
Deleted specific expenses by unique ID
Global state managed with React Context API
Monthly budget tracker with colour-coded progress bar
Spending breakdown pie chart by category (Recharts)
Export expenses to CSV file
Multi-page navigation with React Router
Active link highlighting with NavLink
Redirect to history after adding expense with useNavigate
Dark / Light mode toggle via Theme Context
Calculations extracted into custom hook useExpenseStats
Clerk authentication with protected routes via ProtectLayout
Supabase database replacing localStorage for expenses
Expenses filtered per user using userId from Clerk
AI spending insights and anomaly detection via Gemini API
Expense accordion grouped by category with expand/collapse


🧠 Key Concepts Learned
ConceptWhat I Learned useStateStoring and updating local component datauseContext + createContextSharing data across components without prop drillingControlled InputsReact owning form input values via value + onChangeCustom HooksBuilding useExpenses, useTheme, useExpenseStatsuseEffect + localStoragePersisting data across page refreshesNamed vs Default ExportsWhen to use { curly braces } on importsComponent CompositionBreaking UI into small reusable componentsReact RouterMulti-page navigation without full page reloadNavLinkStyling active navigation linksuseNavigateProgrammatic redirect after form submitreduceCalculating totals and grouping data by categoryObject.entries()Looping over grouped objects in JSXUtility FunctionsWriting CSV export without any librarySupabaseCRUD operations with .select(), .insert(), .delete(), .eq()Clerk useAuth()Extracting userId to scope data per userGemini APISending structured prompts and parsing JSON responsesJSON.stringify / JSON.parseConverting data to send to AI and parse responses back

🐛 Problems I Hit & How I Solved Them
1. Context not available in components

Problem: addExpense is not a function error
Cause: addExpense was not added to the value prop of the Provider
Fix: Added all functions to value={{ expenses, addExpense, deleteExpense }}

2. Form clearing before data was saved

Problem: Submitting the form saved empty data
Cause: setForm({}) was called before addExpense(form)
Fix: Always call addExpense(form) first, then clear the form

3. Delete removed ALL expenses not just one

Problem: Clicking delete on one expense removed everything
Cause: Expenses had no unique id so filter couldn't tell them apart
Fix: Added id: Date.now() when creating each expense in addExpense

4. useTheme() called outside Provider

Problem: Can't read context before Provider mounts
Cause: Called useTheme() directly in App while ThemeProvider was also in App
Fix: Created an AppContent component that lives inside ThemeProvider

5. Git push rejected on first push

Problem: fatal: couldn't find remote ref main
Cause: GitHub created the repo with a README causing a history mismatch
Fix: Always create empty repos on GitHub with no README ticked

6. Navbar items stacking vertically

Problem: display: flex on <nav> wasn't affecting <li> items
Cause: Flex needs to go on the direct parent — the <ul> not <nav>
Fix: Moved display: flex and flexDirection: row to the <ul> element

7. Button not submitting form

Problem: Submit logic not firing on click
Cause: Button had type="button" which bypasses the form's onSubmit
Fix: Changed to type="submit"

8. NavLink active style not working

Problem: Active link style not applying
Cause: Arrow function returning object needs () around {} otherwise JS reads it as a function body
Fix: style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}

9. PieChart not rendering

Problem: Chart legend showed but pie was invisible
Cause: amount was stored as a string from the form input
Fix: Added parseFloat(expense.amount) when saving each expense

10. Progress bar dividing by zero

Problem: percentage calculated as NaN when no budget set
Cause: Dividing by budget when budget was 0
Fix: Added guard budget > 0 ? (spent/budget)*100 : 0

11. useContext() missing argument

Problem: Context returned undefined
Cause: Called useContext() without passing the context object
Fix: Always pass the context — useContext(ExpenseContext)

12. CSV amount stored as string

Problem: CSV downloaded with "82" instead of 82
Cause: Form inputs return strings, not numbers
Fix: Used parseFloat() on amount when adding expense to context

13. Semicolon breaking Supabase query chain

Problem: .eq() filter was not applying
Cause: A semicolon after .select('*') terminated the chain early
Fix: Removed the semicolon so the full chain ran as one expression

14. userId never reaching Supabase

Problem: Expenses were not filtered by user
Cause: useAuth() was imported but never called inside the component
Fix: Called const { userId } = useAuth() inside ExpenseProvider

15. fetchExpenses() called outside useEffect

Problem: Infinite re-render loop
Cause: Calling the function directly in the component body runs on every render
Fix: Moved the call inside useEffect with [userId] as dependency

16. expenses vs expense naming confusion

Problem: Supabase insert was sending the entire expenses array instead of one new item
Cause: Used ...expenses (plural, the state array) instead of ...expense (singular, the parameter)
Fix: Spread the correct variable — ...expense

17. getInsights naming conflict

Problem: React threw an error about duplicate variable names
Cause: Both the imported function and the state were named getInsights
Fix: Renamed state to insights and setter to setInsights

18. response.text vs JSON.parse confusion

Problem: Didn't understand why both were needed
Cause: Thought they did the same thing
Fix: response.text extracts the raw string from Gemini's response object; JSON.parse converts that string into a usable JavaScript object

19. Gemini wrapping response in markdown code fences

Problem: JSON.parse threw SyntaxError: Unexpected token ''`
Cause: Gemini returned ```json ... ``` instead of plain JSON
Fix: Stripped fences with .replace(/```json|```/g, "").trim() before parsing

20. API rate limiting on free tier

Problem: 429 Too Many Requests after several clicks
Cause: Gemini free tier has a limit of 20 requests per day per model
Fix: Switched to a model with a higher free quota; added error handling

21. ## Session 3 — NoteApp Feature
Built a note system linked to expenses. Each expense in the History page has an "Add Note" button that opens an inline form with a title and personal/business tag. Notes are saved to a Supabase Notes table and filtered per user.
** Functions built: fetchNotes, addNotes, deleteNotes in NoteContext — same Supabase pattern as expenses.
Bug hit: RLS policy on Notes table blocked inserts with a 401 error. Temporarily disabled RLS to unblock development. ** TODO: properly integrate Clerk + Supabase JWT auth before production deploy.

📁 Folder Structure
src/
  components/
    ExpenseForm.jsx
    ExpenseList.jsx
    ExpenseAccordian.jsx
    MyChartComponent.jsx
  context/
    ExpenseContext.jsx
  hooks/
    useExpenseStats.js
  layouts/
    ProtectLayout.jsx
  pages/
    Dashboard.jsx
    AddExpense.jsx
    History.jsx
    Navbar.jsx
    Footer.jsx
  utils/
    exportCSV.js
    supabaseClient.js
    geminiClient.js
  practice/
    CounterApp.jsx
    ThemeApp.jsx
    ThemeContext.jsx
    FriendContext.jsx
    FriendForm.jsx
    FriendList.jsx
    ScoreBoard.jsx

🚀 Run Locally
bashnpm install
npm run dev

Requires .env.local with VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_CLERK_PUBLISHABLE_KEY, and VITE_GEMINI_API_KEY


📌 What's Next


Second project — AI SaaS micro-tool
Filter expenses by category and date range
Income section with 50/30/20 rule breakdown
Receipt scanning / OCR