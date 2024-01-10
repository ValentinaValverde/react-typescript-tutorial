interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

// solution was to make onClick (in ButtonProps) React.MouseEvent...
// this would be found by assigning a type to onClick and hovering over the error
