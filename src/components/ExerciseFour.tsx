export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      @ts-expect-error
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};

export default Parent;

// {children: React.ReactNode} is a more refined way to do (props: {children: any})
// this method makes it a requirement to pass a child (line 9)
