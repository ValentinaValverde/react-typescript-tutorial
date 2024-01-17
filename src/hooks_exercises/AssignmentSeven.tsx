import { useEffect, useRef } from "react";

export const Component = () => {
  const id = useRef<string>();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};

// solution: put <string> in line 4
