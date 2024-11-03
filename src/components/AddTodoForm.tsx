import Button from "./Button";

export const AddTodoForm = () => {
  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-md my-[9px] text-sm block w-full px-4"
      />
      <Button>Add to list</Button>      
    </form>
  );
};
