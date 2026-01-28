import apiClient from "./client";

export interface ThermalZone {
  id: string;
  name: string;
  currentTemperature: number;
  targetTemperature: number;
  status: "normal" | "heating" | "cooling" | "error";
}

export const thermalApi = {
  getZones: async (): Promise<ThermalZone[]> => {
    const response = await apiClient.get("/thermal/zones");
    return response.data;
  },
};
