"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div>
      <form>
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
        {/* <ActionSubmitButton>sign up</ActionSubmitButton> */}
      </form>
    </div>
  );
};

export default SignUpForm;
