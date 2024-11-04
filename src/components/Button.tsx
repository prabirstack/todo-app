import { ReactNode } from "react";
type ButtonProps = {
  variable?: "primary" | "secondary";
  children: ReactNode;
};
export default function Button({ variable, children }: ButtonProps) {
  return (
    <button
      className={`h-11 bg-[#473a2b] w-full text-white rounded-md cursor-pointer hover:bg-[#322618] ${
        variable === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}
