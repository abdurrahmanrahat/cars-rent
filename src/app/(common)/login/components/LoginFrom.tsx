"use client";

import ActionSubmitButton from "@/components/Ui/ActionSubmitButton";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { loginUser } from "../../actions/authAction";

const LoginFrom = () => {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();

  const [state, formAction] = useFormState(loginUser, null);

  useEffect(() => {
    if (state && state.success) {
      toast.success(state.message, {
        duration: 1500,
      });

      ref.current?.reset();
      router.push("/");
    }
  }, [state, ref, router]);

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
        <div className="flex justify-start text-primary my-4">
          <p className="mr-2">if you do not have account</p>{" "}
          <Link href="/register">sign up</Link>
        </div>
        <div className="flex justify-end mt-2">
          <ActionSubmitButton>Login</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default LoginFrom;
