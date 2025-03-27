import { useEffect } from "react";

import { useFlightStore } from "../store/useFlights.store";

export default function FlightList() {
  const { flights, loading, getflights } = useFlightStore();

  useEffect(() => {
    getflights();
  }, []);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {flights.map((flight) => (
        <div key={flight._id} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">
            ชื่อเที่ยวบิน: {flight.flightName}
          </h2>
          <p>
            <strong>จาก: </strong> {flight.departureAirport}
          </p>
          <p>
            <strong>ถึง: </strong> {flight.arrivalAirport}
          </p>
          <p>
            <strong>เวลาออกเดินทาง: </strong>{" "}
            {new Date(flight.departureTime).toLocaleString()}
          </p>
          <p>
            <strong>เวลาถึง:</strong>{" "}
            {new Date(flight.arrivalTime).toLocaleString()}
          </p>
          <p>
            <strong>ที่นั่งว่าง: </strong> {flight.availableSeats}
          </p>
          <div className="mt-4 flex justify-between">
            <button className="bg-green-500 text-white px-3 py-1 rounded">
              จองเลย!!
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">
              แก้ไข
            </button>
            <button className="bg-rose-600 text-white px-3 py-1 rounded">
              ลบ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
