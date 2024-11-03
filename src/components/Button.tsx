import { ReactNode } from "react";

export default function Button({
  variable,
  children,
}: {
  variable?: string;
  children: ReactNode;
}) {
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
