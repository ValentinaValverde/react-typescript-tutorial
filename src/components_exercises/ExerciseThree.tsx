interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button: React.FC<Props> = (props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};

export default Parent;

// the assignment here was to find a way for the error to show up sooner
// in the file instead of at line 15, where stuff is actually returned

// the solution to this problem was to add React.FC on line 6
// you can also pass in props through .FC (as shown above)
// props can no longer be passed through (props: Props)
