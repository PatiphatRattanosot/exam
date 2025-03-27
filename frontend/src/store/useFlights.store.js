import { create } from "zustand";
import api from "../services/api";
export const useFlightStore = create((set) => ({
  flights: [],
  isFlightLoading: false,
  getflights: async () => {
    set({ isFlightLoading: true });
    try {
      const res = await api.get(`/flights`);
      console.log(res);

      set({ flights: res.data });
    } catch (error) {
      console.log(error);
    }
  },
  editFlight: async (id, updatedData) => {
    try {
      const res = await api.put(`/flights/${id}`, updatedData);
      set((state) => ({
        flights: state.flights.map((flight) =>
          flight._id === id ? res.data : flight
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  deleteFlight: async (id) => {
    try {
      await api.delete(`/flights/${id}`);
      set((state) => ({
        flights: state.flights.filter((flight) => flight._id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
