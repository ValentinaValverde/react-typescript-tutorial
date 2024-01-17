import { useRef } from "react";

export const Component = () => {
  const ref = useRef<string>();

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};

// solution: take "null" out of the parenthesis on line 4

export const Example = () => {
  const firstOverload = useRef<string>("hello");
  firstOverload.current = "something!";

  const secondOverload = useRef<string>(null);
  //   @ts-expect-error
  secondOverload.current = "error!";
  // this overload gets an error because it is read only ref

  const thirdOverload = useRef<string>();
  thirdOverload.current = "nothing!";
};
