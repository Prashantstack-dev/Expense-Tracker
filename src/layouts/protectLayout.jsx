import {useUser} from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/clerk-react'



const ProtectLayout = () => {
const {isLoaded, isSignedIn, user} = useUser();

if(!isLoaded) {
    return <div> Loading...</div>
}
 if(!isSignedIn && isLoaded) return <RedirectToSignIn />
 console.log(user);
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectLayout;
