import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-7 col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
      <Logo />
      <Counter />
    </header>
  );
}
