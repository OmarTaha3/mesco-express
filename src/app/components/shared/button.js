import clsx from "clsx";

export default function Button({ children, className, onClick, type, form }) {
  return (
    <button
      onClick={onClick}
      form={form}
      type={type}
      className={clsx(
        "flex items-center gap-3 px-30 bg-gray h-12 rounded-10 font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
}
