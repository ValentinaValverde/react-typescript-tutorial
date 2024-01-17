import { useRef } from "react";

export const Component = () => {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref} />;
};

// solution is putting null in the parenthesis in line 4
// the issue was the it was defaulting as undefined
// (which errored out at line 6 bc undef is not passable)
