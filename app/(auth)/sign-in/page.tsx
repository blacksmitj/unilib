"use client";

import { signInWithCredentials } from "@/actions/auth";
import AuthForm from "@/components/auth-form";
import { signInSchema } from "@/lib/validations";

const SignInPage = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default SignInPage;
