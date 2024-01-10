import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type InputProps = Omit<ComponentProps<"input">, "onChange"> & {
  onChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};

// the goal was to find a way to override the default type setting of onChange

// A more complicated solution that I do not quite understand:

// type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

// type InputProps = OverrideProps<
//   ComponentProps<"input">,
//   {
//     onChange: (value: string) => void;
//   }
// >;

// export const Input = (props: InputProps) => {
//   return (
