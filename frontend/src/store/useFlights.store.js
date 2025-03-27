import { create } from "zustand";
import api from "../services/api";
export const useFlightStore = create((set, get) => ({
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
}));
