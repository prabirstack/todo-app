export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-[972px] text-[11px] mt-[12px] text-black/[0.7]">
      <small className="text-[11px]">
        &copy; {new Date().getFullYear()} Copyright by Prabir Singh
      </small>
      <p>
        Version <b>1.5</b>
      </p>
    </footer>
  );
}
