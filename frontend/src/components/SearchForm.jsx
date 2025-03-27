export default function SearchForm() {
  return (
    <div className="bg-white shadow-md p-6 max-w-3xl mx-auto mt-6 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="From" className="border p-2 rounded" />
        <input type="text" placeholder="To" className="border p-2 rounded" />
        <input type="date" className="border p-2 rounded" />
        <button className="bg-purple-700 text-white p-2 rounded">ค้นหา</button>
      </div>
    </div>
  );
}
