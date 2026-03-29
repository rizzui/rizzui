export default function ButtonBlock() {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="rounded h-10 w-28 border border-gray-200 bg-white dark:bg-gray-100 shadow-sm" />
      <div className="rounded h-10 w-28 bg-gray-900 group-hover/card:w-10 group-hover/card:rounded-full transition-all" />
    </div>
  );
}
