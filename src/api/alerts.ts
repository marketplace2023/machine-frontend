import apiClient from "./client";

export interface Alert {
  id: string;
  type: "warning" | "error" | "info";
  message: string;
  timestamp: string;
  resolved?: boolean;
}

export const alertsApi = {
  getActiveAlerts: async (): Promise<Alert[]> => {
    const response = await apiClient.get("/alerts/active");
    return response.data;
  },

  resolveAlert: async (id: string): Promise<void> => {
    await apiClient.put(`/alerts/${id}/resolve`);
  },
};
