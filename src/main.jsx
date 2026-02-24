import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import {BrowserRouter} from 'react-router-dom';

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY= "pk_test_ZGV2b3RlZC1weXRob24tOTguY2xlcmsuYWNjb3VudHMuZGV2JA"

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your clerk Publishable key to the .env file");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
    <BrowserRouter>
      <App />
    
    </BrowserRouter>
    {/* </ClerkProvider> */}
  </StrictMode>,
);
