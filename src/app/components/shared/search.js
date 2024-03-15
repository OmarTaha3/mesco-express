export default function Search({ type }) {
  const data = {
    label:
      type === "shipments" ? "Shipments" : type === "address" ? "Address" : "",
  };
  return (
    <section className="flex items-center gap-30 w-full mb-6">
      <div className="font-semibold">Your {data.label}</div>
      <input
        type="search"
        placeholder="Search by anything"
        className="px-6 transition border-grayAlterTwo flex-1 h-12 border rounded-10 placeholder:text-grayPlusPlus"
      />
    </section>
  );
}
