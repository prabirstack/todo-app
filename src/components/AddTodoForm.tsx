import { useState } from "react";
import Button from "./Button";

import { useTodosContext } from "../lib/hooks";

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useTodosContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-md my-[9px] text-sm block w-full px-4"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
