export default function Banner() {
  return (
    <div
      className="relative h-64 bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <h1 className="text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
        จองตั๋วเครื่องบินราคาพิเศษ
      </h1>
    </div>
  );
}
