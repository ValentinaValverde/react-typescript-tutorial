export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={10}
      // How do I figure out what type onChange expects?
      // React.DOMAttributes<HTMLDivElement>.onChange?: React.FormEventHandler<HTMLDivElement> | undefined
      onChange={(e) => {}}

      // How do I get autocomplete with JSX?
      // answer: control + click
    />
  );
};

// overall, command + click or hover to find out which
// types are required for each variable or function
