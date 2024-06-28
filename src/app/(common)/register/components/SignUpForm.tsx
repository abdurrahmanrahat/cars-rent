"use client";

import ActionSubmitButton from "@/components/Ui/ActionSubmitButton";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { signUpUser } from "../../actions/authAction";

const SignUpForm = () => {
  const ref = createRef<HTMLFormElement>();

  const [state, formAction] = useFormState(signUpUser, null);

  useEffect(() => {
    if (state && state.success) {
      toast.success(state.message, {
        duration: 1500,
      });

      ref.current?.reset();
    }
  }, [state, ref]);

  return (
    <div>
      <form ref={ref} action={formAction}>
        <Input name="name" type="text" label="Name" variant="bordered" />
        <Input
          name="email"
          className="mt-3"
          type="email"
          label="Email"
          variant="bordered"
        />
        <Input
          className="mt-3"
          type="password"
          label="Password"
          name="password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <Link href="/login">already have account ?</Link>
        </div>
        <div className="flex justify-end "></div>
        <ActionSubmitButton>Sign Up</ActionSubmitButton>
      </form>
    </div>
  );
};

export default SignUpForm;
