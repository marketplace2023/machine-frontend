import apiClient from "./client";

export interface LiveMonitoringData {
  oee: number;
  cycleTime: number;
  servosHealth: "good" | "warning" | "critical";
  timestamp: string;
}

export interface DiagnosticsData {
  actuators: Array<{
    id: string;
    name: string;
    temperature: number;
    vibration: number;
    status: "normal" | "warning" | "error";
  }>;
}

export const monitoringApi = {
  getLiveData: async (): Promise<LiveMonitoringData> => {
    const response = await apiClient.get("/monitoring/live");
    return response.data;
  },

  getDiagnostics: async (): Promise<DiagnosticsData> => {
    const response = await apiClient.get("/monitoring/diagnostics");
    return response.data;
  },
};
