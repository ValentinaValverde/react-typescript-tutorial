import { useEffect, useState } from "react";
// {/* @ts-expect-error */}
import { Equal, Expect } from "../helpers/type-utils";

interface Data {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);

  type test = [Expect<Equal<typeof data, Data | undefined>>];
};

// alt solution: (line 15)

//   const [data, setData] = useState<Data | undefined>(undefined);
//   const [data, setData] = useState<Data | null>(null);
