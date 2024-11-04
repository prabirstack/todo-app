import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function SideBar() {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-6 pt-4 pb-7">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        <Button variable="secondary">Log In</Button>
        <Button variable="secondary">Register</Button>
      </div>
    </section>
  );
}
