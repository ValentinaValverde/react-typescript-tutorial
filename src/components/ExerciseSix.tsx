export const Button = ({
  className,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};

export default Parent;

// the goal was to let Button have all the atributes as a normal button
// byt assigning it a type

//could have been this:
// React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// but instead we used:
// React.ComponentProps<"button">
