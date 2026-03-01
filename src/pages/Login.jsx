
//import header of signIn signOut component from clerk 
import { SignIn} from '@clerk/clerk-react';


const Login = () => {
    
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-8rem)] lg:px-8 mx-2 md:mx-20'>
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-2xl font-bold">Login Page</h2>
        <SignIn path="/login" routing="path" signUpUrl="/register" className="m-0 p-4 text-center"/>
      </div>
    </div>
  )
}

export default Login;
