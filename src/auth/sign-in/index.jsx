import { SignIn } from "@clerk/clerk-react";
import React from "react";

function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-2xl">
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage;
