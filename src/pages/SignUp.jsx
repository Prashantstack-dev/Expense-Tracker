
import { SignUp } from '@clerk/clerk-react';

function SignUpPage() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-6rem)] lg:px-8 mx-2 md:mx-20 lg:mx-30 my-10'>
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-2xl font-bold">Register</h2>
        <SignUp path="/register" routing="path" signInUrl="/login" className="m-0 p-4 text-center text-2xl" />
      </div>
    </div>
  )
}

export default SignUpPage
