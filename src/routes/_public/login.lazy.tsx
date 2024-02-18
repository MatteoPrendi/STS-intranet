import { useState, useRef } from "react";
import { Button, Input } from "@nextui-org/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";

export const Route = createLazyFileRoute("/_public/login")({
  component: () => <Page />
});

function Page() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("enters");
  }

  function handleChange() {
    const emailLength = emailRef.current?.value.length as number;
    const passwordLength = passwordRef.current?.value.length as number;

    if (emailLength >= 4 && passwordLength >= 8) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input ref={emailRef} type="text" onChange={handleChange} />
      <Input ref={passwordRef} type="text" onChange={handleChange} />
      <Button type="submit" isDisabled={isDisabled}>
        ACCEDI
      </Button>
    </form>
  );
}
