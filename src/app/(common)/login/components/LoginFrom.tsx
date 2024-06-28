"use client";

import ActionSubmitButton from "@/components/Ui/ActionSubmitButton";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { loginUser } from "../../actions/authAction";

const LoginFrom = () => {
  const ref = createRef<HTMLFormElement>();

  const [state, formAction] = useFormState(loginUser, null);

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
        <Input name="email" type="email" label="Email" variant="bordered" />
        <Input
          className="mt-3"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <Link href="/register">if you dont have account sign Up</Link>
        </div>
        <div className="flex justify-end mt-2">
          <ActionSubmitButton></ActionSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default LoginFrom;
