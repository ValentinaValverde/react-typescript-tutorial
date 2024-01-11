import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState(
                (currentState): TagState => ({
                  ...currentState,
                  // @ts-expect-error
                  tagselected: tag.id,
                })
              );
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState(
            (currentState): TagState => ({
              ...currentState,
              tags: [
                ...currentState.tags,
                {
                  id: new Date().getTime(),
                  value: "New",
                  // @ts-expect-error
                  otherValue: "something",
                },
              ],
            })
          );
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

// issue: no errors are coming in when random / nonexistent
// tags are being called (where @ts-expect-error is being called)

// solution was to make it (currentState): TagState
// instead of just leaving (currentState)
