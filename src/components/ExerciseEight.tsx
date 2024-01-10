// Imagine NavBar is an external library!

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return <div>Some content</div>;
};

// Your app:

// {/* @ts-expect-error */}
import { Equal, Expect } from "../helpers/type-utils";

type NavBarProps = React.ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;

// the goal is to pull the props from NavBar into my app
// the issue is that the NavBar library doesn't export their props
// solution on line 16
