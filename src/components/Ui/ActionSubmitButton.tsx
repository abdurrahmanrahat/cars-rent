"use client";

import { Button, Spinner } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

const ActionSubmitButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Spinner /> : children}
    </Button>
  );
};

export default ActionSubmitButton;
