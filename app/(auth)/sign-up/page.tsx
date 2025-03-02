"use client";

import { signUp } from "@/actions/auth";
import AuthForm from "@/components/auth-form";
import { signUpSchema } from "@/lib/validations";

const SignUnPage = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default SignUnPage;
