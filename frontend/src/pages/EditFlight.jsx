import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useFlightStore } from "../store/useFlights.store";

export default function EditFlight() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { flights, editFlight } = useFlightStore();
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    const flight = flights.find((f) => f._id === id);
    if (flight) setFlightData(flight);
  }, [id, flights]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editFlight(id, flightData);
      Swal.fire("สำเร็จ!", "เที่ยวบินถูกแก้ไขเรียบร้อยแล้ว", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถแก้ไขเที่ยวบินได้", "error");
    }
  };

  if (!flightData) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <div className="mb-4">
        <label className="block mb-2">ชื่อเที่ยวบิน</label>
        <input
          type="text"
          value={flightData.flightName}
          onChange={(e) =>
            setFlightData({ ...flightData, flightName: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">จาก</label>
        <input
          type="text"
          value={flightData.departureAirport}
          onChange={(e) =>
            setFlightData({ ...flightData, departureAirport: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">ถึง</label>
        <input
          type="text"
          value={flightData.arrivalAirport}
          onChange={(e) =>
            setFlightData({ ...flightData, arrivalAirport: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        บันทึก
      </button>
    </form>
  );
}
